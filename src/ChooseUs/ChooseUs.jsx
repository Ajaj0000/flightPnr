import React from "react";
import { Link } from "react-router-dom";

function ChooseUs() {
    return (
        <>
            <section className="chooseUs container">
                <div className="heading">Why Book With Us?</div>
                <ul>
                    <li>
                        <i><img src="assets/images/home/price4.png" alt="img" /></i>
                        <div className="rightTxt">
                            <div className="title">EASY BOOKING</div>
                            <span>Lorem ipsum dolor sit amet consectetur adipiscing.</span>
                        </div>
                    </li>
                    <li className="active">
                        <i><img src="assets/images/home/price5.png" alt="img" /></i>
                        <div className="rightTxt">
                            <div className="title">LOWEST PRICE</div>
                            <span>Lorem ipsum dolor sit amet consectetur adipiscing.</span>
                        </div>
                    </li>
                    <li>
                        <i><img src="assets/images/home/price6.png" alt="img" /></i>
                        <div className="rightTxt">
                            <div className="title">EXCITING DEALS</div>
                            <span>Lorem ipsum dolor sit amet consectetur adipiscing.</span>
                        </div>
                    </li>
                    <li>
                        <i><img src="assets/images/home/price7.png" alt="img" /></i>
                        <div className="rightTxt">
                            <div className="title">24/7 SUPPORT</div>

                            <span>Lorem ipsum dolor sit amet consectetur adipiscing.</span>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="cheap-flites container" id="cheapflightpages">
                <div className="common-heading">Cheap Flights</div>
                <p>Search and compare cheap flights from 1000s of airlines, travel agents and travel sites.</p>
                <ul>
                    <li><Link >Cheap Flights to Toronto </Link></li> {/**href="/pages/Cheap-Flights-to-Toronto" */}
                    <li><Link >Cheap Flight to Dubai</Link></li> {/**href="/pages/Cheap-Flight-to-Dubai" */}
                    <li><Link >Cheap Flight India</Link></li> {/**href="/pages/Cheap-Flight-India" */}
                </ul>
            </section>
        </>
    )
}
export { ChooseUs }