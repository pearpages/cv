import Secondary from './components/secondary';
import Main from './components/main';
import Menu from './components/menu';
import React from 'react';
import ReactDOM from 'react-dom';
import Data from './services/data';
import Config from './services/config';
import './styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = { data: new Data(), config: new Config() };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    hasMobileSize() {
        return this.state.width < 768;
    }

    render() {
        return (
            <div className={this.hasMobileSize() ? 'mobile' : 'pc'}>
                <Menu data={this.state.config.getConfig()} />
                <div className="row" >
                    {
                        !this.hasMobileSize() ?
                            <Secondary
                                contact={this.state.data.getContact()}
                                community={this.state.data.getCommunity()}
                                mobile={false} />
                            :
                            null
                    }
                    <Main
                        mobile={this.hasMobileSize()}
                        summary={this.state.data.getSummary()}
                        skills={this.state.data.getSkills()}
                        education={this.state.data.getEducation()}
                        experience={this.state.data.getExperience()}
                    />

                    {
                        this.hasMobileSize() ?
                            <Secondary
                                contact={this.state.data.getContact()}
                                community={this.state.data.getCommunity()}
                                mobile={true} />
                            :
                            null
                    }
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('cv')
);