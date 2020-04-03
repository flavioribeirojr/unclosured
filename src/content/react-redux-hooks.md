---
title: Redux + React Hooks = <3
slug: redux-com-hooks
date: 2020-03-26
description:
  Você sabia que os Hooks já foram adotados pelo projeto
  react redux, e que agora acessar sua store ficou bem mais
  simples?
cover: 'https://dl.dropboxusercontent.com/s/kkod0usqf3oswdt/react-redux-hooks.jpg?dl=0'
coverCredit: Photo by Vishal Jadhav on Unsplash
path: /redux-com-hooks
author: "{{authors.flavio}}"
highlighted: true
---

### Basição dos React Hooks

Desde a versão **16.8.0** o React traz em seu core os *Hooks*, dando aos devs uma alternativa
para componentes `stateful` com o uso de funções. Sendo assim, quando você precisar gerenciar state
em algum componente, não precisará mais criar uma `class` que extende `Component`. Abaixo um exemplo
simples com o *hook* `useState`:

<iframe
  src="https://codesandbox.io/embed/usestate-7oplg?fontsize=14&codemirror=1&hidedevtools=1&highlights=4,7&runonclick=1"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="useState"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

#### Conceitos importantes

* [Closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures)
* [Documentação do Hook useState](https://pt-br.reactjs.org/docs/hooks-state.html)

### React-Redux (old way)

Para acessar sua *store* usualmente você usaria a função `connect` passando seletores para
seu `state` e suas `actions`, assim como o seu componente. Essa funcão retorna um *High Order Component(HOC)*, onde um componente "pai" *encapsula* seu componente "filho" injetanto *props* quando necessário.

Abaixo está um exemplo de como acessar a store do *redux* usando a função `connect`:

`gist:flavioribeirojr/85cf288d121be22b4e1672df73d7b740#products-list.jsx`

### React-Redux-Hooks

Com os novos *hooks* do `react-redux` o acesso à *store* fica bem mais fácil e declarativo. Não é necessário
utilizar `HOCs`, você pode acessar um valor diretamente de dentro do seu componente, tão bem quanto disparar
uma *action*.

Abaixo um exemplo de código que possui a mesma funcionalidade do exemplo anterior utilizando o *hook* `useSelector`:

`gist:flavioribeirojr/2a492567938ec67df207399013b81ce2#products-list-hook.jsx`

Para acessar o valor dentro da store bastar passar uma função "seletora" que determinará o retorno para seu componente.

----

Para alterar valores dentro da **store** você precisa **chamar** uma função `dispatch`. Com os novos hooks providos
pela lib "react-redux" você pode fazer isso de uma forma bem simples. Confira o exemplo abaixo:

`gist:flavioribeirojr/56d0387677135b7ec38eb0d39e45f177#redux-dispatch-hook.jsx`

----

Uma boa ideia é consultar a documentação dessa lib. Lembre-se: sua melhor amiga é a documentação :)

#### Links úteis

* [React-Redux Hooks](https://react-redux.js.org/api/hooks)
* [React Contexts](https://pt-br.reactjs.org/docs/context.html)
* [High Order Components](https://pt-br.reactjs.org/docs/higher-order-components.html)