import Experience from './components/experience';
import Personal from './components/personal';
import Menu from './components/menu';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends React.Component {

    constructor() {
        super();
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
        return this.state.width < 576;
    }

    render() {
        return (
            <div className={this.hasMobileSize() ? 'mobile' : 'pc'}>
                <Menu />
                <div className="row" >
                    {!this.hasMobileSize() ? <Personal mobile={false}/> : null}
                    <Experience />
                    {this.hasMobileSize() ? <Personal mobile={true} /> : null}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('cv')
);