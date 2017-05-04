import React from 'react'

export default class Contact extends React.Component {
    render() {
        return (
            <div className="col-md-12 contact-me">
                <h4>CONTACT ME</h4>

                <div className="contact">
                    <span className="icon fa fa-phone"></span>
                    <div className="text"><a href="javascript:void(0)">Not Available Online</a></div>
                </div>

                <div className="contact">
                    <span className="icon fa fa-envelope"></span>
                    <div className="text"><a href='mailto:hello@pearpages.com'>hello@pearpages.com</a></div>
                </div>

                <div className="contact">
                    <span className="icon fa fa-map-marker"></span>
                    <div className="text"><a href="https://goo.gl/maps/BPX7RX98dzL2">Barcelona</a></div>
                </div>
            </div>
        );
    }
}