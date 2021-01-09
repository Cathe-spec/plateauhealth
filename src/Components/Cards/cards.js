import React from 'react';
import './cards.css';
import Enrollment from '../Enrollment/enrollment';
import Appointment from '../Appointment/appointment';



class Cards extends React.Component {

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
    
         
                      <div className="col-md-3">
                          <div className="section">
                            <div className="icon-home">
                                  {
                                  this.props.buttonText === "Enrol Today" ? (
                                    <div>
                                      <i className="fa fa-users"></i> 
                                    </div>
                                  ) : 
                                  this.props.buttonText === "Apply Today" ? (
                                    <div>
                                      <i class="fa fa-clinic-medical"></i>
                                    </div>
                                  ) : 
                                  this.props.buttonText === "Pay Subscription" ? (
                                    <div>
                                      <i class="fa fa-notes-medical"></i> 
                                    </div>
                                  ) : 
                                  this.props.buttonText === "Book Appointment" ? (
                                    <div>
                                     <i class="fa fa-user-md"></i>
                                    </div>
                                  ) :null  
                              }

                            </div>
                              <h3>{this.props.heading}</h3>
                              <p className="text-center"> {this.props.description}</p>
                              <p className="mt-4">
                              {
                              this.props.buttonText === "Enrol Today" ? (
                                <div>
                                  <Enrollment show={this.state.show} handleClose={this.hideModal}/>
                                  <a className="btn btn-success btn-block btn-lg" onClick={this.showModal}>{this.props.buttonText}</a>
                                </div>
                              ) : 
                              this.props.buttonText === "Apply Today" ? (
                                <div>
                                  <a className="btn btn-success btn-block btn-lg" >{this.props.buttonText}</a>
                                </div>
                              ) : 
                              this.props.buttonText === "Pay Subscription" ? (
                                <div>
                                <a className="btn btn-success btn-block btn-lg" onClick={this.props.switchPaymentPage}>{this.props.buttonText}</a>
                                </div>
                              ) : 
                              this.props.buttonText === "Book Appointment" ? (
                                <div>
                                <Appointment show={this.state.show} handleClose={this.hideModal}/>
                                <a className="btn btn-success btn-block btn-lg mt-5 " onClick={this.showModal}>{this.props.buttonText}</a>
                                </div>
                              ) :null  
                          }

                            </p>
                          </div>
                      </div>
                  
    )
  }
}


export default Cards;
