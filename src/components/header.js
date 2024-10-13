import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="col-row">
                <div className="col col-page-details">

                    <a className="logo" href="https://myneighborhood.re/content"><img src="https://myneighborhood.re/wp-content/themes/stuff-rentals/content-modules/images/thegenie-logo.png"/></a>

                    <div className="page-title">
                       OH Manager                    </div>

                    <div className="btn-group pull-right dropdown-hover-show">
                        <button type="button" className="dropdown-toggle dropdown-link menu-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" fdprocessedid="lg6gc">
                            <i className="fa fa-bars" aria-hidden="true"></i> Menu
                        </button>
                        <ul className="dropdown-menu farmcaster-menu">
                            <li><a href="https://myneighborhood.re/content/marketing-home/">Marketing Home</a></li>
                            <li><a href="https://myneighborhood.re/content/wizard/">Launch Wizard</a></li>
                            <li><a href="https://myneighborhood.re/content/graphics/">Graphics</a></li>
                            <li><a href="https://myneighborhood.re/content/reports/">Reports</a></li>
                            <li><a href="https://myneighborhood.re/content/funnel/">Landing Pages</a></li>
                                                                    <li><a href="https://myneighborhood.re/content/embeds/">Web Embeds</a></li>
                                                                <li><a href="https://myneighborhood.re/content/direct-mail/">Direct Mail</a></li>
                            <li><a href="https://app.thegenie.ai/agent/#/lead-center" target="_blank">Leads</a></li>
                            <li><a href="https://myneighborhood.re/content/media-library/">Media Library</a></li>
                            <li><a href="https://myneighborhood.re/content/open-house/">Open House Manager</a></li>
                            <li><a href="https://myneighborhood.re/content/agent-farming-kit/">Farming Kit Manager</a></li>
                            <li><a href="https://myneighborhood.re/content/settings/">Settings</a></li>
                            <li><a href="https://app.thegenie.ai/agent/">Back to Agent Dashboard</a></li>
                                                            <li><a href="https://myneighborhood.re/content/?u=4865455f-29a0-4c8f-9938-8c4bab261ef6">View As Agent</a></li>
                                                       </ul>
                   </div>

                </div>


                                    <div className="col">&nbsp;</div>
                                <div className="col col-profile-image text-right pull-right">
                    <div className="profile-image" style={styles.userImage}></div>
                    <p className="user-name">Ed Kaminsky</p><p>
                </p></div>
            </div>
    </header>
    )
  }

const styles = {
    header: {
        // backgroundColor: '#282c34',
        background: `linear-gradient(to right, rgb(22 91 147) 0%, rgba(36, 50, 79, 1) 100%)`,
        padding: '10px',
        color: 'white',
        textAlign: 'center'
        
    },
    userImage:{
        backgroundImage:`url('https://imagedelivery.net/C4KZEiOQLExN0SnSaqUP4A/836c3d25-0a4b-4013-f2f2-da20607cf000/public')`,


    }
  };

export default Header;
