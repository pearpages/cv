import React from 'react';
import './title-with-image.scss';

export default class TitleWithImage extends React.Component {
    render() {
        const data = this.props.data;
        return (
        <div className="employer-header">
            <div className="employer-image float-left" ><img width="68px" src={"media/" + data.imageFile} alt={data.line2} /></div>
            <div className="name-and-title">
                <h1><span className={"fa fa-"+data.icon}></span> {data.line1}</h1>
                {(data.url) ?
                <h2><a target="_blank" className="external-link" href={data.url}>{data.line2}</a></h2>
                :
                <h2>{data.line2}</h2>
                }

            </div>
        </div>);
    }
}