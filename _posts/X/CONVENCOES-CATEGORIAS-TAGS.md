---
title: Convenções de Tags
description: Referência oficial de taxonomia para posts do blog.
cssclasses:
  - wide-page
---

# Convenções de Tags

> [!info] Propósito
> Este documento define as regras para `tags` nos frontmatters dos posts. Toda nova publicação **deve** seguir esta convenção.
>
> **Histórico:** desde agosto de 2026 o blog não usa mais categorias — a classificação foi unificada em tags.

---

## Regras Gerais

1. **Tags = classificação dos posts** — 1 a 6 por post, sempre da lista aprovada abaixo.
2. **Todo post deve ter pelo menos 1 tag de seção** (ver "Tags de Seção" abaixo) — ela cumpre o papel que as antigas categorias tinham.
3. **Sem caracteres especiais** — letras sem acento, hífen para compostos (`pensamento-sistemico`). Exceção histórica: `Música`.
4. **Idioma do conteúdo** — usar tag `En` para posts em inglês; posts em português não precisam de tag de idioma.

---

## Tags Aprovadas

### Seção (antigas categorias)

| Tag | Quando usar |
|-----|------------|
| **Escrita** | Poesia, prosa, ensaio literário, trechos de projeto literário, textos criativos |
| **Reflexao** | Análise conceitual, filosofia, opinião argumentativa, pensamentos sistêmicos |
| **Aprendizado** | Métodos de estudo, PKM, dicas de ferramentas, tutoriais de produtividade |
| **Programacao** | Tutoriais de código, guias de linguagens, lógica, ferramentas de dev |
| **Cultura** | Reviews de música, livros, filmes, arte, análise de obras |
| **Pessoal** | Sobre mim, atualizações do blog, notas pessoais, avatares |
| **Releitura** | Releitura/reescrita de uma obra ou texto existente |

> [!warning] Uma tag de seção por post (regra principal)
> Use **1 tag de seção** por post, raramente 2. Exemplo: um tutorial de plugin Obsidian com reflexão sobre PKM poderia ser `Aprendizado` + `Reflexao`. Se na dúvida, escolha a **mais específica**.

### Forma / Formato

| Tag | Quando usar |
|-----|------------|
| `Poesia` | Poemas, versos, prosa poética |
| `Ensaio` | Textos argumentativos ou reflexivos em formato contínuo |
| `Resenha` | Análise crítica de obra (álbum, livro, filme) |
| `Tutorial` | Guia passo-a-passo com instruções práticas |
| `Dicas` | Listas rápidas de conselhos ou atalhos |
| `Trecho` | Fragmento de projeto literário maior |

### Tema / Conteúdo

| Tag | Quando usar |
|-----|------------|
| `Amor` | Relações, saudade, romantismo |
| `Solidao` | Isolamento, solidão existencial |
| `Existencialismo` | Propósito, existência, finitude, sentido da vida |
| `Filosofia` | Conceitos filosóficos, referências a pensadores |
| `Pensamento-sistemico` | Sistemas, holismo, complexidade, teoria geral de sistemas |
| `Pkm` | Personal Knowledge Management, métodos de anotação |
| `Obsidian` | Específico da ferramenta Obsidian |
| `Logica` | Lógica de programação, algoritmos, pensamento computacional |
| `Ruby` | Linguagem Ruby |
| `Python` | Linguagem Python |
| `Musica` | Análise ou referência musical |
| `Literatura` | Referências literárias, poetas, escritores |
| `Ciencia` | Divulgação científica, conceitos de ciência |
| `Autoconhecimento` | Reflexões sobre si mesmo, desenvolvimento pessoal |

### Idioma

| Tag | Quando usar |
|-----|------------|
| `En` | Post escrito inteiramente em inglês |

---

## Mapeamento dos Posts Existentes

> [!note] Posts já publicados e suas tags

| Post | Tags |
|------|------|
| Um resumo sobre aprender com anotações | `PKM`, `Dicas`, `Aprendizado` |
| Compreensão Fragmentada | `Pensamento-sistemico`, `Reflexao` |
| Introdução ao Ruby | `Ruby`, `Programacao` |
| O Framework ARC | `PKM`, `Aprendizado` |
| 10 Dicas Rápidas de Obsidian | `Obsidian`, `PKM`, `Dicas`, `Aprendizado` |
| Conhecimento | `Filosofia`, `Existencialismo`, `Escrita` |
| O limite da individualidade | `Filosofia`, `Escrita` |
| Releitura de um poema escrito há séculos | `Poesia`, `Literatura`, `Filosofia`, `Escrita`, `Releitura` |
| O agora | `Existencialismo`, `Escrita`, `Reflexao` |
| Eterno | `Existencialismo`, `Reflexao` |
| Human Sadness | `Música`, `Cultura` |
| O que realmente importa | `Poesia`, `Autoconhecimento`, `Pessoal`, `Escrita` |
| Não me entenda mal | `Dicas`, `Aprendizado` |
| Sobre o que há de mais belo nas flores | `Poesia`, `Escrita` |
| Céu | `Poesia`, `Escrita` |
| O Eterno Retorno - Nietzsche | `Filosofia`, `Existencialismo`, `Reflexao`, `Releitura` |

---

## Frontmatter Exemplo

```yaml
---
title: Título do Post
description: Breve descrição do conteúdo.
date: 2026-06-08 12:00:00
author: Val
tags:
  - Escrita
  - Poesia
  - Amor
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
  → SIM: tag Escrita + tags de forma (Poesia/Ensaio/Trecho) + tags de tema
  → NÃO: continuar

O post analisa uma obra (álbum, livro, filme)?
  → SIM: tag Cultura + tag Resenha + tag do meio (Musica/Literatura)
  → NÃO: continuar

O post ensina algo prático (tutorial, dica)?
  → SIM: É sobre código?
    → SIM: tag Programacao + tags da linguagem + Tutorial
    → NÃO: tag Aprendizado + tags do tema + Tutorial/Dicas
  → NÃO: continuar

O post é uma reflexão conceitual?
  → SIM: tag Reflexao + tags do tema
  → NÃO: tag Pessoal
```
