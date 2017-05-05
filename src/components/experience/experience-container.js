import React from 'react';

export default class ExperienceContainer extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="row experience-container">
                <div className="col-md-12">
                    <h2><span className="fa fa-chevron-circle-right"></span> {this.props.name}</h2>
                    {this.props.children}
                </div>
            </div>
        );
    }
}