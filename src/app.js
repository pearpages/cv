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
        this.state = {
            data: new Data(),
            config: new Config()
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    getSize() {
        if (window.innerWidth < 768) {
            return 'mobile';
        } else {
            return 'desktop';
        }
    }

    updateDimensions() {
        if (this.state.size !== this.getSize()) {
            this.setState({ size: this.getSize() });
        }
    }

    componentWillMount() {
        this.setState({
            size: this.getSize()
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
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
                <div className="row" >
                    <Main
                        mobile={this.hasMobileSize()}
                        summary={this.state.data.getSummary()}
                        skills={this.state.data.getSkills()}
                        education={this.state.data.getEducation()}
                        experience={this.state.data.getExperience()}
                    />
                    <Secondary
                        contact={this.state.data.getContact()}
                        community={this.state.data.getCommunity()}
                        mobile={true} />
                </div>
                <footer>
                    <p>This resume is part of a project I have published in <span className="fa fa-github"></span> Github: <a href="https://github.com/pearpages/cv">https://github.com/pearpages/cv</a> for generating CVs from a json source.
                    </p>
                    <p className="no-screen">This is the printed version of the site. If you want to check to online version you can find it here: <a href="https://pearpages.com/cv">https://pearpages.com/cv</a>.</p>
                </footer>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('cv')
);