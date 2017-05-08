import React from 'react';
import './progress-bar.scss';

export default class ProgressBar extends React.Component {

    render() {
        console.log('mobile',this.props.mobile);
        const data = this.props.data;
        return (
            (this.props.mobile) ?
        <div className="row">
            <div className="col-sm-12">
                <div className="progress">
                    <div className="progress-bar mobile" role="progressbar" style={{ width: data.value }}>
                        {data.name}
                    </div>
                </div>
            </div>
        </div>
            :
        <div className="row">
            <div className="col-sm-3">{data.name}</div>
            <div className="col-sm-9">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: data.value }}></div>
                </div>
            </div>
        </div>);
    }
}