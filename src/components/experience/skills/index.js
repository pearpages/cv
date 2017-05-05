import React from 'react';
import Stars from './stars';
import ProgressBar from './progress-bar';

export default class Skills extends React.Component {
    render() {
        return (
            <div>
                <div className="row skills">
                {this.props.data.stars.map( (data,i) => {
                    return <Stars class="col-4" key={i} data={data}/>
                })}
                </div>

                <hr />

                {this.props.data.bars.map( (data,i) => {
                    return <ProgressBar data={data} key={i} />
                })}

            </div>
        );
    }
}