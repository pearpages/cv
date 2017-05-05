import React from 'react';
import Stars from './stars';
import ProgressBar from './progress-bar';

const skills = [
    {name: 'Javascript',value:'80%'},
    {name: 'Angular 1.5',value:'85%'},
    {name: 'Ionic',value:'75%'},
    {name: 'Angular 2',value:'80%'},
    {name: 'REACT',value:'75%'},
    {name: 'Node',value:'70%'},
    {name: 'Bootstrap',value:'80%'},
    {name: 'CSS',value:'75%'}
];

export default class Skills extends React.Component {
    render() {
        return (
            <div>
                <div className="row skills">
                    <Stars data={{name:'English',class: 'col-4', stars: 4}}/>
                    <Stars data={{name:'Spanish',class: 'col-4', stars: 5}}/>
                    <Stars data={{name:'Catalan',class: 'col-4', stars: 5}}/>
                </div>

                <hr />

                {skills.map( (data,i) => {
                    return <ProgressBar data={data} key={i} />
                })}

            </div>
        );
    }
}