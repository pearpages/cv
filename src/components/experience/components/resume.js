import React from 'react'

export default class Resume extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <h2><span className="fa fa-chevron-circle-right"></span> EXPERIENCE</h2>

                <div className="row job">
                    <div className="col-sm-3">
                        <div className="from">June 2015</div>
                        <div className="to">Present</div>
                    </div>
                    <div className="col-sm-9">
                        <div className="title"><span>Front End Developer</span> at Tokio Marine HCC</div>
                        <div className="description">
                            <p>Maintainence of the previously created Reporting System. Front End Developer of the Company after having successfully introduced AngularJS as the client-side framework for the company and becoming its evangelist.</p>
                            <ul>
                                <li>eFolder project with AngularJS</li>
                                <li>AngularJS widgets e.g. Fac Out Calculator</li>
                                <li>Portfolio Analysis Report with AngularJS</li>
                                <li>Mobile Version of the Ticketing Tool with Ionic</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row job">
                    <div className="col-sm-3">
                        <div className="from">April 2011</div>
                        <div className="to">June 2015</div>
                    </div>
                    <div className="col-sm-9">
                        <div className="title"><span>Analyst Programmer</span> at Tokio Marine HCC</div>
                        <div className="description">
                            <p>The creation of a Reporting System for the UWs and Management team with the requirements of the Business Analyst team.</p>
                            <ul>
                                <li><strong>Reporting System</strong> with Zend PHP, jQuery, Javascript, MSSQL and Bootstrap
                    <ul>
                                        <li>Gross Written Premium Report</li>
                                        <li>Monthly Activity Report</li>
                                        <li>Fac Out Limits Report</li>
                                        <li>Claims Acitivity Report</li>
                                        <li>Broker Trip Report</li>
                                        <li>Underwriting Activity Report</li>
                                        <li>...</li>
                                    </ul>
                                </li>
                                <li><strong>Ticketing Tool (Helpdesk App)</strong> for the offices of Barcelona and Madrid with Zend PHP, jQuery, Javascript, MSSQL and UIKit</li>
                                <li><strong>Booking Tool (Travel App)</strong> with Zend PHP, jQuery, Javascript, MSSQL and Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row job">
                    <div className="col-sm-3">
                        <div className="from">January 2007</div>
                        <div className="to">April 2011</div>
                    </div>
                    <div className="col-sm-9">
                        <div className="title"><span>Web Developer</span> at Putput Comunicacions</div>
                        <div className="description">
                            <p>Projects with PHP, Drupal and MySQL. Among others:</p>
                            <ul className="webs">
                                <li>Col·legi de Periodistes de Catalunya <span>www.periodistes.org</span></li>
                                <li>Associcació d'Escriptors en Llengua Catalana <span>www.escriptors.cat</span></li>
                                <li>Il·lustre Col·legi de l'Advocacia de Barcelona <span>www.icab.cat</span></li>
                                <li>Grup Mas i Mas <span>www.masimas.com</span></li>
                                <li>La Sala Teatre, Olicatessen ...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>);
    }
}