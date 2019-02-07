import React from 'react';

export default function Stack(props) {

    return (<div>
        <h3>
        <span className="icon fa fa-align-justify"></span> Tech Stack / Technologies</h3>
        <div className="container">{props.stack}</div>
    </div>)

}