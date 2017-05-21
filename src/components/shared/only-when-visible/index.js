import React from 'react'
import { isInViewport } from '../../../utils'

export default class OnlyWhenVisible extends React.Component {

    constructor() {
        super();
        this.state = { visible: false, id: OnlyWhenVisible.makeId() };
    }

    componentDidMount() {
        const el = document.getElementById('only-when-visible-' + this.state.id);
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
        return (<span id={'only-when-visible-' + this.state.id}>
            {React.cloneElement(this.props.children, { visible: this.state.visible })}
        </span>);
    }
}

OnlyWhenVisible._id = 0;
OnlyWhenVisible.makeId = function () {
    return ++OnlyWhenVisible._id;
}