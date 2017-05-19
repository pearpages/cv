import Secondary from './components/secondary';
import Main from './components/main';
import Menu from './components/menu';
import React from 'react';
import ScrollReveal from 'scrollreveal';
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
        this.state = {
            data: new Data(),
            config: new Config()
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    getSize() {
        if(window.innerWidth < 768) {
            return 'mobile';
        } else {
            return 'desktop';
        }
    }

    updateDimensions() {
        if(this.state.size !== this.getSize()) {
            this.setState({size: this.getSize()});
        }
    }

    componentWillMount() {
        this.setState({
            size: this.getSize()
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        const sr = ScrollReveal();
        sr.reveal('.experience-container');
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    hasMobileSize() {
        return this.state.size === 'mobile';
    }

    render() {
        return (
            <div className={this.hasMobileSize() ? 'mobile' : 'pc'}>
                <Menu name={this.state.data.getSummary().name} anchors={this.state.config.getConfig().anchors} size={this.state.size}/>
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