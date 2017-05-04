import React from 'react'

export default class FollowMe extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <h4>FOLLOW ME</h4>

                <div className="follow">
                    <div className="page"><span className="fa fa-github"></span> Github</div>
                    <a target="_blank" href="https://github.com/pearpages">github.com/pearpages</a>
                </div>

                <div className="follow">
                    <div className="page"><span className="fa fa-twitter"></span> Twitter</div>
                    <a target="_blank" href="https://twitter.com/pearpages">twitter.com/pearpages</a>
                </div>

                <div className="follow">
                    <div className="page"><span className="fa fa-pencil"></span> Blog</div>
                    <a target="_blank" href="https://pearpages.com">pearpages.com</a>
                </div>

                <div className="follow">
                    <div className="page"><span className="fa fa-stack-overflow"></span> Stackoverflow</div>
                    <a target="_blank" href="http://stackoverflow.com/users/3955722/pere-pages">stackoverflow.com/users/3955722/pere-pages</a>
                </div>

                <div className="follow">
                    <div className="page"><span className="fa fa-linkedin"></span> Linkedin</div>
                    <a target="_blank" href="https://www.linkedin.com/in/pearpages/">www.linkedin.com/in/pearpages/</a>
                </div>
            </div>
        );
    }
}