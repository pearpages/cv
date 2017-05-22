import React from 'react';
import './index.scss';

export default class ContainerWithTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: props.hidden !== undefined ? props.hidden : true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({hidden: !this.state.hidden});
    }

    getContent() {
        if(this.props.children) {
            return <div className={(this.state.hidden) ? 'hidden': 'visible'}>{this.props.children}</div>;
        }
        return <div className={(this.state.hidden) ? 'hidden': 'visible'} dangerouslySetInnerHTML={{ __html: this.props.html}} />;
    }

    render() {
        return (
            <div className="container-with-title">
                <this.props.size onClick={this.handleClick}><span className={"icon fa fa-"+this.props.icon}></span> {this.props.name} <span className={"fa fa-caret-square-o-"+((this.state.hidden) ? 'up' : 'down')}></span></this.props.size>
                {this.getContent()}
            </div>
        );
    }
}