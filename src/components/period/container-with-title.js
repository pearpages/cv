import React from 'react';
import './container-with-title.scss';

export default class ContainerWithTitle extends React.Component {

    constructor() {
        super();
        this.state = {
            hidden: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({hidden: !this.state.hidden});
    }

    getContent() {
        if(typeof(this.props.html) === 'object') {
            return <div className={(this.state.hidden) ? 'hidden': 'visible'}>{this.props.html}</div>;
        }
        return <div className={(this.state.hidden) ? 'hidden': 'visible'} dangerouslySetInnerHTML={{ __html: this.props.html}} />;
    }

    render() {
        return (
            <div className="container-with-title">
                <h3 onClick={this.handleClick}><span className={"icon fa fa-"+this.props.icon}></span> {this.props.name} <span className={"fa fa-caret-square-o-"+((this.state.hidden) ? 'up' : 'down')}></span></h3>
                {this.getContent()}
            </div>
        );
    }
}