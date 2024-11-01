import './TicTacToe.css';
import circleIcon from '../assets/circle.png';
import crossIcon from '../assets/cross.png';
import { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(null); // Estado para armazenar o vencedor

  const toggle = (index) => {
    if (board[index] || winner) return; // Impede que uma célula preenchida seja clicada novamente ou jogadas após um vencedor

    const newBoard = [...board];
    newBoard[index] = count % 2 === 0 ? 'x' : 'o';
    setBoard(newBoard);
    setCount(count + 1);

    const winningPlayer = checkWin(newBoard); // Passar o novo tabuleiro para a função checkWin
    if (winningPlayer) {
      setWinner(winningPlayer); // Atualiza o vencedor
    } else if (count === 8) {
      // Verifica se é um empate
      setWinner('Empate');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCount(0);
    setWinner(null); // Reseta o vencedor
  };

  // Função para verificar se há um vencedor
  const checkWin = (currentBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a]; // Retorna o vencedor ('x' ou 'o')
      }
    }

    return null; // Retorna null se não houver vencedor
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>
      {winner && (
        <h2 className="winner">
          Vencedor: {winner === 'x' ? 'X' : winner === 'o' ? 'O' : 'Empate'}
        </h2>
      )}
      <div className="board">
        {board.map((value, index) => (
          <div key={index} className="boxes" onClick={() => toggle(index)}>
            {value === 'x' && <img src={crossIcon} alt="X" />}
            {value === 'o' && <img src={circleIcon} alt="O" />}
          </div>
        ))}
      </div>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
