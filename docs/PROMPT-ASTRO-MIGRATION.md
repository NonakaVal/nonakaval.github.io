# Prompt de instrução — Criar blog Astro (substituto do Jekyll/Chirpy)

> Cole este documento inteiro (ou a seção **PROMPT COPIÁVEL**) como system/user prompt para um agente ou dev.  
> Objetivo: gerar um projeto **Astro** que substitua o blog atual sem Ruby/Jekyll, mantendo **GitHub Pages** e **Obsidian** como fluxo de escrita.

---

## PROMPT COPIÁVEL

```
Você é um engenheiro sênior de front-end/conteúdo estático. Sua tarefa é CRIAR do zero (ou em branch nova) um blog estático com Astro que substitui um blog Jekyll + tema Chirpy, preservando o fluxo Obsidian → Git → GitHub Pages.

Não use Jekyll, Ruby, Bundler nem Liquid. Não use Next.js, Nuxt nem SSR em runtime. O deploy final é 100% estático no GitHub Pages.

══════════════════════════════════════════════════════════════════
1. CONTEXTO DO PROJETO ATUAL (origem)
══════════════════════════════════════════════════════════════════

Site atual:
- Nome: "Not A Dev"
- Tagline: "by @NonakaVal"
- URL: https://nonakaval.github.io/
- Idioma: pt-BR
- Autor: Valdenir Nonaka (Val)
- Email: valdenirnonaka@gmail.com
- GitHub: NonakaVal
- Instagram: https://www.instagram.com/nonaka.val
- YouTube: https://www.youtube.com/@nonaka96
- Reddit: https://www.reddit.com/u/Ok_Blacksmith7269
- Avatar: assets/img/profile/killua.jpg (ou profire.jpg na about)

Stack atual a abandonar:
- Jekyll 7 + jekyll-theme-chirpy
- Gemfile / vendor/bundle
- Liquid: {% post_url %}, {% include embed/youtube.html %}
- Chirpy prompts: {: .prompt-tip }, {: .prompt-info }, {: .prompt-warning },
  {: .prompt-danger }, {: .prompt-quote }, {: .prompt-next }, {: .prompt-idea }
- Plugin Ruby last_modified_at via git
- Dois workflows de Pages com Ruby

Stack e fluxo desejados:
- Astro (última major estável) + TypeScript
- Markdown/MDX para posts
- Content Collections
- Build estático (output: 'static')
- GitHub Actions → actions/upload-pages-artifact → actions/deploy-pages
- Obsidian como editor: arquivos legíveis sem Liquid

Conteúdo típico (~18 posts hoje, vai crescer):
- Poesia, ensaio, reflexão, PKM/Obsidian, programação, cultura, pessoal
- Frontmatter com categories, tags, pin, image (banner), math, mermaid
- Imagens em assets/img/post-banners, assets/post-images, assets/orphan, gallery/
- Embeds YouTube em alguns posts
- Links internos entre posts
- Footnotes ocasionais
- Callouts / caixas de destaque (hoje via Chirpy prompts; no Obsidian também > [!tip])

Convenções de taxonomia (OBRIGATÓRIO respeitar):

Categorias (preferir UMA por post):
- Escrita | Reflexao | Aprendizado | Programacao | Cultura | Pessoal

Tags aprovadas (1–4 por post; minúsculas, sem acento, hífen em compostos):
Forma: poesia, ensaio, resenha, tutorial, dicas, trecho
Tema: amor, solidao, existencialismo, filosofia, pensamento-sistemico,
      pkm, obsidian, logica, ruby, python, musica, literatura, ciencia,
      autoconhecimento
Idioma: en (só se o post for em inglês)

Regras:
- Não repetir a categoria como tag
- Sem acentos em slugs de category/tag
- Manter lista controlada; não inventar tags novas sem documentar

Permalink atual a PRESERVAR (SEO / links antigos):
- Posts: /posts/:slug/   (ex.: /posts/flores/, /posts/arc-framework/)
- Categories: /categories/:name/
- Tags: /tags/:name/
- About: /about/ (ou página equivalente)
- Home: /
- Archives (lista cronológica): /archives/ (desejável)
- Paginação home: 10 posts por página (como Chirpy)

Nome de arquivo legado Jekyll:
- YYYY-MM-DD-slug.md (ex.: 2026-07-03-flores.md)
- Aceitar esse padrão; slug da URL NÃO precisa incluir a data
- Cuidado com caracteres especiais no nome (ex.: 10-dicas-#1) → slug sanitizado

══════════════════════════════════════════════════════════════════
2. OBJETIVOS DO NOVO PROJETO
══════════════════════════════════════════════════════════════════

Criar um blog Astro que:

A) Publique no GitHub Pages sem Ruby
B) Seja escrito no Obsidian com Markdown limpo
C) Mantenha a identidade de BLOG (cronológico, categorias, tags, banners, pin),
   NÃO um digital garden/Quartz com grafo obrigatório
D) Preserve permalinks /posts/:slug/ sempre que possível
E) Tenha UI limpa, legível, dark/light mode, boa tipografia para prosa e poesia
F) Seja fácil de manter: poucas dependências, config clara, docs mínimas

Não é objetivo copiar pixel-a-pixel o Chirpy. É objetivo copiar o COMPORTAMENTO
e a estrutura de conteúdo, com visual moderno inspirado em blogs minimalistas
(sidebar opcional, foco no texto).

══════════════════════════════════════════════════════════════════
3. ESTRUTURA DE PASTAS OBRIGATÓRIA
══════════════════════════════════════════════════════════════════

Propor e implementar algo equivalente a:

.
├── content/
│   ├── posts/                    # posts publicados (fonte da verdade do site)
│   │   └── YYYY-MM-DD-slug.md
│   └── pages/                    # about, etc. (opcional collection)
├── public/
│   └── assets/                   # copiar assets estáticos do site atual
│       ├── img/
│       │   ├── post-banners/
│       │   ├── profile/
│       │   └── favicons/
│       ├── post-images/
│       ├── orphan/
│       └── ...
├── src/
│   ├── components/
│   │   ├── layout/               # Header, Footer, Sidebar, ThemeToggle
│   │   ├── post/                 # PostCard, PostMeta, PostNav, Toc, Banner
│   │   ├── ui/                   # Prompt/Callout, Badge, Pagination
│   │   └── embeds/               # YouTubeEmbed
│   ├── content.config.ts         # (ou src/content/config.ts) schema Zod
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PostLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.astro           # home + paginação
│   │   ├── page/[n].astro        # /page/2/ se necessário
│   │   ├── posts/
│   │   │   └── [slug].astro      # /posts/:slug/
│   │   ├── categories/
│   │   │   ├── index.astro
│   │   │   └── [category].astro
│   │   ├── tags/
│   │   │   ├── index.astro
│   │   │   └── [tag].astro
│   │   ├── archives.astro
│   │   ├── about.astro
│   │   ├── rss.xml.ts
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css            # tokens, tipografia, dark mode
│   ├── lib/
│   │   ├── posts.ts              # sort, pin, slug, lastmod helpers
│   │   ├── taxonomy.ts           # categories/tags lists + normalize
│   │   └── dates.ts
│   └── site.config.ts            # título, url, autor, social, paginate
├── vault/                        # (RECOMENDADO) Obsidian vault auxiliar
│   ├── .obsidian/                # configs do vault (não publicar)
│   ├── X/                        # convenções, templates, snippets
│   │   ├── CONVENCOES-CATEGORIAS-TAGS.md
│   │   ├── TIPOGRAFIA.md
│   │   └── Templates/
│   └── drafts/                   # rascunhos NÃO publicados
├── .github/workflows/
│   └── deploy.yml                # build Astro → GitHub Pages
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md

Regras de publicação:
- Só o que está em content/posts/ vira post no site
- vault/ e vault/drafts/ NÃO entram no build (exceto se o usuário copiar p/ content/posts)
- .obsidian/ nunca é publicado
- public/assets é servido como /assets/...

Se o repositório for o próprio nonakaval.github.io, o site pode viver na raiz.
Se for monorepo de migração, pode viver em /blog ou branch `astro`.

══════════════════════════════════════════════════════════════════
4. SCHEMA DE FRONTMATTER (Content Collection)
══════════════════════════════════════════════════════════════════

Definir schema Zod rigoroso para posts:

```ts
{
  title: string,                    // obrigatório
  description: string,              // obrigatório (SEO + cards)
  date: date | string ISO,          // obrigatório (pub date)
  updated?: date | string,          // opcional (last modified)
  author: string,                   // default "Val"
  categories: string[],             // 1 (raramente 2); enum das 6 categorias
  tags?: string[],                  // 0–4; preferir lista aprovada
  pin?: boolean,                    // default false; posts pinados no topo da home
  image?: string,                   // path do banner, ex: /assets/img/post-banners/foo.png
  math?: boolean,                   // default false → carregar KaTeX/MathJax se true
  mermaid?: boolean,                // default false → carregar mermaid se true
  draft?: boolean,                  // default false; se true, não publicar em prod
  toc?: boolean,                    // default true
  // NÃO exigir "calendar" no site; se vier no YAML, ignorar ou strip
  // calendar: "[[YYYY-MM-DD]]" é só metadado Obsidian
}
```

Slug:
- Gerar a partir do nome do arquivo removendo o prefixo de data
  `2026-07-03-flores.md` → slug `flores`
- Sanitizar: lowercase, remover # e caracteres inválidos em URL
- URL final: /posts/{slug}/

Ordenação:
- pin: true primeiro
- depois date desc

Validação opcional em build (nice-to-have):
- Avisar se category fora da lista
- Avisar se tag fora da lista aprovada

══════════════════════════════════════════════════════════════════
5. MARKDOWN / SINTAXE (compatível com Obsidian)
══════════════════════════════════════════════════════════════════

O autor escreve no Obsidian. Portanto:

ACEITAR e RENDERIZAR:
1. Markdown GFM padrão (headings, lists, tables, task lists, footnotes)
2. Callouts estilo Obsidian:
   > [!tip] Título opcional
   > texto
   > [!info] | [!warning] | [!danger] | [!note] | [!quote]
   > [!idea] | [!next] | [!song]   (mapear para estilos de prompt)
3. Imagens com path absoluto do site:
   ![alt](/assets/post-images/flores/x.png)
   ou <img src="/assets/...">
4. Code fences com language tag + syntax highlight (Shiki via Astro)
5. Footnotes [^1]
6. Links internos relativos: [texto](/posts/outro-slug/)
7. Opcional (fase 2): wikilinks [[slug]] ou [[slug|label]] → /posts/slug/

NÃO usar Liquid. Documentar migração:

| Legado Jekyll/Chirpy                         | Novo                                        |
|----------------------------------------------|---------------------------------------------|
| {% post_url 2026-07-03-flores %}             | [texto](/posts/flores/)                     |
| {% include embed/youtube.html id='ID' %}     | componente ou directive MDX / shortcode     |
| {: .prompt-tip } + blockquote                | > [!tip]                                    |
| {: .prompt-info/warning/danger/quote/next}   | > [!info] etc.                              |
| calendar: "[[2026-07-11]]"                   | só no vault; opcional no frontmatter        |

Implementar YouTube de forma limpa (escolher UMA e documentar):
- Opção preferida: MDX com <YouTube id="..." />
- Ou remark directive: ::youtube{id="..."}
- Ou HTML <iframe> padrão no markdown (mais feio, mas zero config)

Para poetry/prose: tipografia confortável, line-height generoso,
max-width ~65–75ch no corpo do post.

══════════════════════════════════════════════════════════════════
6. PÁGINAS E FEATURES (MVP obrigatório)
══════════════════════════════════════════════════════════════════

MVP (deve funcionar no primeiro PR utilizável):

[ ] Home (/) com lista de posts (10 por página), pin no topo
[ ] Paginação /page/2/ ...
[ ] Post individual /posts/:slug/ com:
    - title, description meta, date, updated se houver
    - banner se image
    - categories + tags clicáveis
    - TOC (desktop; collapsible mobile)
    - conteúdo markdown
    - nav prev/next (por data)
[ ] /categories/ e /categories/:name/
[ ] /tags/ e /tags/:name/
[ ] /archives/ (lista cronológica agrupada por ano/mês)
[ ] /about/ (conteúdo migrável do about atual)
[ ] 404
[ ] RSS (rss.xml) + sitemap
[ ] SEO básico: title template, description, og:image (banner ou default),
    canonical URL com site.url
[ ] Dark / light mode (toggle + prefers-color-scheme + persist localStorage)
[ ] Layout responsivo mobile-first
[ ] Acessibilidade básica: landmarks, contraste, focus states
[ ] favicon a partir de assets/favicon existentes

Nice-to-have (fase 2, NÃO bloquear MVP):
[ ] Busca client-side (Pagefind ou JSON index)
[ ] PWA
[ ] Related posts por tags/categories
[ ] Math (KaTeX) condicional
[ ] Mermaid condicional
[ ] Giscus comments
[ ] last_modified_at via git no build
[ ] Galeria de imagens
[ ] i18n completo (hoje o site é pt-BR; UI strings em pt-BR)

══════════════════════════════════════════════════════════════════
7. DESIGN / UI
══════════════════════════════════════════════════════════════════

Diretrizes:
- Visual de blog pessoal minimalista, legível, não “SaaS landing”
- Tipografia: system stack boa OU fonte open-source (ex. Source Serif / Inter)
  — uma sans para UI, uma serif opcional para corpo literário
- Cores: tokens CSS com --bg, --fg, --muted, --accent, --border
- Dark mode de primeira classe
- Sidebar opcional no desktop com: avatar, nome do site, tagline, nav, social
- Home: cards ou lista com title, description, date, tags, thumbnail se houver
- Não depender de Font Awesome pesado se possível; SVGs simples para ícones sociais
- CSS: preferir CSS nativo moderno (ou scoped) em vez de framework pesado;
  se usar algo, Tailwind é aceitável se manter o CSS final enxuto
- Animações mínimas; priorizar performance e LCP

Inspiração de comportamento (não de marca):
- Lista de posts + taxonomia + foco no texto (como Chirpy),
  mas implementação e visual novos.

══════════════════════════════════════════════════════════════════
8. CONFIG DO SITE
══════════════════════════════════════════════════════════════════

src/site.config.ts (ou similar):

```ts
export const siteConfig = {
  title: "Not A Dev",
  tagline: "by @NonakaVal",
  description: "Personal Blog by @NonakaVal",
  url: "https://nonakaval.github.io",
  lang: "pt-BR",
  author: {
    name: "Valdenir Nonaka",
    shortName: "Val",
    email: "valdenirnonaka@gmail.com",
    avatar: "/assets/img/profile/killua.jpg",
  },
  social: {
    github: "https://github.com/NonakaVal",
    instagram: "https://www.instagram.com/nonaka.val",
    youtube: "https://www.youtube.com/@nonaka96",
    reddit: "https://www.reddit.com/u/Ok_Blacksmith7269",
  },
  pagination: { postsPerPage: 10 },
  permalinks: {
    post: "/posts/:slug/",
  },
};
```

astro.config.mjs:
- site: 'https://nonakaval.github.io'
- base: '/' (user site, não project pages)
- output: 'static'
- trailingSlash: 'always' (alinhar com permalinks Jekyll /posts/slug/)
- markdown: shiki theme coerente light/dark se possível
- integrar rehype/remark para callouts Obsidian

══════════════════════════════════════════════════════════════════
9. GITHUB PAGES / CI
══════════════════════════════════════════════════════════════════

Criar .github/workflows/deploy.yml:

- trigger: push main (+ workflow_dispatch)
- permissions: contents read, pages write, id-token write
- concurrency group pages
- job build:
  - checkout
  - setup-node (LTS) + cache npm
  - npm ci
  - npm run build
  - upload-pages-artifact path: dist
- job deploy:
  - needs build
  - environment github-pages
  - deploy-pages

package.json scripts:
- "dev": "astro dev"
- "build": "astro check && astro build"  (ou tsc + build)
- "preview": "astro preview"

.gitignore:
- node_modules, dist, .astro, .env, .DS_Store
- NÃO commitar secrets

Documentar no README:
- Settings → Pages → Source: GitHub Actions
- Como rodar local: npm i && npm run dev

══════════════════════════════════════════════════════════════════
10. OBSIDIAN / FLUXO DE ESCRITA
══════════════════════════════════════════════════════════════════

Documentar e preparar:

1. Template de post (Templater) em vault/X/Templates/POST-TEMPLATE.md:

---
title: 
description: 
date: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
author: Val
categories:
  # Escrita | Reflexao | Aprendizado | Programacao | Cultura | Pessoal
tags: []
pin: false
image: /assets/img/post-banners/
math: false
mermaid: false
draft: true
---

2. Fluxo recomendado:
   a. Escrever rascunho em vault/drafts/
   b. Quando pronto: mover/copiar para content/posts/YYYY-MM-DD-slug.md
   c. draft: false, preencher image/tags
   d. git add/commit/push (pode reutilizar script tipo gca.py apontando pro repo)
   e. Actions publica

3. Snippets Obsidian a incluir (versão limpa, sem Liquid):
   - callout tip/info/warning/danger
   - youtube (instrução MDX ou iframe documentado)
   - link interno /posts/slug/
   - imagem com path /assets/...

4. Copiar convenções:
   - vault/X/CONVENCOES-CATEGORIAS-TAGS.md (conteúdo já existente no repo Jekyll)

══════════════════════════════════════════════════════════════════
11. MIGRAÇÃO DE CONTEÚDO
══════════════════════════════════════════════════════════════════

Incluir no projeto (script ou checklist):

Script de migração Node ou Python que:
1. Lê _posts/*.md do site Jekyll (exceto pastas X/ e .obsidian)
2. Converte:
   - {% post_url YYYY-MM-DD-slug %} → /posts/{slug-sanitizado}/
   - {% include embed/youtube.html id='X' %} → forma nova escolhida
   - {: .prompt-TYPE } em bloco seguinte → > [!TYPE]
3. Normaliza image paths para começar com /
4. Remove calendar do frontmatter do site (ou mantém inofensivo)
5. Escreve em content/posts/
6. Reporta posts que precisam revisão manual

Também:
- Copiar assets/ → public/assets/
- Migrar about
- Testar localmente cada post migrado (build sem erro)

Para o PR inicial do scaffold:
- Incluir 2–3 posts de exemplo JÁ convertidos (ex.: about-me, um ensaio, um com youtube)
- NÃO precisa migrar todos os 18 no scaffold; deixar script + instruções

══════════════════════════════════════════════════════════════════
12. QUALIDADE E CRITÉRIOS DE ACEITE
══════════════════════════════════════════════════════════════════

O trabalho só está "pronto" quando:

1. npm run build conclui sem erro
2. npm run preview serve home, post, tag, category, about, archives
3. URLs de post usam /posts/:slug/ com trailing slash
4. Dark/light mode funciona e persiste
5. Nenhum arquivo .rb, Gemfile ou Liquid no pipeline de build
6. README explica: dev local, publish, frontmatter, callouts, deploy Pages
7. Pelo menos 2 posts reais de exemplo + 1 page about
8. RSS válido
9. Lighthouse razoável em mobile (performance/acessibilidade sem regressão grave)
10. content/posts com schema validando frontmatter inválido em build

══════════════════════════════════════════════════════════════════
13. ORDEM DE IMPLEMENTAÇÃO (siga esta ordem)
══════════════════════════════════════════════════════════════════

Fase 1 — Scaffold
1. npm create astro@latest (template minimal + TS)
2. site.config.ts + astro.config (site URL, trailingSlash)
3. Content collection posts + schema Zod
4. BaseLayout + global CSS + theme toggle
5. PostLayout + render markdown
6. index + [slug] + paginação
7. categories + tags + archives + about + 404
8. RSS + sitemap
9. workflow deploy.yml
10. 2–3 posts exemplo + assets mínimos
11. README + template Obsidian + convenções copiadas

Fase 2 — Migração e polish (depois do MVP)
12. Script de conversão Jekyll → Astro
13. Migrar todos os posts + assets
14. Callouts Obsidian polish
15. Busca, math/mermaid, related, PWA se desejado
16. Cutover: desligar workflows Jekyll, apontar Pages para Actions Astro

══════════════════════════════════════════════════════════════════
14. RESTRIÇÕES E ANTI-PADRÕES
══════════════════════════════════════════════════════════════════

NÃO faça:
- Usar Jekyll, Bridgetown, Hugo, Quartz ou Eleventy neste projeto
- Exigir CMS headless ou banco de dados
- SSR/adapter Node em produção (só static)
- Quebrar permalinks /posts/:slug/ sem redirects
- Publicar .obsidian, drafts ou vendor
- Dependências nativas frágeis no CI sem necessidade
- Over-engineering: sem monorepo de design system, sem i18n multi-idioma completo no MVP
- Inventar dezenas de tags/categorias fora da convenção

FAÇA:
- Código legível, componentes pequenos
- Tipos TypeScript nos helpers
- Comentários só onde a convenção de slug/permalink for não-óbvia
- Commits lógicos se for trabalhar em git (mas só se o usuário pedir commit)

══════════════════════════════════════════════════════════════════
15. ENTREGÁVEIS
══════════════════════════════════════════════════════════════════

Ao final da implementação do MVP, entregar:

1. Projeto Astro funcional na estrutura acima
2. README.md com quickstart e fluxo Obsidian
3. .github/workflows/deploy.yml
4. site.config.ts preenchido com dados Not A Dev
5. 2–3 posts de exemplo convertidos
6. Template de post + lista de convenções de categorias/tags
7. Checklist do que falta para cutover total (migrar posts restantes, desligar Jekyll)

Se algo for ambíguo, escolha a opção que:
(1) preserva permalinks,
(2) mantém Markdown legível no Obsidian,
(3) simplifica o CI no GitHub Pages.

Comece pela Fase 1 e pare ao completar o MVP com build verde, a menos que peçam a Fase 2.
```

---

## Como usar este prompt

| Onde | Como |
|------|------|
| **Grok / Claude / ChatGPT** | Cole a seção `PROMPT COPIÁVEL` inteira + “Implemente o MVP na pasta `./astro-blog`” |
| **Agente no repo** | “Execute o prompt em `docs/PROMPT-ASTRO-MIGRATION.md`; crie branch `astro` e implemente a Fase 1” |
| **Dev humano** | Use como spec + checklist de aceite (seção 12) |

### Complementos úteis ao colar

Acrescente no final, conforme o caso:

```text
Contexto extra:
- Workspace: /home/val/Github/nonakaval.github.io
- Branch alvo: astro
- NÃO altere main/Jekyll ainda
- Assets de referência estão em assets/
- Posts de referência em _posts/
- Convenções em _posts/X/CONVENCOES-CATEGORIAS-TAGS.md
```

### Variante “só scaffold mínimo”

Se quiser menos escopo na primeira rodada:

```text
Implemente APENAS até: collection de posts, home, página de post,
dark mode, deploy.yml e 1 post de exemplo. Pule categories/tags/archives
na primeira entrega; deixe TODOs claros no README.
```

---

## Mapa rápido: o que o prompt garante

| Necessidade | Como o prompt cobre |
|-------------|---------------------|
| Sem Jekyll/Ruby | Stack só Astro + Node no CI |
| GitHub Pages | workflow `deploy-pages` + `output: static` |
| Obsidian | Markdown limpo, callouts `> [!tip]`, vault/drafts, templates |
| Blog (não garden) | pin, paginação, categories/tags, banners, archives |
| SEO / links antigos | `/posts/:slug/` + trailing slash |
| Taxonomia atual | schema + lista fixa de categorias/tags |
| Migração | tabela Liquid→MD + script Fase 2 |
| Identidade do site | `site.config` com Not A Dev / NonakaVal |

---

## Próximo passo sugerido

1. Criar branch `astro`.  
2. Colar o **PROMPT COPIÁVEL** no agente com: *“Implemente a Fase 1 em `./` na branch atual sem tocar nos arquivos Jekyll de produção além do necessário.”*  
3. Validar `npm run build` + preview.  
4. Só então rodar a Fase 2 (migração dos ~18 posts).
