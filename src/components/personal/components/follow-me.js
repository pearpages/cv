import React from 'react';

const socialNetworks = [{
    icon: 'github',
    name: 'Github',
    url: 'https://github.com/pearpages',
    short_url: 'github.com/pearpages'
},
{
    icon: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/pearpages',
    short_url: 'twitter.com/pearpages'
},
{
    icon: 'pencil',
    name: 'Blog',
    url: 'https://pearpages.com',
    short_url: 'pearpages.com'
},
{
    icon: 'stack-overflow',
    name: 'Stackoverflow',
    url: 'http://stackoverflow.com/users/3955722/pere-pages',
    short_url: 'stackoverflow.com/users/3955722/pere-pages'
},
{
    icon: 'linkedin',
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/pearpages/',
    short_url: 'www.linkedin.com/in/pearpages/'
}];

export default class FollowMe extends React.Component {

    renderLinks() {
        let links = [];
        socialNetworks.forEach((v) => {
            links.push((
                <div className="follow" key={v.icon}>
                    <a target="_blank" href={v.url}>
                    <div className="social-link">
                        <span className={"fa fa-" + v.icon}></span> {v.name}
                    </div>
                   {v.short_url}</a>
                </div>
            ));
        });

        return links;
    }

    render() {
        return (
            <div className="col-md-12">
                <h4>FOLLOW ME</h4>

                {this.renderLinks()}

            </div>
        );
    }
}