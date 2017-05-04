import React from 'react';
import './index.scss';
import Period from './period';

export default class Resume extends React.Component {

    render() {
        const data = this.props.data;
        return (
            <div className="container">
                {data.map((v) => {
                    return <Period key={v.id} data={v} />
                })}
            </div>
        );
    }
}