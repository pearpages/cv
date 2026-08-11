import React from 'react';
import ExternalLink from '../../shared/external-link'
import './index.scss';

export default function LinkWithIcon(props) {

    const v = props.linkData;
    return (<div className="follow">
        <ExternalLink url={v.url}>
            <div className="social-link">
                <span className={"fa fa-" + v.icon}></span> {v.name}
            </div>
            {v.short_url}</ExternalLink>
    </div>);

}