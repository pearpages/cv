import React from 'react';

export default function LinkWithIcon(props) {

    const v = props.linkData;
    return (<div className="follow">
        {(v.url !== "") ?
            <a className="external-link" target="_blank" href={v.url}>
                <div className="social-link">
                    <span className={"fa fa-" + v.icon}></span> {v.name}
                </div>
                {v.short_url}</a>
            :
            <a href="javascript:void(0)" style={{ cursor: 'not-allowed' }}>
                <div className="social-link">
                    <span className={"fa fa-" + v.icon}></span> {v.name}
                </div>
                {v.short_url}</a>
        }

    </div>);

}