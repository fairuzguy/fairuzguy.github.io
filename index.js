class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: Array(9).fill(null),
            turn: 0,
        };
    }
    
    handleClick(i, turn) {
        const cells = this.state.cells.slice();
        if (cells[i] != null) {
            return;
        }
        let turnChar = 'O';
        if (turn % 2 == 0) {
            turnChar = 'X';
        }
        cells[i] = turnChar;
        this.setState({
            cells: cells,
            turn: turn + 1,
        });
    }
    
    renderCell(i) {
        return (
            <Cell 
                value={this.state.cells[i]}
                onClick={() => this.handleClick(i, this.state.turn)}
            />
        );
    }
    
    render() {
        const status = 'Next player: ' + (this.state.turn%2==0 ? 'X' : 'O');
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board">

                    <div class="row">
                        {this.renderCell(0)}<div class="cell-divide"></div>{this.renderCell(1)}<div class="cell-divide"></div>{this.renderCell(2)}
                    </div><div class="row-divide"></div>
                    <div class="row">
                        {this.renderCell(3)}<div class="cell-divide"></div>{this.renderCell(4)}<div class="cell-divide"></div>{this.renderCell(5)}
                    </div><div class="row-divide"></div>
                    <div class="row">
                        {this.renderCell(6)}<div class="cell-divide"></div>{this.renderCell(7)}<div class="cell-divide"></div>{this.renderCell(8)}
                    </div>

                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className ="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* todo */}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("tictactoe"));