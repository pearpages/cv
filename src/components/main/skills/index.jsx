import React from 'react';
import AnimatedStars from './stars/animated-stars';
import AnimatedProgressBar from './progressbars/animated-progressbar';
import OnlyWhenVisible from '../../shared/only-when-visible'
import './index.scss';

export default function Skills(props) {

    return (
        <div>
            <div className="row skills">
                {props.data.stars.map((data, i) => {
                    return  <div  key={i} className="col-4 stars">
                                <OnlyWhenVisible><AnimatedStars value={data.stars} name={data.name}/></OnlyWhenVisible>
                            </div>
                })}
            </div>

            <hr />

            {props.data.bars.map((data, i) => {
                return <OnlyWhenVisible key={i}><AnimatedProgressBar name={data.name} value={data.value} mobile={props.mobile} /></OnlyWhenVisible>
            })}

        </div>
    );

}