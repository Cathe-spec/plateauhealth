import React from 'react';
import logo from '../../assets/images/plaschema-logo.png';
import  './header-top.css';


class HeaderTop extends React.Component {

  render() {
    return (
    <div className ="top">
         <div className="container-fluid">
            <div className="row px-3">
            <div className="col-md-10">
                <div className="logo">
                <a href="" title="Beeki"><img src={ logo } alt="Plaschema" onClick={this.props.switchHomePage} /></a>
                </div>
            </div>
            <div className="col-md-2">
                <div className="mt-3 pull-right">
                    <a onClick={this.props.switchLoginPage} className="btn btn-success btn-block"><i className="fas fa-user-lock mr-2"></i>LOGIN</a>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
  }
}


export default HeaderTop;
