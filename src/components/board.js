import React from "react";
import Square from './square';

export default class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                {[...Array(3)].map((x, i) =>
                    <div className="board-row">
                        {[...Array(3)].map((x, j) =>
                            this.renderSquare(j + (i * 3))
                        )}
                    </div>
                )}
            </div>
        );
    }
}
