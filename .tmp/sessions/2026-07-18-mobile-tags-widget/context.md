# Task Context: Tags ao lado do widget no mobile

Session ID: 2026-07-18-mobile-tags-widget
Created: 2026-07-18
Status: completed

## Current Request

Para o layout mobile especificamente, adicionar ao lado do Sakana widget
(as mesmas tags do post, diferentemente organizadas) algumas das tags
existentes do site, para acessar de forma mais intuitiva outros posts.

Decisões confirmadas pelo usuário:
1. Tags a mostrar: **trending** (top por frequência, reusar lógica de `_includes/trending-tags.html`)
2. Quantidade: **5 tags**
3. Layout mobile: **lado-a-lado ajustado** (flex row — widget esquerda, tags direita com flex-wrap)
4. Desktop: **intocado** — alterações só dentro de `@media (max-width: 768px)`
5. Estilo visual: **como em `_layouts/post.html`** (`fa-tags` + `post-tag no-text-decoration`)
6. Stack: **permanecer no Jekyll** (não migrar para Astro agora)
7. Preocupação explícita: **não quebrar a página**

## Context Files (Standards to Follow)

ContextScout reportou que **não existe** `.opencode/context/` nem `paths.json`
neste projeto. Padrões de-facto são codificados nos arquivos de referência
abaixo. Convenções extraídas:

- Breakpoint mobile do projeto: `@media (max-width: 768px)`
- Único arquivo CSS custom: `assets/css/jekyll-theme-chirpy.scss` (não usado nesta tarefa — styles ficam inline no `<style>` de `home.html` como já é o padrão atual do widget)
- Tags são Liquid server-side, widget é JS assíncrono — não há coordenação JS necessária

## Reference Files (Source Material to Look At)

- `_layouts/home.html` — **alvo da edição**. Bloco do widget: linhas 55-107. CSS inline com mobile breakpoint já existe.
- `_layouts/post.html` linhas 141-155 — padrão canônico de tags a replicar: `<div class="post-tags"><i class="fa fa-tags fa-fw me-1"></i>{% for tag in page.tags %}<a class="post-tag no-text-decoration" href="...">{{ tag }}</a>{% endfor %}</div>`
- `_includes/trending-tags.html` — lógica de seleção por frequência (top 10), adaptação para top 5.
- `tools/test.sh` — validação (HTMLProofer via Jekyll build).
- `tools/run.sh` — servidor de desenvolvimento local.
- `Gemfile` — dependências Ruby/Jekyll.

## External Docs Fetched

Nenhum fetch necessário. Sakana widget tem sizing default conhecido (~208 px
largura). Se o layout ficar deformado em telas <400 px, considerar buscar
docs via ExternalScout para opções de sizing/transform.

## Components

1. **Markup wrapper** — encapsular bloco do widget + novo bloco de tags em `<div class="home-widget-row">`.
2. **Tags mobile** — `<div class="home-widget-tags d-md-none">` com ícone `fa-tags` + 5 chips `post-tag no-text-decoration`.
3. **Lógica Liquid trending** — inline em `home.html` (variáveis prefixadas `widget_` para evitar colisão), `MAX = 5`.
4. **CSS mobile** — flex row dentro do `@media (max-width: 768px)` existente, mantendo CSS desktop acima intocado.

## Constraints

- **Desktop intocado**: regras `#sakana-widget { float: right; margin: 0; }` devem permanecer acima do media query, sem alteração.
- **Não quebrar a página**:
  - Usar classe nova `.home-widget-row` (sem colisão)
  - Tags div com `d-md-none` (display none em desktop, sem impacto visual)
  - Widget com `flex-shrink: 0` (não deforma o Sakana)
  - Tags com `flex-wrap` (quebram linha em vez de vazar)
  - Guardar render em `{% if widget_trending_tags.size > 0 %}` (site sem tags → bloco some graciosamente)
- Variáveis Liquid prefixadas com `widget_` para não colidir com escopo da página.

## Exit Criteria

- [x] `_layouts/home.html` modificado conforme plano
- [x] `tools/test.sh` (build Jekyll + htmlproofer) passa sem erros — "HTML-Proofer finished successfully"
- [x] HTML renderizado confirma: `home-widget-row`, `home-widget-tags d-md-none`, e 5 tags trending (ensaio, poesia, existencialismo, filosofia, frase)
- [ ] Desktop: widget continua `float: right`, sem tags visíveis — **requer confirmação visual do usuário** (d-md-none garante via CSS)
- [ ] Mobile (≤768 px): layout flex mostra widget à esquerda + 5 tags à direita — **requer confirmação visual do usuário**
- [ ] Confirmação visual em 320 px, 414 px e 768 px — **requer confirmação visual do usuário**

## Validation Result

- `bundle exec jekyll build`: ✅ done in 0.905s (apenas warnings Sass pré-existentes, não relacionados)
- `htmlproofer`: ✅ 102 internal links, 43 files, sem erros
- Inspeção do `_site/index.html`: marcação esperada presente, 5 tags geradas corretamente

## Notas para handoff

- Build automatizado cobre sintaxe Liquid e estrutura HTML.
- Validação visual em browser (DevTools mobile view) é responsabilidade do usuário.
- Se em telas <400 px o widget ficar apertado ao lado das tags, opção de ajuste
  fino: adicionar `@media (max-width: 400px) { #sakana-widget { transform: scale(0.85); transform-origin: left center; } }`
  dentro do media query existente.
