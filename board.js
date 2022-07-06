class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: Array(9).fill(null),
            turn: 0,
        };
    }
    
    handleClick(i, turn) {
        // front end does checks to keep things smooth
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

        // call back end
        let url = "https://tic-tac-trouble.herokuapp.com";
        let requestData = {
            "turn": turnChar,
            "cell": i
        };
        let responseData = fetchAsync(url, requestData)
        console.log(responseData);
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

                    <div className="row">
                        {this.renderCell(0)}<div className="cell-divide"></div>{this.renderCell(1)}<div className="cell-divide"></div>{this.renderCell(2)}
                    </div><div className="row-divide"></div>
                    <div className="row">
                        {this.renderCell(3)}<div className="cell-divide"></div>{this.renderCell(4)}<div className="cell-divide"></div>{this.renderCell(5)}
                    </div><div className="row-divide"></div>
                    <div className="row">
                        {this.renderCell(6)}<div className="cell-divide"></div>{this.renderCell(7)}<div className="cell-divide"></div>{this.renderCell(8)}
                    </div>

                </div>
            </div>
        );
    }
}