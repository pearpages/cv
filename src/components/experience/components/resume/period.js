import React from 'react'

export default class Period extends React.Component {

    render() {
        const data = this.props.data;
        return (<div className="timeline-item" {...{ 'data-date-is': data.from }}>
            <div className="employer-header">
                <div className="employer-image float-left" ><img width="68px" src={"media/" + data.employer.image} alt={data.employer.name} /></div>
                <div className="name-and-title">
                    <h1><span className="fa fa-user"></span> {data.title}</h1>
                    <h2>{data.employer.name}</h2>
                </div>
            </div>

            <div className="period-description">{data.description}</div>

            <h3><span className="fa fa-cogs"></span> Projects</h3>
            <div dangerouslySetInnerHTML={{ __html: data.projects }} />
        </div>);
    }
}