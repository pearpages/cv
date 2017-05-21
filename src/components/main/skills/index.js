import React from 'react';
import Stars from './stars';
import AnimatedProgressBar from './progressbars/animated-progressbar';

export default function Skills(props) {

    return (
        <div>
            <div className="row skills">
                {props.data.stars.map((data, i) => {
                    return <Stars class="col-4" key={i} data={data} />
                })}
            </div>

            <hr />

            {props.data.bars.map((data, i) => {
                return <AnimatedProgressBar name={data.name} value={data.value} identifier={i} key={i} mobile={props.mobile} />
            })}

        </div>
    );

}