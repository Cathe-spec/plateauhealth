import React from 'react';
import  './password.css'; 
import LoginImg from '../../assets/images/bg-side.jpg';
import logo from '../../assets/images/plaschema-logo.png';


class ForgotPassword extends React.Component {

  render() {
    return (
        <div>
            {/* <div class="preloader">
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div> */}
        

            <div id="main-wrapper" class="oxyy-login-register">
            <div class="container-fluid px-0">
                <div class="row no-gutters min-vh-100"> 
                
                <div class="col-md-6 d-flex flex-column order-2 order-md-1">
                    <div class="container my-auto py-5">
                    <div class="row">
                        <div class="col-11 col-lg-9 col-xl-8 mx-auto text-center">
                        <div class="logo mb-4"><a href="" title="Beeki"><img src={ logo } alt="Plaschema" onClick={this.props.switchHomePage} /></a> </div>
                        <h4 class="mb-4">Forgot your password?</h4>
                        <p class="text-muted text-center mb-4">Enter the email address or mobile number associated with your account.</p>
                        <form id="forgotForm" method="post">
                            <div class="form-group">
                            <input type="email" class="form-control" id="emailAddress" required placeholder="Enter Email or Mobile Number"/>
                            </div>
                        <button class="btn btn-primary btn-block shadow-none my-4" type="submit">Continue</button>
                        </form>
                        <p class="text-muted text-2 mb-0">Return to <a class="btn-link" href="login.html">Log in</a></p> </div>
                    </div>
                    </div>
                    <div class="container py-2">
                    <p class="text-2 text-muted text-center mb-0">Copyright © Plateau State Healthcare Management Agency <br/>Developed by <a href="https://instantdeposit.africa/">Instant Deposit Ltd</a> 2020</p>
                    </div>
                </div>
                
                <div class="col-md-6 order-1 order-md-2">
                    <div class="hero-wrap d-flex align-items-center h-100">
                    <div class="hero-mask opacity-8 bg-secondary"></div>
                    <div class="hero-bg hero-bg-scroll" style={{backgroundImage: "url(" + LoginImg +")"}}></div>
                    <div class="hero-content mx-auto w-100 h-100 d-flex flex-column">
                        <div class="row no-gutters my-auto py-5">
                        <div class="col-10 col-lg-9 mx-auto">
                            <p class="text-4 text-white">We are glad to see you here!</p>
                            <h1 class="text-10 text-white mb-4">Get access to quick and affordable healthcare!</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>


        </div>
    )
  }
}


export default ForgotPassword;
