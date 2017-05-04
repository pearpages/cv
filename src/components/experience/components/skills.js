import React from 'react'

export default class Skills extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <h2><span className="fa fa-chevron-circle-right"></span> SKILLS</h2>

                <div className="row skills">
                    <div className="col-4">
                        <div>English</div>
                        <div>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star-o"></span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>Spanish</div>
                        <div>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>Catalan</div>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <div></div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-sm-3">Javascript</div>
                    <div className="col-sm-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">Angular 1.5</div>
                    <div className="col-sm-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">Ionic</div>
                    <div className="col-sm-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">Angular 2</div>
                    <div className="col-sm-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">REACT</div>
                    <div className="col-sm-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">Bootstrap</div>
                    <div className="col-sm-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">CSS</div>
                    <div className="col-sm-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}