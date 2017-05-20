import React from 'react';
import './progress-bar.scss';

export default class ProgressBar extends React.Component {

    constructor() {
        super();
        this.state = { value: 0, visible: false };
        this.recursive = this.recursive.bind(this);
    }

    componentDidMount() {
        this.onScroll = this.whatever(document.querySelector('.progress-bar-' + this.props.identifier)).bind(this);
        this.recursive();
        window.addEventListener('scroll', this.onScroll);
    }

    componentDidUpdate() {
        this.recursive();
    }

    whatever(element) {
        return function isInViewport() {
            var rect = element.getBoundingClientRect();
            var html = document.documentElement;
            const res = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || html.clientHeight) &&
                rect.right <= (window.innerWidth || html.clientWidth)
            );
            if (res) {
                window.removeEventListener('scroll', this.onScroll);
                this.setState({ visible: true });
            }
        }
    }

    recursive() {
        if (this.state.value < this.props.value && this.state.visible) {
            setTimeout(() => this.setState({ value: this.state.value + 5 }), 50);
        }
    }

    render() {
        return (
            (this.props.mobile) ?
                <div className="row">
                    <div className="col-sm-12">
                        <div className="progress">
                            <div className={"mobile progress-bar progress-bar-" + this.props.identifier} role="progressbar" style={{ width: this.state.value + '%' }}>
                                {this.props.name}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="row">
                    <div className="col-sm-3">{this.props.name}</div>
                    <div className="col-sm-9">
                        <div className="progress">
                            <div className={"progress-bar progress-bar-" + this.props.identifier} role="progressbar" style={{ width: this.state.value + '%' }}></div>
                        </div>
                    </div>
                </div>);
    }
}