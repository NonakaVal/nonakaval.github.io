---
title: Introdução ao Ruby
description: " Ruby é uma linguagem de programação orientada a objetos..."
date: 2025-06-10 22:53:03
author: Val
categories:
  - programação
  - ruby
tags:
  - Review
  - Recursos
pin: 
image: assets/img/ruby.png
math: false
mermaid: false
calendar: "[[2025-06-10]]"
---
# Ruby e Orientação a Objetos

{: .prompt-info }
> Ruby é uma linguagem de programação dinâmica e orientada a objetos, criada por Yukihiro "Matz" Matsumoto[^1] em 1995 no Japão. Focada em simplicidade e produtividade, Ruby permite escrever códigos claros e eficientes, sendo influenciada por linguagens como Perl[^2] e [^3]Smalltalk. Sua popularidade cresceu, especialmente com o framework Ruby on Rails[^4], que facilitou o desenvolvimento de aplicativos web. 

# Instalar Ruby e Code Runner no VS Code

{: .prompt-tip }
> Para começar a programar em Ruby, primeiro você precisa instalar o Ruby em seu computador. Além disso, se estiver utilizando o Visual Studio Code como editor, é interessante configurar a extensão **Code Runner** para rodar os códigos Ruby diretamente no editor.

1. **Instalar Ruby:**
    
    - No Windows, baixe o instalador do Ruby através do [RubyInstaller](https://rubyinstaller.org/).
    - No macOS, você pode instalar o Ruby com o Homebrew: `brew install ruby`.
    - No Linux, use o comando: `sudo apt install ruby`.
        
2. **Instalar a Extensão Code Runner no VS Code:**
    
    - Abra o Visual Studio Code[^5].
    - Vá até a aba de extensões e procure por **Code Runner**.
    - Clique em "Instalar".
        
3. **Configurar o Code Runner para Ruby:**
    
    - Vá em **File** > **Preferences** > **Settings**.
    - Busque por "Code Runner Executor Map" e adicione o comando para Ruby:
        

```json
"code-runner.executorMap": {
  "ruby": "ruby"
}
```

Isso permitirá rodar o código Ruby diretamente no VS Code.

### Exemplo de "Hello World" em Ruby

{: .prompt-tip }
> O tradicional exemplo de "Hello World" em Ruby utilizando o comando `puts` para imprimir a mensagem no console.

```ruby
puts "Hello World"
```

### Como Rodar um Arquivo Ruby no Terminal

{: .prompt-tip }
> Caso prefira rodar o arquivo Ruby diretamente no terminal, basta usar o comando abaixo, assumindo que você tenha o Ruby já instalado em seu sistema:

```bash
ruby main.rb
```

Isso executará o arquivo `main.rb` e exibirá a saída no terminal.

### Ruby Interativo - `irb`

{: .prompt-tip }
> Ruby possui um console interativo chamado `irb` (Interactive Ruby), que permite que você execute código Ruby linha a linha diretamente no terminal. Isso é útil para testar pequenos trechos de código rapidamente.

```bash
irb
```

{: .prompt-tip }
Após rodar esse comando, o terminal se transformará em um ambiente onde você pode executar código Ruby interativamente.


### Avançando nos estudos#

Ruby possui uma das melhores documentações que já li, com diversos ótimos recursos de estudo e até IDE online simples para começar e entender. Segue abaixo alguns dos que mais gostei.

+ Try Ruby - <https://try.ruby-lang.org/>
+ Ruby em Vinte Minutos - <https://www.ruby-lang.org/pt/documentation/quickstart/>
+ Ruby a Partir de Outras Linguagens - <https://www.ruby-lang.org/pt/documentation/ruby-from-other-languages/>
+ Ebook Sensacional - <https://poignant.guide/book/> 
+ Curso que estou atualmente fazendo - <https://www.udemy.com/course/learn-to-code-with-ruby-lang/>

---
---
#### Footnotes





[^1]: <https://pt.wikipedia.org/wiki/Yukihiro_Matsumoto>

[^2]: <https://pt.wikipedia.org/wiki/Perl>
	
[^3]: <https://en.wikipedia.org/wiki/Smalltalk>

[^4]: <https://rubyonrails.org/>

[^5]: <https://code.visualstudio.com/>
