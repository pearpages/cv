import React from 'react';
import './progressbars.scss';

export default function CompactProgressbar(props) {

    return (<div className="row">
        <div className="col-sm-12">
            <div className="progress">
                <div className={"mobile progress-bar progress-bar-" + props.identifier} role="progressbar" style={{ width: props.value + '%' }}>
                    {props.name}
                </div>
            </div>
        </div>
    </div>);

}