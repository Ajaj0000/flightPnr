import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <section className="footersection">
                <div className="senddealbox container">
                    <div className="left">
                        <div className="heading">Members Save On Private Deals</div>
                        <span>Sign up for access to personalised recommendations &amp; private deals</span>
                    </div>
                    <div className="right">
                        <input type="text" placeholder="Enter Your Email Id.." id="email" />
                        <button className="subsbtn" id="btnsubmitnews">Subscribe</button>
                    </div>
                </div>
                <footer className="footertop container">
                    <ul>
                        <li className="address">
                            <Link href="#">  Admiral Park, Victory Way, Dartford, DA2 6QD</Link>
                            <Link href="#"> www.flightpnr.com.au </Link>
                            <Link href="#">01 2345 0000</Link>
                        </li>
                        <li>
                            <Link >About Us</Link> {/**href="/About_us" */}
                            <Link href="#">Flight</Link>
                            <Link href="#">Packages</Link>
                            <Link >Blogs</Link> {/**href="/Blog" */}
                        </li>
                        <li>
                            <Link href="#">Activities</Link>
                            <Link href="#">Track Your Refunds</Link>
                            <Link href="#">Apply for Refunds</Link>
                            <Link href="#">Payments</Link>
                        </li>
                        <li>
                            <Link href="/Faq">FAQs</Link>
                            <Link href="/privacy_policy">Privacy Policy</Link>
                            <Link href="/terms_condition">Terms and Conditions</Link>
                            <Link href="#">Complaints</Link>
                        </li>
                        <li className="soclink">
                            <Link href="#">
                            </Link>
                            <Link href="#">
                            </Link>
                            <Link href="#">
                            </Link>
                        </li>

                    </ul>
                </footer>
            </section>
            <article className="seotext">
                <div className="container">
                    <div className="heading">Discounts &amp; Savings Claims</div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae aliquid ipsam illum, consequuntur quos animi quod rerum suscipit incidunt dignissimos maxime accusamus ratione? Dolores iure veniam dolor, delectus quia inventore.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae aliquid ipsam illum, </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae aliquid ipsam illum, consequuntur quos animi quod rerum suscipit incidunt dignissimos maxime accusamus ratione? Dolores iure veniam dolor, delectus quia inventore.Lorem ipsum, dolor sit amet suscipit incidunt dignissimos maxime accusamus ratione? Dolores iure veniam dolor, </p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae aliquid ipsam illum, consequuntur quos animi quod rerum suscipit incidunt dignissimos maxime accusamus ratione? Dolores iure veniam dolor, delectus quia inventore.</p>

                </div>
            </article>

            <div className="copyright"><p className="container">Copyright 2024 ©. All Rights Reserved.</p></div>
        </>
    )
}

export { Footer }