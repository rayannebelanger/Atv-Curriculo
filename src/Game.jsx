import React, { useState } from "react";


function generateCode() {
  const digits = Array.from({ length: 10 }, (_, i) => i.toString());
  return Array.from({ length: 4 }, () => digits.splice(Math.floor(Math.random() * digits.length), 1)[0]).join("");
}


function evaluateGuess(code, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === code[i]) {
      bulls++;
    } else if (code.includes(guess[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

const Game = () => {
  const [secretCode, setSecretCode] = useState(generateCode());  
  const [guess, setGuess] = useState(""); 
  const [attempts, setAttempts] = useState([]); 
  const [gameOver, setGameOver] = useState(false);  

  
  const handleGuess = () => {
    if (gameOver) return;

  
    if (guess.length !== 4 || new Set(guess).size !== 4 || isNaN(guess)) {
      alert("Atenção: Insira números válidos, ou seja, 4 dígitos diferentes.");
      return;
    }

   
    const result = evaluateGuess(secretCode, guess);
    setAttempts([{ guess, result }, ...attempts]); 

    if (result.bulls === 4) {
      setGameOver(true); 
      alert("CONGRATULATIONS!! YOU ARE A WINNER! *-*");
    }

    setGuess("");  
  };


  const restartGame = () => {
    setSecretCode(generateCode());  
    setGuess("");  
    setAttempts([]);  
    setGameOver(false);  
  };

  return (
    <div className="game">
      <h2>Jogo Senha</h2>
      <p>Adivinhe o código secreto de 4 dígitos (Cada número digitado deve ser diferente)</p>
      <div className="input-section">
        <input
          type="text"
          maxLength="4"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Digite os 4 dígitos:"
          disabled={gameOver}
        />
        <button onClick={handleGuess} disabled={gameOver}>Enviar Palpite</button>
        <button onClick={() => alert(`Número secreto: ${secretCode}`)}>Revelar Código</button>
        <button onClick={restartGame}>Reiniciar Jogo</button>
      </div>
      <div className="attempts">
        <h3>Tentativas Anteriores</h3>
        <ul>
          {attempts.map((attempt, index) => (
            <li key={index}>
              Palpite: {attempt.guess} - <span className="bulls-cows">Bulls: {attempt.result.bulls}, Cows: {attempt.result.cows}</span>
            </li>
          ))}
        </ul>
      </div>
      {gameOver && <p>The game is oveer! Congratulations!!</p>}
    </div>
  );
};

export default Game;