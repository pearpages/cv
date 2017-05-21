import React from 'react';
import AnimatedStars from './stars/animated-stars';
import AnimatedProgressBar from './progressbars/animated-progressbar';
import './index.scss';

export default function Skills(props) {

    return (
        <div>
            <div className="row skills">
                {props.data.stars.map((data, i) => {
                    return  <div  key={i} className="col-4 stars">
                                <AnimatedStars value={data.stars} name={data.name}/>
                            </div>
                })}
            </div>

            <hr />

            {props.data.bars.map((data, i) => {
                return <AnimatedProgressBar name={data.name} value={data.value} identifier={i} key={i} mobile={props.mobile} />
            })}

        </div>
    );

}