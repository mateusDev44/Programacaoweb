import React from 'react';
import ReactDOM from 'react-dom';
import PlayerList from './PlayerList';

const App = () => {
    const textBt = "Me chupa";
    return (
        <div>
            <section style={{ display: "flex", justifyContent: "center" }}>
                <form style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "80%" }} method="POST">
                    <label>Nome</label>
                    <input style={{ borderRadius: "7px", border: "1px solid red", outline: "none", width: "100%", paddingLeft: "15px" }} />
                    <button style={{ border: "none", borderRadius: "14px", margin: "5px 0", backgroundColor: "red", color: "white", height: "34px", fontSize: "24px", width: "100%" }}>{textBt}</button>
                </form>
            </section>
            <PlayerList />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"))