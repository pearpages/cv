import React from 'react';

export default class LinkWithIcon extends React.Component {
    render () {
        const v = this.props.linkData;
        return (<div className="follow">
                    <a target="_blank" href={v.url}>
                    <div className="social-link">
                        <span className={"fa fa-" + v.icon}></span> {v.name}
                    </div>
                   {v.short_url}</a>
                </div>);
    }
}