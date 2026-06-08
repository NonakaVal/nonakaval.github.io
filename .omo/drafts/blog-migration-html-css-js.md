# Draft: Migração Blog Jekyll+Obsidian → HTML/CSS/JS Puro

## Requirements (confirmed)
- Migração completa: remover Jekyll (Ruby) e Obsidian como dependências
- Resultado visual idêntico ao atual (Chirpy Theme look & feel)
- Estrutura exclusivamente HTML/CSS/JavaScript
- Novas ferramentas de formatação/escrita de posts (web-based)
- Manter ou expandir os recursos atuais de escrita

## Technical Decisions
- [PENDENTE] Estratégia de build (SSG JS vs SPA vs static puro)
- [PENDENTE] Sistema de autor de posts (web editor vs markdown files)
- [PENDENTE] Hosting (GitHub Pages vs outro)
- [PENDENTE] Framework CSS (manter Bootstrap+Chirpy ou refazer)

## Research Findings
- Stack atual: Jekyll 7.3 + Chirpy Theme + Ruby + GitHub Actions
- Posts: 14 markdown files com YAML frontmatter
- Obsidian features usadas: Templater, Dataview, wikilinks, callouts, Calendar plugin
- Layouts: 11 (home, post, page, gallery, categories, tags, archives, etc.)
- JS atual: theme.js, home.js, post.js, categories.js + modules
- Deploy: GitHub Actions → bundle exec jekyll b → GitHub Pages

## Open Questions
1. Remover Jekyll completamente? Ou migrar para SSG em JS (ex: Eleventy)?
2. O que substitui o Obsidian como ferramenta de escrita? Editor web? VS Code?
3. Posts continuam como markdown ou mudam para outro formato?
4. Continua no GitHub Pages ou muda de hosting?
5. Quais NOVAS features de escrita são desejadas?
6. O que fazer com os posts existentes do CALENDAR e Dataview?

## Scope Boundaries
- INCLUDE: Todas as páginas, layouts, funcionalidades visuais, posts existentes, deploy pipeline
- EXCLUDE: [a definir com o usuário]
