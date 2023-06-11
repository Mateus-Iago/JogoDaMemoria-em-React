import React from "react";

export default function Gameover(props){
    return(props.show?
        <div id="gameOver">
            <div>
                Parabéns você completou o jogo
            </div>
            <button id="restart" onClick={props.handleRestart}>Jogue Novamente</button>
        </div>: <></>

    )
}