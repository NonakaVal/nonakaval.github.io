---
title: "GCA: Git Commit Assistant"
description: Uma CLI simples para facilitar e agilizar commits no Git com mensagens padronizadas, interativas ou customizadas.
date: 2025-07-09 01:40:47
author: Val
categories:
  - programação
  - python
tags:
  - Dicas
  - português
pin:
image: assets/img/d2489f96-d56f-4b82-bc7f-84fbc9fb1368.png
math: false
mermaid: false
calendar: "[[2025-07-09]]"
---

Mensagens de commit confusas ou despadronizadas tornam o histórico difícil de entender.  

<img src="/assets/img/Captura de imagem_20250709_014844.png" alt="gif">

Com isso em mente fiz esse script python.

👉 NonakaVal/lazy-commits <https://github.com/NonakaVal/lazy-commits>

﻿# 🐙 GCA — Git Commit Assistant

Uma CLI simples para facilitar e agilizar commits no Git com mensagens padronizadas, interativas ou customizadas.

Não me julgue sem ler : <https://automatetheboringstuff.com/>..-- 

Vídeo rápido rodando - <https://i.imgur.com/IBKchDS.mp4>

---

## O que ele faz?

✅ Sugere tipos de commit como `feat`, `fix`, `docs`, `chore`  
✅ Oferece mensagens prontas ou permite digitar a sua  
✅ Segue o padrão Conventional [^1]Commits  
✅ Confirma antes de commitar e dar push  
✅ Funciona em qualquer repositório, sempre na pasta atual

---

## Por que usar?

- Você ganha tempo sem precisar pensar na mensagem toda vez
    
- O histórico fica organizado e fácil de entender
    
- Fica mais fácil gerar changelogs e automatizar versões
    
- Ajuda a seguir uma prática já adotada por muitos times
    

---

## Exemplo de mensagens geradas

```
feat: add login form (2025-06-29)
fix: correct password validation (2025-06-29)
docs: update README with setup instructions (2025-06-29)
```

<img src="/assets/img/Captura de imagem_20250709_014510.png" alt="gif">

---




---
---

[^1]: <https://www.conventionalcommits.org/>
	
