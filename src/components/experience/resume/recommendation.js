import React from 'react';
import './recommendation.scss';

export default class Recommendation extends React.Component {
    render () {
        const re = this.props.data;
        console.log(re);
        return (
        <div className="row recommendation">
            <div className="col-2 person">
                <img src={"media/"+re.colleague.image} alt={re.colleague.name}/>
            </div>
            <div className="col-10 text">
                <div dangerouslySetInnerHTML={{ __html: re.text}} />
            </div>
        </div>
        );
    }
}