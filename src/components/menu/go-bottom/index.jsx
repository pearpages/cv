import React from 'react'
import './index.scss';

export default function GoBottom(props) {

    return (<div
                className="no-print"
                onClick={props.handleOnClick}
                id="go-bottom">
                    <span className={"fa fa-angle-"+(props.bottom ? 'up' : 'down')}></span>
            </div>);

}