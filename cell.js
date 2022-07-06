class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    
    render() {
        return (<div
                className="cell" 
                onClick={() => this.props.onClick()}><p className="xo">{this.props.value}</p></div>);
    }
}