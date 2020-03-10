import React from 'react'


class PlayerList extends React.Component {
    render(props){
        return(
            <div>
                <ol type="1">
                    <li>{this.props.indice.nome}</li>
                    <li>{this.props.indice.time}</li>
                    <li>{this.props.indice.pais}</li>
                </ol>

            </div>
            
        )
    }
}

export default PlayerList