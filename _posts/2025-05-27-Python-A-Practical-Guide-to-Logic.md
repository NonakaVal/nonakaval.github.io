---
title: "Algorithmic Adventures in Python: A Practical Guide to Logic"
description: Logical thinking in programming is systematically solving problems step-by-step with efficient algorithms using programming structures.
date: 2025-05-27 11:02:56
author: Val
categories:
  - programação
  - python
tags:
  - Start
pin: 
image: assets/img/Python-logical-operators.jpg
math: true
mermaid: true
calendar: "[[2025-05-27]]"
---

# Two types of Knowledge

- **Critical Thinking:** The ability to make informed decisions based on the analysis of data and information, such as solving math problems, truly requires practice. While you can watch thousands of math classes, without practical application, the truth is that you know nothing.
- **Memorization:** Retention of information, past experiences, learning over time.

These two types of knowledge form a continuous cycle. The analysis of problems leads to a deeper understanding, which, in turn, contributes to accumulated knowledge. This accumulated knowledge, in turn, further enriches analytical capabilities.

> **So, beyond memorizing formulas or relying on AI solutions, let's link our thinking effectively to enhance capabilities.**

---

## What is Logic Programming?

Logical thinking in programming is **systematically solving problems step-by-step** with efficient algorithms using programming structures.

### Programming Structures (common in almost any language):
- **Variables and Data Types:** Store and manipulate different types of data.
- **Sequential Execution:** The natural flow from top to bottom, one statement after another.
- **Conditional Statements:** `if`, `elif`, `else`.
- **Loops (Iteration):** `for`, `while`, `do-while`.
- **Functions/Methods:** Modular and reusable code.
- **Arrays and Lists:** Manage collections of data.
- **Logical Operators:** `&&` (and), `||` (or), `!` (not).

---

## Algorithm Essentials

> An algorithm is a set of rules for solving a problem.

### 🧠 Example: Find the area of a triangle

```python
w = int(input("Digite o valor de b\n"))
h = int(input("Digite o valor de h\n"))
a = (w * h) / 2

print(a)
````

> Remember: `input()` returns a string, so `int()` is necessary to convert to integer.

**💡 Tip:** Review Python DataTypes before continuing.

---

## Formalizing an Algorithm

### Modeling

* Know what problem to solve.
* Extract information about the problem.
* Relate to current knowledge and other sources.
* Resulting from an abstraction process.
* Synthesis of an algorithm with programming structures.

### Semantics of an Algorithm

* Well-defined rules for interpretation.
* Avoid ambiguities.
* Prevent unnecessary symbols or commands.
* Allow approximation with the programming language.

---

## Problem-Solving Skills

### 🚀 Example Level 2: Sum Even Numbers From a List

**Problem Understanding:**

* Identify what needs to be calculated.
* Model mathematically (if possible).

**Solution Planning:**

* Recall similar problems.
* Use analogy, generalization, or specialization.
* Break the problem into smaller steps.

### 🧠 How to check if a number is even:

* `number % 2 == 0`

### ✔️ Flowchart to Code:

```python
def sum_even_numbers(numbers):
    sum_even = 0
    for number in numbers:
        if number % 2 == 0:
            sum_even += number
    return sum_even
```

### 🎯 Testing the function:

```python
list_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list_2 = [1, 6, 3, 7, 5, 9, 7, 10, 9, 10]
list_3 = [1, 9, 3, 4, 4, 6, 7, 11, 9, 10]
list_4 = [1, 2, 6, 5, 6, 6, 7, 13, 9, 10]

print(sum_even_numbers(list_1))
print(sum_even_numbers(list_2))
print(sum_even_numbers(list_3))
print(sum_even_numbers(list_4))
```

> ✅ You can reuse the function for any list.

---

## 🚀 Example Level 3: BMI Calculator Algorithm

### ✔️ Input validation with while loop:

```python
def input_data(message):
    while True:
        try:
            x = float(input(message))
            return x
        except ValueError:
            print('Please enter numeric values only.')
```

### ✔️ BMI Calculation:

```python
height = input_data("Enter height in meters: ")
weight = input_data("Enter weight in kilograms: ")

bmi_result = weight / (height ** 2)
```

### ✔️ Classification Dictionary:

```python
bmi_conditions = {
    18.5: "Underweight",
    25.0: "Normal weight",
    30.0: "Overweight",
    35.0: "Obesity",
    40.0: "Severe obesity",
    float('inf'): "Morbid obesity"
}
```

### ✔️ Display Result:

```python
for limit, condition in bmi_conditions.items():
    if bmi_result < limit:
        print("Your BMI is {:.2f}, which is classified as: {}".format(bmi_result, condition))
        break
```

---

## 🔥 Getting Advanced

Try to solve these problems in any programming language you are learning:

* Calculate the average of two numbers.
* Currency converter.
* Password validator in Python.
* Simple password generator.

---

## 🗺️ Final Tips

Convert Python code into flowcharts using the **pyflowchart** library:

```bash
pip install pyflowchart
```

```python
from pyflowchart import Flowchart

with open('yourarchive.py') as f:
    code = f.read()

fc = Flowchart.from_code(code)
print(fc.flowchart())
```

### 🛠️ Example Output:

```plaintext
op2=>operation: w = int(input('digite o valor de b\n'))
op4=>operation: h = int(input('digite o valor de h\n'))
op6=>operation: a = ((w * h) / 2)
sub8=>subroutine: print(a)

op2->op4
op4->op6
op6->sub8
```

Use sites like [flowchart.js.org](https://flowchart.js.org/) to paste and edit the flowchart.

> **Flowcharts are a great way to better understand algorithms, especially in the beginning.**

---

## 🙌 Thank You for Reading!

```

---

### 💡 Próximas sugestões para evoluir:
- Podemos transformar esse conteúdo em um e-book PDF diagramado.
- Criar uma versão resumida em formato de cheatsheet.
- Adicionar desafios práticos no final de cada seção.
- Integrar gráficos ou fluxogramas automáticos no próprio Markdown.
Se quiser, posso gerar qualquer uma dessas variações! 🚀
```










