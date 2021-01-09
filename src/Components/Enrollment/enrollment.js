import React from 'react';
import './enrollment.css';





const Enrollment = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
             <div className="" className="w3-animate-top" tabindex="-1" aria-labelledby="enroll" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="enroll">Enrollment Information</h5>
                    <button type="button" className="close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <p className="lead text-center">Please meet our team members in your Ward to enroll. Call 0700PLATEAU for more information</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" class="btn btn-secondary" >Close</button>
                    </div>
                </div>
                </div>
            </div>

        </div>




    );
};





export default Enrollment;