import React from 'react';
import './progressbars.scss';
import CompactProgressbar from './compact-progressbar';

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    const res = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
    return res;
}

export default class AnimatedProgressBar extends React.Component {

    constructor() {
        super();
        this.state = { value: 0, visible: false };
        this.recursive = this.recursive.bind(this);
    }

    componentDidMount() {
        const el = document.querySelector('.progress-bar-' + this.props.identifier);
        if(isInViewport(el)) {
            this.setState({visible:true});
            this.recursive();
        } else {
            this.onScroll = this.onScrollMaker(el).bind(this);
            window.addEventListener('scroll', this.onScroll);
        }
    }

    componentDidUpdate() {
        this.recursive();
    }

    onScrollMaker(element) {
        return function (event) {
            const res = isInViewport(element);
            if (res) {
                window.removeEventListener('scroll', this.onScroll);
                this.setState({ visible: true });
            }
        }
    }

    recursive() {
        if (this.state.value < this.props.value && this.state.visible) {
            setTimeout(() => this.setState({ value: this.state.value + 1 }), 25);
        }
    }

    render() {
        return (
            (this.props.mobile) ?
                <CompactProgressbar identifier={this.props.identifier} value={this.state.value} name={this.props.name}/>
                :
                <Progressbar identifier={this.props.identifier} value={this.state.value} name={this.props.name} />);
    }
}