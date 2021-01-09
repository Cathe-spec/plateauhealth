import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../Header/header';
import HeaderTop from '../HeaderTop/header-top';
import Appointment from '../Appointment/appointment';
import Cards from '../Cards/cards';
import Enrollment from '../Enrollment/enrollment';
import ForgotPassword from '../Forgot-password/password';
import Login from '../Login/login';
import Payment from '../Payment/payment';
import Footer from '../Footer/footer';

class App extends React.Component {

  state = {
    loginPage: false,
    homePage: false,
    forgotPage: false
  }

  switchLoginPage = () => {
    console.log("click")
    this.setState((prevState, prevProps) => this.setState({ loginPage: !prevState.loginPage }))
  }

  switchHomePage = () => {
    console.log("click")
    this.setState((prevState, prevProps) => this.setState({ homePage: !prevState.homePage }))
  }

  switchPaymentPage = () => {
    console.log("click")
    this.setState((prevState, prevProps) => this.setState({ paymentPage: !prevState.paymentPage }))
  }

  switchPasswordPage = () => {
    console.log("click")
    this.setState((prevState, prevProps) => this.setState({ passwordPage: !prevState.passwordPage }))
  }



  render() {

    const items = [
      {
        id: 1,
        heading: "150K",
        description: "Total Enrolments",
        buttonText: "Enrol Today"

      },

      {
        id: 2,
        heading: "450",
        description: "Facilities Accredited",
        buttonText: "Apply Today"

      },

      {
        id: 3,
        heading: "120K",
        description: "Active Subscriptions",
        buttonText: "Pay Subscription"

      },

      {
        id: 4,
        heading: "3650+",
        description: "Healthcare Professionals",
        buttonText: "Book Appointment"

      }
    ]


    return (
    <div className ="app"> 

        {
          this.state.loginPage ?
          <div>
              <Login switchPasswordPage={this.switchPasswordPage}/>
          </div> :

          this.state.paymentPage ?
          <div>
              <HeaderTop switchLoginPage={this.switchLoginPage} switchHomePage={this.switchHomePage}/>
              <Payment/>
              <Footer/>
          </div> :

          this.state.passwordPage ?
          <div>
            
              <ForgotPassword switchHomePage={this.switchHomePage}/>              
          </div> :


          <div>
                <HeaderTop switchLoginPage={this.switchLoginPage} switchHomePage={this.switchHomePage}/>
                <Header/>
                <div className="cards ">
                  <div className="container-fluid">
                    <div className="row">
                    <div className="sections">
                      <div className="container-fluid">
                        <div className="row">
                      {
                        items.map(item => (
                          <Cards key={item.id} heading={item.heading} description={item.description} buttonText={item.buttonText} switchPaymentPage={this.switchPaymentPage}/>
                        ))
                      }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer/>
          </div>
        }
           
    </div>
    )
  }
}


export default App;

