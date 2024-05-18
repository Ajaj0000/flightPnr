import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            {/* <!-- start .header-bar --> */}
            <section className="header-bar">
                <div className="container">
                    <div className="top_bar">
                        <Link><img src="assets/images/common/logo.png" alt="img" /></Link>
                        <div className="header-right">
                            <ul className="nav_bar">
                                <li><Link className="active">Flights</Link></li>
                                <li><Link>Hotels</Link></li>
                                <li><Link>Cars</Link></li>
                                <li><Link>Packages</Link></li>
                                <li><Link>Activities</Link></li>
                                <li><Link>Explore</Link></li>
                                <li><Link>My Bookings</Link></li>
                            </ul>
                            <div className="mobile_menu"><img src="assets/images/common/menu.svg" alt="img"/></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end .header-bar --> */}
        </>
    )
}
export { Navbar }