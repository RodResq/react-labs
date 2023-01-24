function BoilingVerdict(props) {
    if (props.celsius >= 10) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

export class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius</legend>
                <input 
                    value={temperature}
                    onChange={this.temperature} />
                <BoilingVerdict 
                    celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}