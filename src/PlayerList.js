import React from 'react';

const PlayerList = (props)=> {
    console.log(props.tropa.find(soldado => soldado.nome === "Pedro Felipe"))
    let list = [];
    props.tropa.forEach(soldado => {
        list.push(
            <div>
                <h1>{soldado.nome}</h1>
                <h2>{soldado.posicao}</h2>
                <h3>{soldado.codeNome}</h3>
            </div>
        )
    })
    return list;
};

export default PlayerList;