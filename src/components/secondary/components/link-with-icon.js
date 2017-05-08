import React from 'react';

export default class LinkWithIcon extends React.Component {
    render () {
        const v = this.props.linkData;
        return (<div className="follow">
                    {(v.url !== "") ?
                    <a className="external-link" target="_blank" href={v.url}>
                    <div className="social-link">
                        <span className={"fa fa-" + v.icon}></span> {v.name}
                    </div>
                   {v.short_url}</a>
                   :
                   <a href="javascript:void(0)" style={{cursor: 'not-allowed'}}>
                    <div className="social-link">
                        <span className={"fa fa-" + v.icon}></span> {v.name}
                    </div>
                   {v.short_url}</a>
                   }

                </div>);
    }
}