# Tic Tac Toe

Este é um projeto de jogo da velha (Tic Tac Toe) desenvolvido com React, que permite aos jogadores se enfrentarem em uma partida clássica. Os ícones dos jogadores são representados pelas imagens circle.png e cross.png para os símbolos "O" e "X", respectivamente.

## 📋 Visão Geral

O Tic Tac Toe é um jogo simples de dois jogadores que se enfrentam para preencher uma linha, coluna ou diagonal com o mesmo símbolo. O primeiro jogador a alcançar esse objetivo vence o jogo. O objetivo deste projeto é demonstrar o uso do React para criar uma interface interativa e responsiva para o jogo.

## 🎮 <B>Funcionalidades</b>

<b>Interatividade:</b> Jogadores alternam entre turnos de forma dinâmica.

<b>Ícones personalizados:</b> Representações visuais dos símbolos "O" e "X" através das imagens circle.png e cross.png.

<b>Detecção de vitória ou empate:</b> O jogo identifica automaticamente quando um jogador vence ou quando ocorre um empate.

<b>Reiniciar o jogo:</b> Opção para começar uma nova partida.


## 🚀<B> Tecnologias Utilizadas</b>

<B>React:</b> Biblioteca JavaScript para a construção da interface do usuário.

<b>CSS:</b> Estilização dos componentes e layout.

<b>JavaScript:</b> Lógica do jogo e manipulação dos estados.


## 📂 Estrutura do Projeto

```plaintext
tic-tac-toe/
├── public/
│   ├── circle.png           # Ícone do jogador "O"
│   ├── cross.png            # Ícone do jogador "X"
├── src/
│   ├── components/
│   │   ├── Board.jsx        # Componente principal do tabuleiro
│   │   ├── Square.jsx       # Componente de cada célula do tabuleiro
│   ├── App.jsx              # Componente raiz do aplicativo
│   ├── index.js             # Arquivo principal do React
│   ├── App.css              # Estilos principais
├── README.md                # Documentação do projeto
└── package.json             # Dependências e scripts
```



## 📐<b> Responsividade</b>

Este projeto é responsivo e se ajusta a diferentes tamanhos de tela. Media queries foram adicionadas para otimizar a visualização em dispositivos móveis, incluindo iPhones e alguns modelos da Samsung e Xiaomi.

## 📜<b> Licença</b>

Este projeto é licenciado sob a MIT License.

## ✨ <b>Contribuição</b>

Sinta-se à vontade para contribuir com sugestões e melhorias.

## Meus Contatos

<a href="https://www.linkedin.com/in/osnigilbertojunior/" style="margin-right: 10px;">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
    <path fill="#0077B5" d="M100.28 448H7.4V148.9h92.88zm-46.14-341.4a53.66 53.66 0 1 1 53.66-53.66 53.66 53.66 0 0 1-53.66 53.66zM447.9 448h-92.65V302.4c0-34.7-.7-79.1-48.2-79.1-48.3 0-55.7 37.7-55.7 76.7V448h-92.6V148.9h88.9v40.8h1.3c12.4-23.4 42.5-48.2 87.3-48.2 93.4 0 110.6 61.5 110.6 141.3V448z"/>
  </svg>
</a>
<a href="https://x.com/osniiferreira" style="margin-right: 10px;">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 320 512">
    <path fill="#1DA1F2" d="M291.7 214.7L319.5 176h-91.6l-44.5 58-49.4-58h-92l78.8 92-89 117.3c-4.8 6.4-5.4 14.8-1.5 21.7 3.9 6.8 11 11 18.8 11h92.2l46.9-61.1 52.7 61.1h92.3l-84.2-97.9z"/>
  </svg>
</a>
<a href="https://mastodon.social/@osniferreira" style="margin-right: 10px;">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512">
    <path fill="#3088D4" d="M433 179.11c0-97.2-63.9-125.9-63.9-125.9C329.2 32 292.2 24.5 255.3 24c-1.1 0-2.1-.1-3.2-.1h-56.2c-1.1 0-2.1 0-3.2.1-36.9.5-73.9 8-113.8 29.2 0 0-63.9 28.7-63.9 125.9-.1 11.1-.2 24.3-.1 38.8.2 29.7 2.2 63.2 8.9 98.3 10.3 56.2 51.7 77.5 51.7 77.5 40.5 20.6 74.9 25.7 104.4 23.1 51.4-4.3 66.3-30.9 66.3-30.9l-1.4-32.6s-30.6 9.5-64.4 8.3c-33.7-1.2-69.3-4.1-75.2-51.5-2.8-21-3.4-50.3-3.4-82.7 0 0 0 0 0 0h234.3c0 0-.6 24.5-2.6 50.5-3.1 36.5-12.6 61.2-12.6 61.2s-10.4 26.6-59.7 28.6c-2 .1-4 .2-6.1.3-2.9.1-5.9.2-9 .2-6.3 0-13.3-.2-20.8-.7-16.9-1.1-35-3.7-53.3-9.6l-14.4-4.7-8.5 67.8c0 0 39.2 15.7 96.6 11.6 25.6-1.8 49.6-7.8 72.2-16.6 39.7-15.3 63-49.9 63-49.9 45.6-83.1 42.8-203.6 42.8-203.6z"/>
  </svg>
</a>
<a href="mailto:osnigilbertojunior@gmail.com">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
    <path fill="#EA4335" d="M490.6 190.8l-192-128c-11.5-7.7-27.3-7.7-38.8 0l-192 128c-10.2 6.8-15.5 18.4-15.5 30.9v256c0 12.5 5.3 24.1 15.5 30.9l192 128c11.5 7.7 27.3 7.7 38.8 0l192-128c10.2-6.8 15.5-18.4 15.5-30.9V221.7c0-12.5-5.3-24.1-15.5-30.9zm-234.6 230.4l-124.1-82.7L256 223l124.1 76.1-124.1 82.7zm186.3-56.3L256 162.6 69.7 326.4v-82.3l186.3 116.3L442.3 270.4z"/>
  </svg>
</a>
