import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <main style={styles.mainContent}>
        <section className="command">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>LISTING COMMAND</h3>
                        <h1>Open House Mastery System</h1>
                    </div>
                </div>
                <div className="row select-series">
                    <div className="col-xs-4 col-sm-5 col-md-5 select-series-col">
                        <div className="number text-right">
                            <span className="number-series">1</span>
                            <span className="series">Series</span>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-4 col-md-3">
                        <input id="collectionid_input" type="hidden" name="collection-id"/>
                        <input id="call_ajax_claim" type="hidden" value = "1"/>
                        <input id="call_ajax_kit" type="hidden" value = "1"/>
                        <input id="call_ajax_report" type="hidden" value = "1"/>
                        <select id="getSeriesById" className="date-box getSeriesById">
                            
                                <option value="MzMyOTUxOTA" selected>12th-13th October 2024
                                </option>
                            
                                <option value="MzMyMDUyMDM" >05th-06th October 2024
                                </option>
                            
                                <option value="MzE4NTUzOTg" >28th-29th September 2024
                                </option>
                            
                                <option value="MzE3NjU0MTE" >21st-22nd September 2024
                                </option>
                            
                                <option value="MzE2NzU0MjQ" >14th-15th September 2024
                                </option>
                            
                                <option value="MzE1ODU0Mzc" >07th-08th September 2024
                                </option>
                            
                                <option value="MzE0OTU0NTA" >31st-01st August 2024
                                </option>
                            
                                <option value="MzEzMTU0NzY" >24th-25th August 2024
                                </option>
                            
                                <option value="MzE0MDU0NjM" >22nd-23rd August 2024
                                </option>
                            
                                <option value="MzEyMjU0ODk" >17th-18th August 2024
                                </option>
                            
                                <option value="MzExMzU1MDI" >10th-11th August 2024
                                </option>
                            
                                <option value="MzEwNDU1MTU" >03rd-04th August 2024
                                </option>
                            
                                <option value="MzA5NTU1Mjg" >27th-28th July 2024
                                </option>
                            
                                <option value="MzA4NjU1NDE" >20th-21st July 2024
                                </option>
                            
                                <option value="MzA2ODU1Njc" >13th-14th July 2024
                                </option>
                            
                                <option value="MzA1OTU1ODA" >06th-07th July 2024
                                </option>
                            
                                <option value="MzA1MDU1OTM" >29th-30th June 2024
                                </option>
                            
                                <option value="MzA0MTU2MDY" >22nd-23rd June 2024
                                </option>
                            
                                <option value="MzAyMzU2MzI" >15th-16th June 2024
                                </option>
                            
                                <option value="MzAxNDU2NDU" >08th-09th June 2024
                                </option>
                            
                                <option value="MzAwNTU2NTg" >01st-02nd June 2024
                                </option>
                            
                                <option value="Mjk5NjU2NzE" >25th-26th May 2024
                                </option>
                            
                                <option value="Mjk4NzU2ODQ" >18th-19th May 2024
                                </option>
                            
                                <option value="Mjk2OTU3MTA" >11th-12th May 2024
                                </option>
                            
                                <option value="Mjk2MDU3MjM" >04th-05th May 2024
                                </option>
                            
                                <option value="Mjk0MjU3NDk" >27th-28th April 2024
                                </option>
                            
                                <option value="MjkzMzU3NjI" >20th-21st April 2024
                                </option>
                            
                                <option value="MjkyNDU3NzU" >13th-14th April 2024
                                </option>
                            
                                <option value="MjkwNjU4MDE" >06th-07th April 2024
                                </option>
                            
                                <option value="Mjg5NzU4MTQ" >30th-31st March 2024
                                </option>
                            
                                <option value="Mjg3MDU4NTM" >23rd-24th March 2024
                                </option>
                            
                                <option value="Mjg2MTU4NjY" >16th-17th March 2024
                                </option>
                            
                                <option value="Mjg1MjU4Nzk" >09th-10th March 2024
                                </option>
                            
                                <option value="Mjg0MzU4OTI" >02nd-03rd March 2024
                                </option>
                            
                                <option value="MjgzNDU5MDU" >24th-25th February 2024
                                </option>
                            
                                <option value="MjgyNTU5MTg" >17th-18th February 2024
                                </option>
                            
                                <option value="MjgwNzU5NDQ" >10th-11th February 2024
                                </option>
                            
                                <option value="Mjc4OTU5NzA" >03rd-04th February 2024
                                </option>
                            
                                <option value="Mjc4MDU5ODM" >27th-28th January 2024
                                </option>
                            
                                <option value="Mjc3MTU5OTY" >20th-21st January 2024
                                </option>
                            
                                <option value="Mjc2MjYwMDk" >13th-14th January 2024
                                </option>
                            
                                <option value="Mjc1MzYwMjI" >06th-07th January 2024
                                </option>
                            
                                <option value="Mjc0NDYwMzU" >30th-31st December 2023
                                </option>
                            
                                <option value="MjczNTYwNDg" >16th-17th December 2023
                                </option>
                            
                                <option value="MjcyNjYwNjE" >09th-10th December 2023
                                </option>
                            
                                <option value="MjY5OTYxMDA" >02nd-03rd December 2023
                                </option>
                            
                                <option value="MjY5MDYxMTM" >25th-26th November 2023
                                </option>
                            
                                <option value="MjY4MTYxMjY" >18th-19th November 2023
                                </option>
                            
                                <option value="MjY3MjYxMzk" >11th-12th November 2023
                                </option>
                            
                                <option value="MjY2MzYxNTI" >04th-05th November 2023
                                </option>
                            
                                <option value="MjY1NDYxNjU" >28th-29th October 2023
                                </option>
                            
                                <option value="MjY0NTYxNzg" >21st-22nd October 2023
                                </option>
                            
                                <option value="MjYzNjYxOTE" >14th-15th October 2023
                                </option>
                            
                                <option value="MjYyNzYyMDQ" >07th-08th October 2023
                                </option>
                            
                                <option value="MjYwOTYyMzA" >30th-01st September 2023
                                </option>
                            
                                <option value="MjU5MTYyNTY" >23rd-24th September 2023
                                </option>
                            
                                <option value="MjU4MjYyNjk" >16th-17th September 2023
                                </option>
                            
                                <option value="MjU3MzYyODI" >09th-10th September 2023
                                </option>
                            
                                <option value="MjU2NDYyOTU" >02nd-03rd September 2023
                                </option>
                            
                                <option value="MjU1NTYzMDg" >26th-27th August 2023
                                </option>
                            
                                <option value="MjU0NjYzMjE" >19th-20th August 2023
                                </option>
                            
                                <option value="MjUzNzYzMzQ" >12th-13th August 2023
                                </option>
                            
                                <option value="MjUxOTYzNjA" >05th-06th August 2023
                                </option>
                            
                                <option value="MjUxMDYzNzM" >29th-30th July 2023
                                </option>
                            
                                <option value="MjQ5MjYzOTk" >22nd-23rd July 2023
                                </option>
                            
                                <option value="MjQ4MzY0MTI" >15th-16th July 2023
                                </option>
                            
                                <option value="MjQ3NDY0MjU" >08th-09th July 2023
                                </option>
                            
                                <option value="MjQ2NTY0Mzg" >01st-02nd July 2023
                                </option>
                            
                                <option value="MjQ1NjY0NTE" >24th-25th June 2023
                                </option>
                            
                                <option value="MjQ0NzY0NjQ" >17th-18th June 2023
                                </option>
                            
                                <option value="MjQzODY0Nzc" >09th-11th June 2023
                                </option>
                            
                                <option value="MjQyOTY0OTA" >03rd-04th June 2023
                                </option>
                            
                                <option value="MjQyMDY1MDM" >27th-28th May 2023
                                </option>
                            
                                <option value="MjQxMTY1MTY" >19th-21st May 2023
                                </option>
                            
                                <option value="MjQwMjY1Mjk" >13th-14th May 2023
                                </option>
                            
                                <option value="MjM5MzY1NDI" >06th-07th May 2023
                                </option>
                            
                                <option value="MjM4NDY1NTU" >29th-30th April 2023
                                </option>
                            
                                <option value="MjM3NTY1Njg" >22nd-23rd April 2023
                                </option>
                            
                                <option value="MjM1NzY1OTQ" >15th-16th April 2023
                                </option>
                            
                                <option value="MjMzOTY2MjA" >08th-09th April 2023
                                </option>
                            
                                <option value="MjMzMDY2MzM" >01st-02nd April 2023
                                </option>
                            
                                <option value="MjMyMTY2NDY" >25th-26th March 2023
                                </option>
                            
                                <option value="MjMxMjY2NTk" >21st March 2023
                                </option>
                            
                                <option value="MjMwMzY2NzI" >18th-19th March 2023
                                </option>
                            
                                <option value="MjI4NTY2OTg" >11th-12th March 2023
                                </option>
                            
                                <option value="MjI3NjY3MTE" >07th March 2023
                                </option>
                            
                                <option value="MjI2NzY3MjQ" >04th-05th March 2023
                                </option>
                            
                                <option value="MjI1ODY3Mzc" >25th-26th February 2023
                                </option>
                            
                                <option value="MjI0MDY3NjM" >18th-19th February 2023
                                </option>
                            
                                <option value="MjI0OTY3NTA" >17th February 2023
                                </option>
                            
                                <option value="MjIzMTY3NzY" >11th-12th February 2023
                                </option>
                            
                                <option value="MjIxMzY4MDI" >04th-05th February 2023
                                </option>
                            
                                <option value="MjIyMjY3ODk" >03rd February 2023
                                </option>
                            
                                <option value="MjIwNDY4MTU" >28th-29th January 2023
                                </option>
                            
                                <option value="MjE5NTY4Mjg" >21st-22nd January 2023
                                </option>
                            
                                <option value="MjE3NzY4NTQ" >14th-15th January 2023
                                </option>
                            
                                <option value="MjE2ODY4Njc" >12th January 2023
                                </option>
                            
                                <option value="MjE1OTY4ODA" >07th-08th January 2023
                                </option>
                            
                                <option value="MjE1MDY4OTM" >17th-18th December 2022
                                </option>
                            
                                <option value="MjE0MTY5MDY" >14th December 2022
                                </option>
                            
                                <option value="MjA5NjY5NzE" >10th-11th December 2022
                                </option>
                            
                                <option value="MjExNDY5NDU" >09th December 2022
                                </option>
                            
                                <option value="MjA4NzY5ODQ" >03rd-04th December 2022
                                </option>
                            
                                <option value="MjA2MDcwMjM" >26th-27th November 2022
                                </option>
                            
                                <option value="MTk1MjcxNzk" >19th-20th November 2022
                                </option>
                            
                                <option value="MTk0MzcxOTI" >12th-13th November 2022
                                </option>
                            
                                <option value="MTYxOTc2NjA" >05th-06th November 2022
                                </option>
                            
                                <option value="MTU1Njc3NTE" >29th-30th October 2022
                                </option>
                            
                                <option value="MTU0Nzc3NjQ" >22nd-23rd October 2022
                                </option>
                            
                                <option value="MTQ0ODc5MDc" >01st-02nd October 2022
                                </option>
                            
                                <option value="MTQzMDc5MzM" >24th-25th September 2022
                                </option>
                            
                                <option value="MTQxMjc5NTk" >17th-18th September 2022
                                </option>
                                            </select>
                        <a href="javascript:void(0)" className="add-series" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false">Add new Series</a>
                    </div>
                    <div className=" col-xs-0 col-sm-3 col-md-4">

                    </div>
                </div>
            </div>
        </section>
        <section className="tabs-area">
	<div className="container">
		<div className="row">
			<div className="col-sm-12">
				<div className="tabbable">
					{/* <!-- Only required for left/right tabs --> */}
					<ul className="nav nav-tabs">
						<li className="active"><a href="#configator_data" id="configator" data-toggle="tab"><span className="number-tab">2</span>Configurator</a></li>
						<li><a href="#claims_data" id="claims" data-toggle="tab"><span className="number-tab">3</span>Requests</a></li>
						
						
						<li><a href="#kit"  id="kits" data-toggle="tab"><span className="number-tab">4</span>Kits</a></li>
						
						<li><a href="#report" className="main_report" id="reports" data-toggle="tab"><span className="number-tab">5</span>Reports</a></li>
					   
					  
					</ul>

                    <div className="tab-content hidden_owerflow">
						<div className="tab-pane active" id="configator_data">


{/* <link rel="stylesheet" href="https://myneighborhood.re/wp-content/themes/stuff-rentals/assets/css/open-house-edit-collection.css?v=1728806327"> */}
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
                           <span>Requires Listing Command <b>ACTIVE/PENDING</b> Status order</span></th>
                           
                           
                                <th>
                                                                    Able to Request
                                                                </th>
                            
                           <th>Dates Available</th>
                       </tr>
                   </thead>
                    <tbody>

                        <tr data-mls="SB24152719">
                          
                            <td data-label="Listings">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9982 0L27.967 16.8017H43.9939L30.9164 26.6698L35.593 43.9864L21.9982 33.6034L8.40585 43.9864L13.0799 26.6698L0 16.8017H16.0269L21.9982 0Z" fill="#E1E1E1"></path>
                                    <path d="M22.0006 14L24.7141 21.6382H32L26.0549 26.1243L28.1809 33.9966L22.0006 29.2764L15.8214 33.9966L17.9463 26.1243L12 21.6382H19.286L22.0006 14Z" fill="#449D44"></path>
                                </svg>
                               <img src="https://api-trestle.corelogic.com/trestle/Media/CRMLS/Property/PHOTO-Jpeg/1078858205/1/Mjk5Ny8xODY1LzIw/MjAvOTA5NS8xNzI4NDgwMDM0/v2O2cu-uSCO45RrnmIUpLeNpYUeSeJg4ocqqbel1tnk" className="listing-img" alt=""/>         
                               <div className="listing-detail">
                                    <h6 className="name-title">1108 Camino Real</h6>
                                    <p className="address-table">Redondo Beach, CA 90277</p>
                                    <p className="source-mls"><b>Source:</b> Exp Realty Of California, Inc</p>
                                    <p className="source-mls"><b>MLS:</b> SB24152719&nbsp;&nbsp;&nbsp;<b>Type:</b> Condo</p>
                                    <p className="unit-type"><b>Price:</b> $800,000</p>
                                     <div className="view-del-className" id="property_info_btn_SB24152719_1">
                                    <div className="view_delete" id="property_infomation_doc_btn_SB24152719_1"><b>Property Information:</b> <a className="property_file_view" href="https://myneighborhood.re/wp-content/uploads/property-information/SB24152719-1-20240814205714.pdf" data-mls_no="SB24152719" data-mls_id="1" type="button" target="_blank">View</a> |

                                    <a href="javascript:void(0)" className="property_file_delete" data-mls_no="SB24152719" data-mls_id="1" data-file_name="SB24152719-1-20240814205714.pdf " type="button">Delete</a><span></span>
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
                                                                      
                                    <div className="change-data hide">
                                       
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
                    </tbody>
                   
                </table>  
                </div>
                {/* <button type="submit" className="btn btn-success submit-btn">SAVE</button> */}
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
   
{/* <!-- template edit date starts--> */}
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
{/* <!-- template edit date ends -->
<!-- Error modal Start-->
<!-- Modal --> */}
  <div className="modal fade" id="error-modal" role="dialog" >
    <div className="modal-dialog">
    
      {/* <!-- Modal content--> */}
      <div className="modal-content">
        <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal">×</button>
            <p className="error-msg"></p>
            <button className="btn btn-primary btn-small" data-dismiss="modal">OK</button>
        </div>
      </div>
      
    </div>
  </div>


</div>
					
						
					</div>
					<div className="tab-content hidden_owerflow">
						<div className="tab-pane active" id="configator_data">

						
							<div className="shadow_div">
	<div className="row" id="hide-table">
		<div className="col-md-12">
			<input type="hidden" name="collecformtion_date_name" value="" />

			<div className="table-scroll">
				<table className="table table-details report-page-table kit-section-table">
					<thead>
						<tr>
							<th></th>
							<th></th>
							<th ></th>
						</tr>
					</thead>
					<tbody>
						<tr data-mls_number="" data-mls_id="" data-property_type_id="" data-open_house="" data-open-house-date="">
							<td data-label="Listings">
								{/* <!-- <div className="open-house-date-div open-house-date-skeleton-configator">
								</div> --> */}
								<div className="report-page-listing">
									<div className="photo photo-skeleton photo-skeleton-claim"></div>
									<div className="listing-detail listing-detail-skeleton mt-2">
										<p className="unit-type unit-type-skeleton unit-type-skeleton-request"></p>
										<p className="unit-type unit-type-skeleton"></p>
										<p className="unit-type unit-type-skeleton"></p>
										<p className="unit-type unit-type-skeleton"></p>
										<p className="unit-type unit-type-skeleton"></p>
									</div>
								</div>

							</td>
							<td data-label="" className="btntab "> </td>
							<td data-label="" className="detail-section-skeleton">
								<div className="deatil-section deatil-section-skeleton-box" >
									<div className="agent-details agent-details-skeleton">
										<p className="text-shadow-loader text-shadow-loader-configator text-shadow-loader-configator-first">
										</p>
										<p className="text-shadow-loader text-shadow-loader-configator">
										</p>
										<p className="text-shadow-loader text-shadow-loader-configator">
										</p>
									</div>
								</div>

							</td>
							

						</tr>

						<tr data-mls_number="" data-mls_id="" className="second-tr-backgroun" data-property_type_id="" data-open_house="" data-open-house-date="">
							<td data-label="Listings">
								{/* <!-- <div className="open-house-date-div open-house-date-skeleton-configator">
								</div> --> */}
								<div className="report-page-listing" >
									<div className="photo photo-skeleton photo-skeleton-claim"></div>
									<div className="listing-detail listing-detail-skeleton mt-2">
										<p className="unit-type unit-type-skeleton unit-type-skeleton-request"></p>
										<p className="unit-type unit-type-skeleton"></p>
										<p className="unit-type unit-type-skeleton"></p>
										<p className="unit-type unit-type-skeleton"></p>
										<p className="unit-type unit-type-skeleton"></p>
									</div>
								</div>

							</td> 
							<td data-label="" className="btntab "> </td>
							<td data-label="" className="detail-section-skeleton">
								<div className="deatil-section deatil-section-skeleton-box" >
									<div className="agent-details agent-details-skeleton">
										<p className="text-shadow-loader text-shadow-loader-configator text-shadow-loader-configator-first">
										</p>
										<p className="text-shadow-loader text-shadow-loader-configator">
										</p>
										<p className="text-shadow-loader text-shadow-loader-configator">
										</p>
									</div>
								</div>

							</td>
							

						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>							


						</div>
						
						
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </main>
      <Footer />
    </div>
    </>
  );
}

const styles = {
  mainContent: {
    minHeight: '80vh', 
    padding: '20px',
    textAlign: 'center',
  },
};

export default App;

