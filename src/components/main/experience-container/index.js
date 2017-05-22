import React from 'react';
import './index.scss';

export default class ExperienceContainer extends React.Component {

    constructor() {
        super();
        this.state = { hidden: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <div id={this.props.id} className="row anchor experience-container">
                <div className="col-md-12">
                    <h2 onClick={this.handleClick} ><span className="fa fa-chevron-circle-right"></span> {this.props.name} <span className={"fa fa-caret-square-o-" + ((this.state.hidden) ? 'up' : 'down')}></span></h2>
                    <div className={"contain " + (this.state.hidden ? 'hidden' : 'visible')}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}