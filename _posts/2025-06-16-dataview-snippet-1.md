---
title: "Obsidian Dataview Snippet #1 Headers Review"
description: Primeiro de diversos snippets que vou jogar por aqui,
date: 2025-06-16 09:16:39
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
calendar: "[[2025-06-16]]"
---
# Função

Formata uma tabela com os primeiros headers nas duas notas diárias em intervalos específicos, pode ser muito útil para usar no periodic-notes[^2] permitindo uma forma fácil de revisar um mês ou mais das notas em uma única nota, segue um print abaixo.

<img src="/assets/img/snip-1.png" alt="é isso">


# Como usar

- instale a ative o plugin - <https://github.com/blacksmithgu/obsidian-dataview>
- Nas configurações do plugin ative `Enable JavaScript queries`
- Crie um template ou salve o snippet abaixo, 
	- *--ou simplesmente cole fsdsss*
- Defina na primeira variável o caminho das suas notas diárias.
- Então o intervalo de datas que deseja buscar.
- Por fim troque o `js` no rótulo do bloco por `dataviewjs`.
	- *É isso.*

---
# SNIPPET

```js


// ⚙️ Configurações
const folderPath = "CAMINHO-DA-SUA-PASTA"; //  Exemplo : "CALENDAR/DAILY"   

const dateRange = {
  start: new Date("2025-02"),
  end: new Date("2025-04-01")
};

const maxHeaders = 3;

// Filtra páginas por pasta e data
let tableRows = [];
let headerNames = []; 

const pages = dv.pages()
  .where(p => p.file.path.startsWith(folderPath))
  .where(p => {
    const d = new Date(p.file.name);
    return d >= dateRange.start && d <= dateRange.end;
  })
  .sort(p => p.file.name, 'asc');

for (const page of pages) {
  const lines = (await dv.io.load(page.file.path)).split('\n');
  const headers = [], sections = {}, headerRegex = /^# (.+)/;
  let current = null;

  for (const l of lines) {
    const m = l.match(headerRegex);
    if (m && headers.length < maxHeaders) {
      current = m[1].trim();
      headers.push(current);
      sections[current] = [];
    } else if (current && headers.includes(current)) {
      sections[current].push(l.trim());
    }
  }

  // Armazena os nomes reais dos headers da primeira nota com headers suficientes
  if (headerNames.length === 0 && headers.length > 0) {
    headerNames = [...headers];
  }

  const row = [page.file.link, ...headerNames.map(h => sections[h]?.join('\n') || "")];
  tableRows.push(row);
}

// Títulos reais das colunas
const columnTitles = ["🗓️", ...headerNames.map(h => `${h}`)];

dv.table(columnTitles, tableRows);

```

---


# Possíveis erros 

- Caso use outro padrão nos nomes das notas diárias tal como `DD-MM-YYYY` terá que trocar pelo snippet abaixo.


```js
// ⚙️ Configurações
const folderPath = "CAMINHO-DA-SUA-PASTA"; // Exemplo: "CALENDAR/DAILY"
const dateRange = {
  start: new Date("2025-03-01"),
  end: new Date("2025-04-01")
};
const maxHeaders = 3;

let tableRows = [];
let headerNames = [];

// Função para converter "DD-MM-YYYY" para Date
function parseBrazilianDate(dateStr) {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

// Carrega e filtra as páginas
const pages = dv.pages()
  .where(p => p.file.path.startsWith(folderPath))
  .where(p => {
    const fileDate = parseBrazilianDate(p.file.name.split(" ")[0]);
    return fileDate >= dateRange.start && fileDate <= dateRange.end;
  })
  .sort(p => parseBrazilianDate(p.file.name.split(" ")[0]), 'asc');

for (const page of pages) {
  const lines = (await dv.io.load(page.file.path)).split('\n');
  const headers = [], sections = {}, headerRegex = /^# (.+)/;
  let current = null;

  for (const l of lines) {
    const m = l.match(headerRegex);
    if (m && headers.length < maxHeaders) {
      current = m[1].trim();
      headers.push(current);
      sections[current] = [];
    } else if (current && headers.includes(current)) {
      sections[current].push(l.trim());
    }
  }

  if (headerNames.length === 0 && headers.length > 0) {
    headerNames = [...headers];
  }

  const row = [page.file.link, ...headerNames.map(h => sections[h]?.join('\n') || "")];
  tableRows.push(row);
}

const columnTitles = ["🗓️", ...headerNames.map(h => `${h}`)];
dv.table(columnTitles, tableRows);

```


[^1]: [^2]: <https://github.com/liamcain/obsidian-periodic-notes>
