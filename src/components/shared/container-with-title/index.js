import React from 'react';
import ContainerTitle from './container-title'
import './index.scss';

export default class ContainerWithTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden: false};
        this.handleClick = this.handleClick.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    componentDidMount() {
        const height = this.refs.content.clientHeight;
        console.log(this.refs.content,height);
        this.setState({hidden: this.props.hidden, initialHeight: height});
    }

    handleClick() {
        this.setState({hidden: !this.state.hidden});
    }

    getStyle() {
        if(this.state.hidden) {
            return {height: '0px', padding: '0px'}
        } else {
            return {height: this.state.initialHeight};
        }
    }

    getContent() {
        if(this.props.children) {
            return <div
                        className="container"
                        ref="content"
                        style={this.getStyle()}
                        >{this.props.children}</div>;
        }
        return <div
                    className="container"
                    ref="content"
                    style={this.getStyle()}
                    dangerouslySetInnerHTML={{ __html: this.props.html}} />;
    }

    render() {
        return (
            <div className="container-with-title">
                <ContainerTitle
                    size={this.props.size}
                    onClick={this.handleClick}
                    icon={this.props.icon}
                    hidden={this.state.hidden}
                    >{this.props.name}</ContainerTitle>
                    {this.getContent()}
            </div>
        );
    }
}