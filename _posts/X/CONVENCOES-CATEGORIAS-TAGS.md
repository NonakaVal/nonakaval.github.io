---
title: Convenções de Categorias e Tags
description: Referência oficial de taxonomia para posts do blog.
cssclasses:
  - wide-page
---

# Convenções de Categorias e Tags

> [!info] Propósito
> Este documento define as regras para `categories` e `tags` nos frontmatters dos posts. Toda nova publicação **deve** seguir esta convenção.

---

## Regras Gerais

1. **Categorias = seção ampla do blog** — máximo 1 por post (raramente 2).
2. **Tags = classificação específica** — 1 a 4 por post, sempre da lista aprovada abaixo.
3. **Sem acentos** em categorias e tags — usamos `aprendizado` (não `aprendizagem`), `programacao` sem acento no frontmatter.
4. **Sem caracteres especiais** — letras minúsculas, hífen para compostos (`pensamento-sistemico`).
5. **Idioma do conteúdo** — usar tag `en` para posts em inglês; posts em português não precisam de tag de idioma.
6. **Nunca repetir** o que já está na categoria como tag — se a categoria é `Programacao`, não precisa de tag `programacao`.

---

## Categorias

| Categoria | Quando usar | Icone mental |
|-----------|------------|--------------|
| **Escrita** | Poesia, prosa, ensaio literário, trechos de projeto literário, textos criativos | Pena e tinta |
| **Reflexao** | Análise conceitual, filosofia, opinião argumentativa, pensamentos sistêmicos | Cérebro |
| **Aprendizado** | Métodos de estudo, PKM, dicas de ferramentas, tutoriais de produtividade | Caderno |
| **Programacao** | Tutoriais de código, guias de linguagens, lógica, ferramentas de dev | Terminal |
| **Cultura** | Reviews de música, livros, filmes, arte, análise de obras | Pipoca/Discos |
| **Pessoal** | Sobre mim, atualizações do blog, notas pessoais, avatares | Avatar |

> [!warning] Uma categoria por post (regra principal)
> Apenas em casos excepcionais use 2 categorias. Exemplo: um tutorial de plugin Obsidian com reflexão sobre PKM poderia ser `Aprendizado` + `Reflexao`. Se na dúvida, escolha a **mais específica**.

---

## Tags Aprovadas

### Forma / Formato

| Tag | Quando usar |
|-----|------------|
| `poesia` | Poemas, versos, prosa poética |
| `ensaio` | Textos argumentativos ou reflexivos em formato contínuo |
| `resenha` | Análise crítica de obra (álbum, livro, filme) |
| `tutorial` | Guia passo-a-passo com instruções práticas |
| `dicas` | Listas rápidas de conselhos ou atalhos |
| `trecho` | Fragmento de projeto literário maior |

### Tema / Conteúdo

| Tag | Quando usar |
|-----|------------|
| `amor` | Relações, saudade, romantismo |
| `solidao` | Isolamento, solidão existencial |
| `existencialismo` | Propósito, existência, finitude, sentido da vida |
| `filosofia` | Conceitos filosóficos, referências a pensadores |
| `pensamento-sistemico` | Sistemas, holismo, complexidade, teoria geral de sistemas |
| `pkm` | Personal Knowledge Management, métodos de anotação |
| `obsidian` | Específico da ferramenta Obsidian |
| `logica` | Lógica de programação, algoritmos, pensamento computacional |
| `ruby` | Linguagem Ruby |
| `python` | Linguagem Python |
| `musica` | Análise ou referência musical |
| `literatura` | Referências literárias, poetas, escritores |
| `ciencia` | Divulgação científica, conceitos de ciência |
| `autoconhecimento` | Reflexões sobre si mesmo, desenvolvimento pessoal |

### Idioma

| Tag | Quando usar |
|-----|------------|
| `en` | Post escrito inteiramente em inglês |

---

## Mapeamento dos Posts Existentes

> [!note] Posts já publicados e suas categorias/tags corretas

| Post | Categoria | Tags |
|------|-----------|------|
| Sobre oq há de mais belo nas flores | Escrita | `poesia`, `amor` |
| O agora (porque somos) | Escrita | `ensaio`, `existencialismo` |
| Solidão | Escrita | `poesia`, `solidao` |
| Limite da Individualidade | Escrita | `ensaio`, `filosofia` |
| Conhecimento | Escrita | `ensaio`, `filosofia`, `existencialismo` |
| Compreensão Fragmentada | Reflexao | `pensamento-sistemico`, `ensaio` |
| ARC Framework | Aprendizado | `pkm`, `tutorial` |
| Aprender com Anotações | Aprendizado | `pkm`, `tutorial`, `dicas` |
| Rumi (poema) | Escrita | `poesia`, `literatura`, `filosofia` |
| Introdução ao Ruby | Programacao | `ruby`, `tutorial` |
| 10 Dicas de Obsidian | Aprendizado | `obsidian`, `pkm`, `dicas` |
| Tranquility Base (Arctic Monkeys) | Cultura | `resenha`, `musica` |
| Python: A Practical Guide | Programacao | `python`, `logica`, `tutorial`, `en` |
| About me | Pessoal | `en` |

---

## Frontmatter Exemplo

```yaml
---
title: Título do Post
description: Breve descrição do conteúdo.
date: 2026-06-08 12:00:00
author: Val
categories:
  - Escrita
tags:
  - poesia
  - amor
pin: false
image: assets/img/post-banners/nome-da-imagem.png
math: false
mermaid: false
calendar: "[[2026-06-08]]"
---
```

---

## Como Adicionar Novas Tags

> [!danger] Processo obrigatório
> 1. Verifique se a tag não existe na lista acima com outro nome.
> 2. Adicione a tag na seção correspondente deste documento.
> 3. Só então use a tag nos posts.
>
> **Manter a lista controlada** evita tags duplicadas com variações (`dica` vs `dicas` vs `tip`).

---

## Decisão Rápida (Fluxograma)

```
O post é um texto criativo (poema, prosa)?
  → SIM: categoria Escrita + tags de forma (poesia/ensaio/trecho) + tags de tema
  → NÃO: continuar

O post analisa uma obra (álbum, livro, filme)?
  → SIM: categoria Cultura + tag resenha + tag do meio (musica/literatura)
  → NÃO: continuar

O post ensina algo prático (tutorial, dica)?
  → SIM: É sobre código?
    → SIM: categoria Programacao + tags da linguagem + tutorial
    → NÃO: categoria Aprendizado + tags do tema + tutorial/dicas
  → NÃO: continuar

O post é uma reflexão conceitual?
  → SIM: categoria Reflexao + tags do tema
  → NÃO: categoria Pessoal
```
