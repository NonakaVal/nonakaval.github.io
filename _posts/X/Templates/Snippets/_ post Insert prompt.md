<%*
const promptTypes = [
  "bug",
  "danger",
  "idea",
  "info",
  "next",
  "note",
  "quote",
  "success",
  "tip",
  "warning"
];

let selectedType = await tp.system.suggester(
  type => `prompt-${type}`,
  promptTypes
);

if (!selectedType) {
  selectedType = "info";
}
-%>

{: .prompt-<% selectedType %> }
>