import React from 'react';
import AnimatedStars from './stars/animated-stars';
import AnimatedProgressBar from './progressbars/animated-progressbar';
import OnlyWhenVisible from '../../shared/only-when-visible'
import './index.scss';

export default function Skills(props) {

    return (
        <div>
            {props.data.bars.map((data, i) => {
                return <OnlyWhenVisible key={i}><AnimatedProgressBar name={data.name} value={data.value} mobile={props.mobile} /></OnlyWhenVisible>
            })}

        </div>
    );

}