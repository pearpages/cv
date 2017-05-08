import React from 'react';
import LinkWithIcon from './link-with-icon';

export default class Sidebar extends React.Component {

    renderLinks() {
        let links = [];
        this.props.data.forEach((v) => {
            links.push(<LinkWithIcon key={v.icon} linkData={v} />);
        });

        return links;
    }

    render() {
        return (
            <div className="col-md-12 sidebar">
                <h4>{this.props.name}</h4>

                {this.renderLinks()}
            </div>
        );
    }
}