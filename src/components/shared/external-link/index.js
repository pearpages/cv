import React from 'react';

export default function ExternalLink(props) {

    if (props.url !== "") {
        return <a className="external-link" target="_blank" href={props.url}>
            {props.children}
        </a>
    } else {
        return <a style={{ cursor: 'not-allowed' }} href="javascript:void(0)">
            {props.children}
        </a>
    }

}