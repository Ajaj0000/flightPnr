import React from "react";
import { Link } from "react-router-dom";

function TravelBlog() {
    return (
        <>
            <section className="travelBlog">
                <div className="container">
                    <div className="heading">Travel Blog</div>
                    <a href="/home/viewall_blog" className="viewAllBtn">View All Blog</a>
                    <ul className="blogsCards">
                        <li>
                             <Link> {/* href="/blogs/souvenirs" */}
                                <figure>
                                    <img src="assets/images/home/bolg.jpg" alt="img"/>
                                </figure>
                                <span></span>
                                <div className="positionlDiv">
                                    <div className="flxDiv">
                                        <p>
                                            <strong>19 Nov,2022</strong>
                                            <span>May, 2022</span>
                                        </p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                    <div className="bottomDiv">
                                        <span className="bigText">Souvenirs </span>
                                    </div>
                                </div>
                                <span className="defaultText">Art and design blogs</span>
                            </Link>
                        </li>
                        <li>
                            <Link> {/* href="/blogs/fushimi-inari-taisha"*/}
                                <figure>
                                    <img src="assets/images/home/blog1.jpeg" alt="img"/>
                                </figure>
                                <span></span>
                                <div className="positionlDiv">
                                    <div className="flxDiv">
                                        <p>
                                            <strong>19 Nov,2022</strong>
                                            <span>May, 2022</span>
                                        </p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                    <div className="bottomDiv">
                                        <span className="bigText"> Fushimi Inari Taisha </span>
                                    </div>
                                </div>
                                <span className="defaultText">Art and design blogs</span>
                            </Link>
                        </li>
                        <li>
                            <Link> {/*href="/blogs/super-efficient-itinerary"*/}
                                <figure>
                                    <img src="assets/images/home/blog2.jpeg" alt="img"/>
                                </figure>
                                <span></span>
                                <div className="positionlDiv">
                                    <div className="flxDiv">
                                        <p>
                                            <strong>19 Nov,2022</strong>
                                            <span>May, 2022</span>
                                        </p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                    <div className="bottomDiv">
                                        <span className="bigText">Super-Efficient Itinerary</span>
                                    </div>
                                </div>
                                <span className="defaultText">Book and writing blogs</span>
                            </Link>
                        </li>
                        <li>
                            <Link> {/* href="/blogs/travelling-to-japan" */}
                                <figure>
                                    <img src="assets/images/home/blog3.jpg" alt="img"/>
                                </figure>
                                <span></span>
                                <div className="positionlDiv">
                                    <div className="flxDiv">
                                        <p>
                                            <strong>19 Nov,2022</strong>
                                            <span>May, 2022</span>
                                        </p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                    <div className="bottomDiv">
                                        <span className="bigText">Travelling to Japan</span>
                                    </div>
                                </div>
                                <span className="defaultText">Art and design blogs</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
export { TravelBlog }