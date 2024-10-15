import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from "react";



const Configurator = () => {
    const [listings, setListings] = useState([]);

    async function getListings(){
        try {
            const response = await axios.get('http://localhost:5000/api/listing/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyS2V5IjoiNDg2NTQ1NWYtMjlhMC00YzhmLTk5MzgtOGM0YmFiMjYxZWY2IiwidXNlcklkIjoiNjZmZjhhNWZmZDFmMjMyYmUwOTc1YTY2IiwiaWF0IjoxNzI4OTY1MTAzLCJleHAiOjE3Mjg5Njg3MDN9.go6MrZkOqdoJa0zXYcyBtZs6NAZFWoLwssZKM2qWCg8',
            },
            });
            console.log('Data:', response.data.data.listings);

            setListings(response.data.data.listings);
        } catch (error) {
            console.error('Error fetching listings:', error.response?.data || error.message);
        }
    }

    useEffect(() => {
        getListings()
    }, []);

    const renderTableRows = () => {
        return listings.map((listing, index) => (

            <tr data-mls="SB24152719">
                    
            <td data-label="Listings">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9982 0L27.967 16.8017H43.9939L30.9164 26.6698L35.593 43.9864L21.9982 33.6034L8.40585 43.9864L13.0799 26.6698L0 16.8017H16.0269L21.9982 0Z" fill="#E1E1E1"></path>
                    <path d="M22.0006 14L24.7141 21.6382H32L26.0549 26.1243L28.1809 33.9966L22.0006 29.2764L15.8214 33.9966L17.9463 26.1243L12 21.6382H19.286L22.0006 14Z" fill="#449D44"></path>
                </svg>
            <img src={listing.photoPrimary} className="listing-img" alt=""/>         
            <div className="listing-detail">
                    <h6 className="name-title">{listing.listingAddress}</h6>
                    <p className="address-table">{listing.city}, {listing.state} {listing.zip}</p>
                    <p className="source-mls"><b>Source:</b>{ listing.listingBrokerName}</p>
                    <p className="source-mls"><b>MLS:</b> { listing.mlsNumber}&nbsp;&nbsp;&nbsp;<b>Type:</b> { listing.propertyType}</p>
                    <p className="unit-type"><b>Price:</b> $800,000</p>
                    <div className="view-del-className" id="property_info_btn_SB24152719_1">
                    <div className="view_delete" id="property_infomation_doc_btn_SB24152719_1"><b>Property Information:</b> 
                    {/* <a className="property_file_view" href="" data-mls_no="SB24152719" data-mls_id="1" type="button" target="_blank">View</a>  */}

                    |

                    {/* <a href="" className="property_file_delete" data-mls_no="SB24152719" data-mls_id="1" data-file_name="SB24152719-1-20240814205714.pdf " type="button">Delete</a> */}
                    
                    <span></span>
                    </div>                                
                    </div>
                </div>  
                
                
            </td>
            
            <td data-label="Able to Request">
                <input type="checkbox" className="check-box" name="selected_listing_meta" value="SB24152719_1" checked="" />
            </td>
            
            <td data-label="Dates Available" className="last-col">
                <span className="tooltiptext"></span>
                <ul className="list-unstyled" data-listing_id="789">
                    <div className="oh-date"></div>
                    
                        <div className="oh-date mt-4" data-open_id="1450"> 
                            <div className="oh-date-label">
                                <div className="d-flex">
                                    <label>
                                        <input type="checkbox" name="custom_open_house" className="hide" value="SB24152719,10/12/2024,13:00:00,16:00:00,1450,789"/>
                                        <span className="oh-datetime-text disabled">Saturday, October 12th - 1PM - 4PM</span>
                                    </label>
                                </div>

                            <div className="d-flex claim_btn">
                                <span ><span className="claimed"> Requested by Brittany Avale</span></span>
                                </div>
                                                                                
                            </div>
                            
                            
                        </div>
                                                    
                    <div className="change-data">
                    
                        <input type="text" className="form-control date" placeholder="mm/dd/yy" value="10/12/2024" id="dp1728806322638"/>
                        <input type="text" className="start-time" placeholder="hh:mm" data-qctimepicker-id="qcTimepicker-0" tabindex="-1" /><select id="qcTimepicker-0"><option value="">hh:mm</option><option value="08:00:00">8:00 am</option><option value="09:00:00">9:00 am</option><option value="10:00:00">10:00 am</option><option value="11:00:00">11:00 am</option><option value="12:00:00">12:00 pm</option><option value="13:00:00">1:00 pm</option><option value="14:00:00">2:00 pm</option><option value="15:00:00">3:00 pm</option><option value="16:00:00">4:00 pm</option><option value="17:00:00">5:00 pm</option><option value="18:00:00">6:00 pm</option><option value="19:00:00">7:00 pm</option><option value="20:00:00">8:00 pm</option><option value="21:00:00">9:00 pm</option><option value="22:00:00">10:00 pm</option><option value="23:00:00">11:00 pm</option></select>
                        <input type="text" className="end-time" placeholder="hh:mm" data-qctimepicker-id="qcTimepicker-1" tabindex="-1" /><select id="qcTimepicker-1"><option value="">hh:mm</option><option value="08:00:00">8:00 am</option><option value="09:00:00">9:00 am</option><option value="10:00:00">10:00 am</option><option value="11:00:00">11:00 am</option><option value="12:00:00">12:00 pm</option><option value="13:00:00">1:00 pm</option><option value="14:00:00">2:00 pm</option><option value="15:00:00">3:00 pm</option><option value="16:00:00">4:00 pm</option><option value="17:00:00">5:00 pm</option><option value="18:00:00">6:00 pm</option><option value="19:00:00">7:00 pm</option><option value="20:00:00">8:00 pm</option><option value="21:00:00">9:00 pm</option><option value="22:00:00">10:00 pm</option><option value="23:00:00">11:00 pm</option></select>
                        <div className="d-flex">
                            <a href="#" className="submit-input action-btn">
                                                                                </a>                        
                        </div>
                    </div>
                    
                </ul>
                <p className="add-date"><a href="#"><i className="fa fa-plus-circle"></i> Add Date</a></p>
                    
            </td>
        </tr>   


           
        ));
    }
    



  return (
    <div className="tab-pane active" id="configator_data">
        <div className="row ">
            <div className="col-md-12 justify-content-start">
                <div className="add-mls text-right">
                    <form id="add_mls_form">
                        <input type="text" name="add_mls" placeholder="MLS Number" className="mls-txtbx" autocomplete="off" fdprocessedid="7bu4l9"/>
                        <button type="submit" className="btn btn-success btn-large submit-btn" fdprocessedid="suks31">Add MLS</button>
                    </form>
                </div>
            </div>
            <div className="col-md-12">
                <form id="add_collection" action="post">
                    
                <input type="hidden" name="collection_date_name" value="10/12/2024,10/13/2024"/>    
                    
                <div className="table-scroll">
                    <table className="table table-details">
                <thead>
                    <tr>
                        <th>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0006 0L12.7141 7.6382H20L14.0549 12.1243L16.1809 19.9966L10.0006 15.2764L3.82137 19.9966L5.94625 12.1243L0 7.6382H7.28595L10.0006 0Z" fill="#94949d"></path>
                            </svg>
                            <b>7 Ready to Request Listings</b> <br/>
                            <span>Requires Listing Command <b>ACTIVE/PENDING</b> Status order</span>
                        </th>
                        <th>Able to Request</th>
                        <th>Dates Available</th>
                    </tr>
                </thead>
                <tbody>

                   { renderTableRows() }     
                </tbody>
                
                </table>  
                </div>
                <button type="submit" className="btn btn-success submit-btn">SAVE</button>
            </form>
            </div>
        </div>
        <table className="table table-details add_row">
            <thead>
                <tr >
                    <th>Other Suggested Listings</th>
                    <th>Order Now</th>
                </tr>
            </thead>
            <tbody>
                    
                    <tr data-mls="224004103">
                    
                        <td data-label="Listings">
                        <img src="https://media.crmls.org/mediaz/c8286d83-245a-4790-be9a-7d2e6339639c.jpg" className="listing-img" alt=""/>         
                        <div className="listing-detail">
                                <h6 className="name-title">16606 E Avenue J Avenue</h6>
                                <p className="address-table">Lancaster, CA 93535</p>
                                <p className="source-mls"><b>Source:</b> Exp Realty Of California Inc</p>
                                <p className="source-mls"><b>MLS:</b> 224004103&nbsp;&nbsp;&nbsp;<b>Type:</b> SFR</p>
                                <p className="unit-type"><b>Price:</b> $450,000</p>
                            </div>  
                    
                        </td>
                        <td data-label="Able to Request">
                        <a href="https://app.thegenie.ai/Account/Login?ReturnUrl=/agent/ngpage/listing-command/initiate/88/224004103" target="_blank" className="btn btn-primary">Order Listing Command</a>
                        </td>
                        
                    
                    </tr>                                           
                </tbody>
        </table>
        <div className="edit-date-oh hide edit-oh-template">
            <input type="text" className="form-control date" placeholder="mm/dd/yy"/>
            <input type="text" className="start-time" placeholder="hh:mm" data-qctimepicker-id="qcTimepicker-16" tabindex="-1" />
            <select id="qcTimepicker-16"><option value="">hh:mm</option><option value="08:00:00">8:00 am</option><option value="09:00:00">9:00 am</option><option value="10:00:00">10:00 am</option><option value="11:00:00">11:00 am</option><option value="12:00:00">12:00 pm</option><option value="13:00:00">1:00 pm</option><option value="14:00:00">2:00 pm</option><option value="15:00:00">3:00 pm</option><option value="16:00:00">4:00 pm</option><option value="17:00:00">5:00 pm</option><option value="18:00:00">6:00 pm</option><option value="19:00:00">7:00 pm</option><option value="20:00:00">8:00 pm</option><option value="21:00:00">9:00 pm</option><option value="22:00:00">10:00 pm</option><option value="23:00:00">11:00 pm</option></select>
            <input type="text" className="end-time" placeholder="hh:mm" data-qctimepicker-id="qcTimepicker-14" tabindex="-1"/><select id="qcTimepicker-14"><option value="">hh:mm</option><option value="08:00:00">8:00 am</option><option value="09:00:00">9:00 am</option><option value="10:00:00">10:00 am</option><option value="11:00:00">11:00 am</option><option value="12:00:00">12:00 pm</option><option value="13:00:00">1:00 pm</option><option value="14:00:00">2:00 pm</option><option value="15:00:00">3:00 pm</option><option value="16:00:00">4:00 pm</option><option value="17:00:00">5:00 pm</option><option value="18:00:00">6:00 pm</option><option value="19:00:00">7:00 pm</option><option value="20:00:00">8:00 pm</option><option value="21:00:00">9:00 pm</option><option value="22:00:00">10:00 pm</option><option value="23:00:00">11:00 pm</option></select>
            <div className="d-flex">
                <a href="#" className="edit-submit-btn action-btn mr-2">
                
                </a>

                <a href="#" className="edit-cancel-btn action-btn">
                            </a>                        
            </div>
        </div>
    </div>
  )

}
export default Configurator;