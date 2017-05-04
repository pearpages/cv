import React from 'react';

export default class ProgressBar extends React.Component {

    render() {
        const data = this.props.data;
        return (<div className="row">
            <div className="col-sm-3">{data.name}</div>
            <div className="col-sm-9">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: data.value }}></div>
                </div>
            </div>
        </div>);
    }
}