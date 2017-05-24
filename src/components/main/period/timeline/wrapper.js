import React from 'react';

export default function Wrapper(props) {

    return (<div className={"wrapper" + (props.visible ? ' ready' : '')}>
        {props.children}
    </div>);

}