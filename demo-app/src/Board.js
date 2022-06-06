import React, {Component} from 'react';
import Square from './Square';

class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square value={i}></Square>
        );
    }
    
    render() {
        return (
        <div>
            <div>{this.renderSquare(1)}</div>
            <div>{this.renderSquare(2)}</div>
            <div>{this.renderSquare(3)}</div>
            <div>{this.renderSquare(4)}</div>
        </div>
        )
    }
}

export default Board;