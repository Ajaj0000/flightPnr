import React from "react";

function TopDest() {
    return (
        <>
            <section className="container Top-destinations" id="top_destination">
                <div className="top-title">
                    <div className="left">
                        <div className="heading"><b>Top</b> Destinations</div>
                        <p>Our top destinations. See them by Country.</p>
                    </div>
                    <div className="select_tours">
                        <select id="top-destination-selector" className="form-control destination_select">
                            <option value="">SELECT COUNTRY</option>
                            <option value="Egypt">Egypt</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Australia">Australia</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Vietnam">Vietnam</option>
                        </select>
                    </div>
                </div>

                <ul className="dest_list" data-continent="topdestination" id="dest_list">
                    <li>
                        <a href="packages/egypt">
                            <figure><img src="assets/images/home/tours.jpeg" alt="img" /></figure>
                            <div className="content_box">
                                <div className="title"> Address Downtown</div>
                                <div className="inner-text">
                                    <strong>Dubai</strong>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <span>View Details</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="packages/south africa">
                            <figure><img src="assets/images/home/tours.jpeg" alt="img" /></figure>
                            <div className="content_box">
                                <div className="title"> South Africa</div>
                                <div className="inner-text">
                                    <strong>Dubai</strong>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <span>View Details</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="packages/argentina">
                            <figure><img src="assets/images/home/tours.jpeg" alt="img" /></figure>
                            <div className="content_box">
                                <div className="title"> Australia</div>
                                <div className="inner-text">
                                    <strong>Dubai</strong>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <span>View Details</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="packages/vietnam">
                            <figure><img src="assets/images/home/tours.jpeg" alt="img" /></figure>
                            <div className="content_box">
                                <div className="title"> Argentina</div>
                                <div className="inner-text">
                                    <strong>Dubai</strong>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <span>View Details</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="dest_list" data-continent="europe"></ul>
            </section>
        </>
    )
}

export { TopDest }