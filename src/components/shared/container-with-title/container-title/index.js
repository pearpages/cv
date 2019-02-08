import React from 'react';
import './index.scss'

export default function ContainerTitle(props) {

    return (<props.size onClick={props.onClick}><span className={"icon fa fa-" + props.icon}></span> {props.children} </props.size>);

}