import React from 'react';
import LinkWithIcon from './link-with-icon';

const contactLinks = [
    {
        icon: 'phone',
        name: '',
        url: 'javascript:void(0)',
        short_url: 'Not Available Online'
    },
    {
        icon: 'envelope',
        name: '',
        url: 'mailto:hello@pearpages.com',
        short_url: 'hello@pearpages.com'
    },
    {
        icon: 'map-marker',
        name: '',
        url: 'https://goo.gl/maps/BPX7RX98dzL2',
        short_url: 'Barcelona'
    }
];

export default class Contact extends React.Component {

    renderLinks() {
        let links = [];
        contactLinks.forEach((v) => {
            links.push(<LinkWithIcon key={v.icon} linkData={v} />);
        });

        return links;
    }

    render() {
        return (
            <div className="col-md-12 contact-me">
                <h4>CONTACT ME</h4>

                {this.renderLinks()}
            </div>
        );
    }
}