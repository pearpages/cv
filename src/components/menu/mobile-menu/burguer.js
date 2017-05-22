import React from 'react';
import './burguer.scss';

export default function Burguer(props) {

    return (
        (props.collapse === true) ?
            <span id="mobile-menu" onClick={props.onClick} className="fa fa-bars"></span>
            :
            <span id="mobile-menu" onClick={props.onClick} className="fa fa-close"></span>
    );

}