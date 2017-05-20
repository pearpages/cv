import React from 'react';
import './progress-bar.scss';

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

export default class ProgressBar extends React.Component {

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