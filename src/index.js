
import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css'

import PlayerList from './PlayerList'


//CRIAR COMPONENTE


class App extends React.Component {

     jogadores = [
        {
           nome : "Cristiano Ronaldo",
           time : "Juventus",
           pais : "Italia"
        },
        {
            nome : "Neymar Jr",
            time : "PSG",
            pais : "França"
        },
        {
            nome : "Lionel Messi",
            time : "Barcelona",
            pais : "Espanha"
        },

    {


            nome : "Zlatan Ibrahimovic",
            time : "Milan",
            pais : "Itália"


    }

    ]

    constructor(props) {
        super(props);

        this.state = {
            indice: 0
        }

    }

    

    incrementarIndice = (event) =>{
       console.log(this);
       
       if(this.state.indice < this.jogadores.length -1){
        this.setState({
            indice: this.state.indice+1
        })
       }
        

    }

    decrementarIndice = (event) =>{
        if(this.state.indice > 0){
            this.setState({
                indice: this.state.indice - 1
            })
        }

        
        
    }

    render() {
        return (
            <div>

                <div
                    class="container">
                        <div class="container">
                    <h1>Jogadores</h1>
                    {this.jogador}
                </div>

                <PlayerList indice = {this.jogadores[this.state.indice]}> </PlayerList>
                
                <div>
                    
                </div>


                    <button type="button" class="btn btn-danger" onClick={this.decrementarIndice}>
                        Anterior
                   </button>

                    <button type="button" class="btn btn-danger" onClick={this.incrementarIndice}>Proximo</button>


                </div>

            </div>



        );

    }

}

ReactDOM.render(<App/>,document.querySelector("#root"));