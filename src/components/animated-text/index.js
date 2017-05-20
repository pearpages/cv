import React from 'react'

export default class AnimatedText extends React.Component {

    constructor() {
        super();
        this.state = { value: '_' };
        this.recursive = this.recursive.bind(this);
    }

    componentDidMount() {
        this.recursive();
    }

    recursive() {
        if (this.props.text + '_' !== this.state.value) {
            setTimeout(() => {
                const string = this.props.text.substr(0, this.state.value.length + 1) + '_';
                this.setState({ value: string });
                this.recursive();
            }, 200);
        } else {
            this.setState({ value: this.state.value.substr(0,this.state.value.length - 1) });
        }
    }

    render() {
        return (<span>{this.state.value}</span>);
    }
}