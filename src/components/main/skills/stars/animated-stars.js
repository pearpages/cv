import React from 'react'
import Stars from './stars';

export default class AnimatedStars extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.recursive = this.recursive.bind(this);
        this.running = false;
    }

    componentDidMount() {
        this.recursive();
    }

    componentDidUpdate() {
        this.recursive();
    }

    recursive() {
        if ( (this.state.value < this.props.value) && this.props.visible && !this.running) {
            this.running = true;
            setTimeout(() => {
                this.running = false;
                this.setState({ value: this.state.value + 0.5 });
            }, 200);
        }
    }

    render() {
        return (<Stars name={this.props.name} value={this.state.value} />);
    }
}