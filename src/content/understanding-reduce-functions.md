---
title: Entendendo Funções Reduce com JavaScript
slug: entendendo-funcoes-reduce
date: 2020-03-22
description:
    Entenda na prática como esse tipo de função pode auxiliar
    em diversos tipos de cenários, tanto um simples somatório como
    a criação de grupo de objetos.
cover: 'https://dl.dropboxusercontent.com/s/xeljze7hitwt35q/entendendo-funcoes-reduce.jpg?dl=0'
coverCredit: Photo by Bruce Warrington on Unsplash
path: /entendendo-funcoes-reduce
author: "{{authors.flavio}}"
highlighted: true
---

### Conceito

Definição do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce):

> O método **reduce()** executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.

A funcão `reduce` recebe 2 parâmetros, uma função que deve calcular o valor retornado e um valor inicial que será passado
ao acumulador no primero `loop`. Um exemplo básico se parece com isso:

`gist:flavioribeirojr/15af286fd8c1771ff440cfa84e998fdf#sum-reducer.js`

> **Tip**: leia sobre [arrow functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

A função reduce vai iterar sobre o `array` numbers e aplicar a função passada no primeiro parâmetro a cada elemento.
Analisando cada iteração podemos entender melhor o que acontece, veja abaixo:

* **1º loop**: `sum` é igual a zero (valor inicial passado como segundo parâmetro), `number` é igual a 5. A função retorna a soma de `sum` + `number`, então `0 + 5 = 5`.

* **2ª loop**: `sum` é igual a 5 (o resultado da loop anterior), `number` é igual a 10. A função retorna a nova soma, 
ou seja, `5 + 10 = 15`.

* **3º loop**: `sum` é igual a 15 (resultado do loop anterior), `number` é igual a 15. A função calcula a última soma
que retorna **30**. Ao final a função retorna um único valor resultante das operações aplicadas em cada loop.

Bem simples, certo? :)

### Agrupando objetos

Funções `reduce` podem ser bem úteis para criar grupos de objetos. Por exemplo, imagine que temos o seguinte
caso de uso:

> Você deve desenvolver uma view que mostre diferentes tipos de produtos separando eles por categoria.

Uma função `reduce` pode resolver esse cenário de maneira bem simples:

`gist:flavioribeirojr/3f9f2b2cea2a783928b2646554e39b50#products-reducer.js`

> **Tip**: leia sobre [spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

### Quando usar funções reduce

A regra de ouro é essa: sempre que você precisar retornar um valor único(um `objeto literal`, `string` ou `number`) 
a partir de um `Array`, o reduce pode resolver.

----

###### Até a próxima, amiga(o) DEV!