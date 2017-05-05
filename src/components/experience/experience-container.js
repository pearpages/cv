import React from 'react';
import './experience-container.scss';

export default class ExperienceContainer extends React.Component {

    constructor() {
        super();
        this.state = {hidden: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({hidden: !this.state.hidden});
    }

    render() {
        return (
            <div id={this.props.id} className="row experience-container">
                <div className="col-md-12">
                    <h2 onClick={this.handleClick} ><span className="fa fa-chevron-circle-right"></span> {this.props.name}</h2>
                    <div className={"contain "+(this.state.hidden ?'hidden':null)}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}