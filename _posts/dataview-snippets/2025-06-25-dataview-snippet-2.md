---
title: "Obsidian Dataview Snippet #2 Templates Review"
description: Visualizar **todos os templates da sua vault** (ou de uma pasta específica) e seus conteúdos completos diretamente em uma única nota.
date: 2025-06-25 16:06:50
author: Val
categories:
  - gestão de conhecimento
  - obsidian
tags:
  - snippet
pin: 
image: 
math: false
mermaid: false
calendar: "[[2025-06-25]]"
---
# Função



Ideal para manter uma visão consolidada e navegável dos seus snippets reutilizáveis, como trechos de código, modelos de documentos, comandos, funções, automações e muito mais — sem precisar abrir um por um.

> 🧠 Pense como um "**painel de controle de templates**": uma página só onde você encontra tudo que criou para reaproveitamento.

---

# Como usar

1. Instale e ative o plugin Dataview: [https://github.com/blacksmithgu/obsidian-dataview](https://github.com/blacksmithgu/obsidian-dataview)
    
2. Nas configurações, ative `Enable JavaScript queries`
    
3. Crie um novo arquivo (por exemplo: `TEMPLATE INDEX`) ou adicione este snippet onde preferir
    
4. Defina:
    
    - O caminho da pasta onde estão seus templates (ex: `"SYSTEM/TEMPLATE"`)
        
    - Palavras-chave opcionais para filtrar quais arquivos devem aparecer
        
5. Por fim, troque `js` no início do bloco para `dataviewjs`  
    → _Pronto! Uma tabela será criada com o nome do template e seu conteúdo já expandido._
    

---

# SNIPPET

```js
// 📑 Lista todos os templates (com conteúdo) a partir de uma pasta específica

const folderPath = "SYSTEM/TEMPLATE"; // Caminho da pasta de templates
const keywords = [""]; // Filtra pelo título (ex: ["api", "email"]), ou deixe [""] para exibir tudo

let tableRows = [];

const pages = dv.pages()
  .where(p =>
    p.file.path.startsWith(folderPath) &&
    keywords.some(k => p.file.name.toLowerCase().includes(k.toLowerCase()))
  )
  .sort(p => p.file.name, 'asc');

for (const page of pages) {
  const content = await dv.io.load(page.file.path);
  const safeContent = content.replace(/```/g, "\\`\\`\\`"); // evita conflitos na renderização
  const codeBlock = `\`\`\`\n${safeContent.trim()}\n\`\`\``;

  tableRows.push([page.file.link, codeBlock]);
}

dv.table(["📄 Template", "📋 Conteúdo"], tableRows);
```


# Dicas

- Use um sistema de nomeação consistente nos seus templates (`email-resposta`, `api-chamada`, `bash-backup`) para facilitar o filtro com `keywords`
    
- Se quiser mostrar apenas blocos de código específicos (como Python), peça que eu te ajude com um Regex seletivo
    
- Combine com Dataview `input` e filtros dinâmicos com Templater para criar interfaces avançadas
    
