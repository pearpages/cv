import Experience from './components/experience';
import Personal from './components/personal';
import Menu from './components/menu';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import data from './data.json';

class App extends React.Component {

    constructor() {
        super();
        this.state = {data};
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
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
                <Menu data={this.state.data.config} />
                <div className="row" >
                    {!this.hasMobileSize() ? <Personal data={this.state.data.personal} mobile={false}/> : null}
                    <Experience data={this.state.data.experience} mobile={this.hasMobileSize()}/>
                    {this.hasMobileSize() ? <Personal data={this.state.data.personal} mobile={true} /> : null}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('cv')
);