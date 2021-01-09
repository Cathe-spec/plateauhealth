import React from 'react';
import './appointment.css';





const Appointment = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
             <div className="w3-animate-top" id="book">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="book">Book an Appointment</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Enrollment ID</label>
                                <input type="text" className="form-control" placeholder="Type your enrollment ID here"/>
                            </div>
                            <div className="form-group">
                                <label>Reason</label>
                                <textarea className="form-control" placeholder="Why do you want to see a Doctor?"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary btn-lg">Submit Request</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>

        </div>




    );
};





export default Appointment;