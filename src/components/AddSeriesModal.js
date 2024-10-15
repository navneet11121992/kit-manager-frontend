import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Modal.css'; // Optional: Use this if you have custom styling for the modal

const AddSeriesModal = ({ show, onClose, title, children }) => {
//   if (!show) {
//     return null;
//   }

  return (
    <div className="add-series-modal modal fade" id="myModal" role="dialog" style={modalStyle}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">ADD NEW SERIES</h4>
                </div>
                <div className="modal-body">

                    <div className="dates-div">
                        <div className="start-date">
                            <label for="startDate">Start Date:</label>
                            <input type="text" id="start_date" name="startDate" value="10/19/2024" />

                        </div>
                        <div className="dash">-</div>
                        <div className="end-date">
                            <label for="endDate">End Date:</label>
                            <input type="text" id="end_date" name="endDate" value="10/20/2024" />

                        </div>
                    </div>

                    <div className="btn-div text-center">
                        <button type="button" id="newSeriesBtn" className="btn btn-primary btn-large submit-btn">Add Series</button>
                    </div>

                </div>

            </div>
        </div>
    </div>
  );
};

const modalStyle = {
    zIndex: 999999,
    paddingRight: '17px',
  };

export default AddSeriesModal;
