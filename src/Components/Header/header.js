import React from 'react';
import  './header.css';


class Header extends React.Component {

  render() {
    return (
        <div>
            <div className="header">
                <div className="container-fluid">
                    <div className="top-banner">
                            <h2 className="mt-3">Plateau State Universal Health Care by PLASCHEMA</h2>
                            <h4 className="mt-4">Welcome to Plateau Health portal. Our mandate is to ensure access to affordable, equitable, timely and quality healthcare, with financial security for all residents of Plateau State irrespective of their socioeconomic status</h4>
                            <div className="side-banner mt-2">

                            </div>
                    </div>
                        
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
  }
}


export default Header;
