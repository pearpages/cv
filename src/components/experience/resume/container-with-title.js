import React from 'react';
import './container-with-title.scss';

export default class ContainerWithTitle extends React.Component {

    constructor() {
        super();
        this.state = {
            hidden: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({hidden: !this.state.hidden});
    }

    render() {
        return (
            <div className="container-with-title">
                <h3 onClick={this.handleClick}><span className={"icon fa fa-"+this.props.icon}></span> {this.props.name} <span className={"fa fa-caret-"+((this.state.hidden) ? 'up' : 'down')}></span></h3>
                {(!this.state.hidden) ? <div dangerouslySetInnerHTML={{ __html: this.props.html}} /> : null}
            </div>
        );
    }
}