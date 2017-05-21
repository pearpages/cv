import React from 'react'
import './index.scss';

export default function GoBottom(props) {

    return (<div
                onClick={props.handleOnClick}
                id="go-bottom">
                    <span className="fa fa-angle-down"></span>
            </div>);

}