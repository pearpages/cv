import React from 'react'
import { isInViewport } from '../../../utils'

export default class OnlyWhenVisible extends React.Component {

    constructor() {
        super();
        this.state = { visible: false };
    }

    componentDidMount() {
        const el = this.refs.content;
        if (isInViewport(el)) {
            this.setState({ visible: true });
        } else {
            this.onScroll = this.onScrollMaker(el).bind(this);
            window.addEventListener('scroll', this.onScroll);
        }
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

    render() {
        return (<span ref="content">{React.cloneElement(this.props.children, { visible: this.state.visible })}</span>);
    }
}