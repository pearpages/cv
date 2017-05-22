import React from 'react';
import './progressbars.scss';
import CompactProgressbar from './compact-progressbar';
import Progressbar from './progressbar';
import { isInViewport } from '../../../../utils';


export default class AnimatedProgressBar extends React.Component {

    constructor() {
        super();
        this.state = { value: 0 };
        this.recursive = this.recursive.bind(this);
    }

    componentDidMount() {
        this.recursive();
    }

    componentDidUpdate() {
        this.recursive();
    }

    recursive() {
        if (this.state.value < this.props.value && this.props.visible) {
            setTimeout(() => this.setState({ value: this.state.value + 1 }), 25);
        }
    }

    render() {
        return (
            (this.props.mobile) ?
                <CompactProgressbar value={this.state.value} name={this.props.name} />
                :
                <div>
                <Progressbar className="no-print" value={this.state.value} name={this.props.name} />
                <CompactProgressbar className="print" value={this.state.value} name={this.props.name} />
                </div>);
    }
}