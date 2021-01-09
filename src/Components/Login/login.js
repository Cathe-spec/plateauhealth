import React from 'react';
import  './login.css'; 
import LoginImg from '../../assets/images/bg-side.jpg';
import logo from '../../assets/images/plaschema-logo.png';


class Login extends React.Component {

  render() {
    return (
        <div>
           
            {/* <-- Preloader --> */}
            {/* <div className="preloader">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div> */}
            {/* <!-- Preloader End --> */}

            <div id="main-wrapper" className="oxyy-login-register">
            <div className="container-fluid px-0">
                <div className="row no-gutters min-vh-100"> 
                {/* <!-- Login Form
                ========================= --> */}
                <div className="col-md-6 d-flex flex-column order-2 order-md-1">
                    <div className="container my-auto py-5">
                    <div className="row">
                        <div className="col-11 col-lg-9 col-xl-8 mx-auto text-center">
                        <div className="logo mb-4 m"> <a href="" title="Beeki"><img src={ logo } alt="Plaschema" onClick={this.props.switchHomePage} /></a> </div>
                        <form id="loginForm" method="post">
                            <div className="vertical-input-group">
                            <div className="input-group">
                                <input type="email" className="form-control" id="emailAddress" required placeholder="Email"/>
                            </div>
                            <div className="input-group">
                                <input type="password" className="form-control" id="loginPassword" required placeholder="Password"/>
                            </div>
                            </div>
                            <button className="btn btn-primary btn-block shadow-none my-4" type="submit">Sign In</button>
                        </form>
                        <a className="btn-link text-2" href="" onClick={this.props.switchForgotPage}>Forgot Password?</a>
                        <p className="text-muted text-2">Don't have an Account? <a href="#">Sign Up Now</a></p>
                        </div>
                    </div>
                    </div>
                    <div className="container py-2">
                    <p className="text-2 text-muted text-center mb-0">Copyright © Plateau State Healthcare Management Agency <br/>Developed by <a href="https://instantdeposit.africa/">Instant Deposit Ltd</a> 2020</p>
                    </div>
                </div>
                {/* <!-- Login Form End --> 
                
                <!-- Welcome Text
                ========================= --> */}
                <div className="col-md-6 order-1 order-md-2">
                    <div className="hero-wrap d-flex align-items-center h-100">
                    <div className="hero-mask opacity-8 bg-secondary"></div>
                    <div className="hero-bg hero-bg-scroll" style={{backgroundImage: "url(" + LoginImg +")"}} ></div>
                    <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                        <div className="row no-gutters my-auto py-5">
                        <div className="col-10 col-lg-9 mx-auto">
                            <p className="text-4 text-white">We are glad to see you here!</p>
                            <h1 className="text-10 text-white mb-4">Get access to quick and affordable healthcare!</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <!-- Welcome Text End -->  */}
                </div>
            </div>
            </div>
        </div>
    )
  }
}


export default Login;
