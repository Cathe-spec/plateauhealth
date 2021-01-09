import React from 'react';
import './payment.css';


 class Payment extends React.Component {

  render() {
    return (
        <div>
           <div  className="header">
        <div  className="container-fluid">
            <div  className="top-banner2">
                    <h2  className="mt-3 text-center">Payments</h2>
                    <div  className="pay-side mx-auto">
                        <form  className="py-2">
                            <div  className="form-group">
                                <input type="text"  className="form-control" placeholder="Enter Enrollment ID"/>
                                <div  className="bg-light p-3 my-3">
                                    <table  className="table table-striped">
                                        <tr>
                                            <td><b>Name:</b></td>
                                            <td>Emmanuel Enemakwu</td>
                                        </tr>
                                        <tr>
                                            <td><b>ID:</b></td>
                                            <td>055420</td>
                                        </tr>
                                        <tr>
                                            <td><b>Curren Plan:</b></td>
                                            <td>NIL</td>
                                        </tr>
                                        <tr>
                                            <td><b>Upgrade:</b></td>
                                            <td><select  className="form-control">
                                                <option>Private</option>
                                                <option>VIP</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><b>Frequency:</b></td>
                                            <td><select  className="form-control">
                                                <option>Monthly</option>
                                                <option>Quarterly</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><b>Amount:</b></td>
                                            <td>N2,500</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <a href="#"  className="btn btn-primary">Add</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <table  className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>ENRID</th>
                                            <th>NAME</th>
                                            <th>PLAN</th>
                                            <th>AMOUNT</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12345</td>
                                            <td>Alex Bade</td>
                                            <td>Private</td>
                                            <td>4,500</td>
                                            <td><a href="#"  className="btn btn-danger btn-sm">Remove</a></td>
                                        </tr>
                                        <tr>
                                            <td>78545</td>
                                            <td>Wike INah</td>
                                            <td>VIP</td>
                                            <td>10,500</td>
                                            <td><a href="#"  className="btn btn-danger btn-sm">Remove</a></td>
                                        </tr>
                                        <tr  className="font-weight-bold">
                                            <td colspan="4"  className="text-right">Total Amount</td>
                                            <td>N34,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    <a href="#"  className="btn btn-lg btn-success btn-block">Proceed</a>
                                </p>
                                <p></p>
                            </div>
                        </form>
                    </div>
            </div>
                
        </div>
    </div>
    <div  className="clearfix mt-5"></div>
        </div>
    )
  }
}


export default Payment;
