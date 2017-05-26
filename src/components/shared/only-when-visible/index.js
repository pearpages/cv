import React from 'react'
import { isInViewport, isWholeInViewport } from '../../../utils'

export default class OnlyWhenVisible extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.strategy === 'isWholeInViewPort') {
            this.state = { visible: false, strategy: isWholeInViewport };
        } else {
            this.state = { visible: false, strategy: isInViewport };
        }
        this.handleOnScroll = this.handleOnScroll.bind(this);
    }

    componentDidMount() {
        const el = this.refs.content;
        if (this.state.strategy(el)) {
            this.setState({ visible: true, ready: false });
            setTimeout(() => this.setState({ ready: true }), 100);
        } else {
            window.addEventListener('scroll', this.handleOnScroll);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    handleOnScroll(event) {
        if (this.state.strategy(this.refs.content)) {
            this.setState({ visible: true });
            if (this.props.animate) {
                setTimeout(() => this.setState({ ready: true }), 100);
            }
            window.removeEventListener('scroll', this.handleOnScroll);
        }
    }

    render() {
        return (<span ref={"content"} className={(this.props.animate ? 'animated ' : '') + (this.state.ready ? 'ready' : '')}>
            {(typeof this.props.children.type === 'string') ?
                this.props.children /* DOMTypeElement */
                :
                React.cloneElement(this.props.children, { visible: this.state.visible })
            }
        </span>);
    }
}