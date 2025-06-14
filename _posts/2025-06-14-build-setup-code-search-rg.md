---
title: "FZF Code Search Suite: Buscas Interativas no Terminal"
description: Um conjunto de scripts shell que permite realizar buscas rápidas, interativas e inteligentes em projetos de código-fonte.
date: 2025-06-14 09:05:44
author: Val
categories:
  - Windows Powershell
  - Linux
tags:
  - Setup
pin: 
image: assets/img/fzf-example-preview.png
math: false
mermaid: false
calendar: "[[2025-06-14]]"
---

O **FZF Code Search Suite** é um conjunto de scripts shell que permite realizar buscas rápidas, interativas e inteligentes em projetos de código-fonte. Ele combina ferramentas consolidadas como `fzf`, `ripgrep` e `bat` para oferecer uma interface leve e eficiente, especialmente útil para quem trabalha com múltiplas linguagens e deseja localizar rapidamente definições, comentários ou trechos específicos no terminal.

---

## 💻 Instalação e Configuração

### 📌 Funcionalidades

1. Verificação automática de dependências (`fzf`, `ripgrep`)
    
2. Suporte multiplataforma: `bat` no macOS, `batcat` no Linux
    
3. Fallback inteligente com `head` para visualização
    
4. Suporte a linguagens como JavaScript, TypeScript, Go e Python
    
5. Modo `search_todos()` para encontrar marcações como TODO, FIXME, etc.
    
6. Atualização dinâmica das buscas com `alt+f`
    
7. Mensagens claras em caso de erro ou ausência de preview
    

---

### 🐧 Instalação no WSL / Linux

```bash
sudo apt update && sudo apt install -y ripgrep fzf bat
```

### 🍏 Instalação via Homebrew (macOS / Linux)

```bash
brew install ripgrep fzf bat
```
---

## ⚙️ Estrutura do Script

### Checagem de dependências

```bash
_code_search_deps=("fzf" "rg")
for dep in "${_code_search_deps[@]}"; do
  if ! command -v "$dep" &> /dev/null; then
    echo "⚠ Missing dependency: $dep"
    case "$dep" in
      fzf) echo "Install with: sudo apt install fzf (or brew install fzf)" ;;
      rg)  echo "Install ripgrep: sudo apt install ripgrep (or brew install ripgrep)" ;;
    esac
    return 1 2>/dev/null || exit 1
  fi
done
```

### Configuração de visualização

```bash
if command -v bat &> /dev/null; then
  export FZF_PREVIEW_CMD="bat --style=numbers,header --color=always --line-range"
elif command -v batcat &> /dev/null; then
  export FZF_PREVIEW_CMD="batcat --style=numbers,header --color=always --line-range"
else
  export FZF_PREVIEW_CMD="head -n 100"
  echo "ℹ Para melhor visualização, instale 'bat'"
fi
```

---

## 🔎 Função Principal: `_search_engine`

```bash
_search_engine() {
  local mode="$1" query="$2" lang="${3:-py}"
  local ext pattern preview_range

  case "$lang" in
    js|javascript) ext="js" ;;
    ts|typescript) ext="ts" ;;
    go|golang)     ext="go" ;;
    *)             ext="$lang" ;;
  esac

  case "$mode" in
    strict)
      pattern="^(def|class|function|const|let|var|struct|enum|interface|trait)\\s+\\w+"
      preview_range=":200"
      ;;
    balanced)
      pattern="^(function|class|const|let|var|import|export|def|from|type|module)\\s"
      preview_range=":300"
      ;;
    comments)
      pattern="(^\\s*[#//]|/\\*|^\\s*--|^\\s*\"\"\")"
      preview_range=":100"
      ;;
    todos)
      pattern="(TODO|FIXME|NOTE|BUG|XXX|HACK)[ :]"
      preview_range=":50"
      ;;
    flexible)
      pattern="."
      preview_range=":500"
      ;;
    *)
      echo "❌ Modo inválido: $mode" >&2
      return 1
      ;;
  esac

  local preview_cmd="$FZF_PREVIEW_CMD $preview_range {1} 2>/dev/null || echo 'Preview not available'"

  rg --color=always --hidden --follow --smart-case -n "$pattern" -g "*.$ext" |
  awk -F: '{
    filename=$1
    gsub(/^.*\//, "", filename)
    print $1 ":" $2 ":" filename ":" substr($0, index($0,$3))
  }' |
  fzf \
    --query "$query" \
    --ansi \
    --delimiter=":" \
    --with-nth="3,4" \
    --preview="$preview_cmd" \
    --preview-window="right:48%:wrap" \
    --bind "change:reload(rg --color=always --hidden --smart-case -n {q} -g '*.$ext' || echo 'No matches')" \
    --bind "alt-f:unbind(change)+reload(rg --color=always --hidden -n '$pattern' -g '*.$ext')" \
    --height=90% \
    --layout=reverse \
    --border=rounded \
    --prompt="Code($mode:$ext)> "
}
```

---

## 🔄 Funções Wrapper

```bash
search_code()     { _search_engine "balanced" "$@"; }
search_def()      { _search_engine "strict" "$@"; }
search_comments() { _search_engine "comments" "$@"; }
search_todos()    { _search_engine "todos" "$@"; }
search_all()      { _search_engine "flexible" "$@"; }
```



---

## 🔍 Exemplos Básicos de Uso


## 🔍 FZF Code Search - Guia Prático (PT-BR)

### 📌 Uso Básico
```bash
# Componentes React
search_def "Button" jsx        # Busca definições exatas de componentes
search_code "useState" jsx     # Encontra usos de hooks

# Rotas Node.js
search_code "router.get" js     # Rotas do Express
search_code "app.post" ts       # Endpoints API em TypeScript

# Classes Python
search_def "" py                # Lista todas as classes
search_def "Model" py           # Models do Django

# Redux/Ações
search_code "export const" ts   # Action creators
search_code "useSelector" tsx    # Uso de hooks

# Comentários TODO
search_todos ""                 # Encontra todos TODOs
search_todos "REFATORAR"        # Busca TODOs específicos em PT-BR

# Busca textual
search_all "before_save" rb     # Callbacks no Ruby
```

### 🛠️ Fluxos Avançados
```bash
# Busca multi-linguagem
search_def "Repository" go      # Interfaces em Go
search_def "Repository" java    # Classes em Java

# Padrões de configuração
search_all "port" yml           # Arquivos YAML
search_all "timeout" json       # Arquivos JSON

# Auditoria de segurança
search_code "senha"             # Termos em PT-BR
search_code "token"             # Tokens de acesso
search_todos "SEGURANÇA"        # Alertas de segurança

# Auxílio em refatoração
search_def "Legado"             # Componentes legados
search_code "@deprecated"       # Código depreciado
```

### ⚡ Combinações Úteis
```bash
# Abrir resultado no Vim
search_def "Usuario" | cut -d: -f1 | xargs -o vim

# Filtrar resultados de teste
search_all "erro" | grep -v "test_" | fzf

# Contar ocorrências
search_code "logger" | wc -l
```

### 🏗️ Casos Reais
```bash
# 1. Onboarding - Conhecendo o código
search_def "Controller"         # Todos controllers
search_code "config"            # Padrões de configuração
search_todos "PERGUNTA"         # Dúvidas não resolvidas

# 2. Debugging - Rastreando erros
search_code "try"               # Blocos try-catch
search_code "catch"
search_code "logger.error"

# 3. Code Review - Padrões problemáticos
search_code "eval("             # Avaliações dinâmicas
search_code "innerHTML"         # XSS potencial
search_all "senha.*="           # Credenciais expostas
```

### 💡 Dicas de Performance
```bash
# Busca em diretórios específicos (mais rápido)
cd src/main && search_def "Service" java

# Ignorar arquivos de teste
search_all "factory" --glob '!*test*'

# Busca otimizada em grandes bases
search_code "import" --threads 4
```

---

## ✅ Dicas Finais

Adicione aliases no seu `.bashrc`/`.zshrc` para facilitar o uso:

```bash
alias sd='search_def'
alias st='search_todos'
alias sc='search_code'
alias sa='search_all'
```

---






