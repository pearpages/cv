import React from 'react';
import ContainerTitle from './container-title'
import './index.scss';

export default class ContainerWithTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden: this.props.hidden};
        this.handleClick = this.handleClick.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    handleClick() {
        this.setState({hidden: !this.state.hidden});
    }

    getStyle() {
        return {transform: 'scaleY(1)',transformOrigin: 'top'}
    }

    getContent() {
        if(this.props.children) {
            return this.props.children;
        }
        return <div dangerouslySetInnerHTML={{ __html: this.props.html}} ></div>;
    }

    render() {
        return (
            <div className={`container-with-title ${this.props.className ? this.props.className : ''}`}>
                <ContainerTitle
                    size={this.props.size}
                    onClick={this.handleClick}
                    icon={this.props.icon}
                    hidden={false}
                    >{this.props.name}</ContainerTitle>
                    <div
                        className="content print"
                        ref="content"
                        style={this.getStyle()}
                        >{this.getContent()}</div>
            </div>
        );
    }
}