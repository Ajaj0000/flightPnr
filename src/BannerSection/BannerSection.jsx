import React, { useEffect, useRef, useState } from "react";
import './BannerSection.css';
import url from "../Service/trawexairportlist.json";

function BannerSection() {

    // const url = require("../Service/trawexairportlist.json")
    // const [departureData, setdepartureData] = useState([])
    // const [depSearch, setdepSearch] = useState([])
    // const [depDrtureSearchResult, setDepartureSearchResult] = useState()


    // const FlightData = async () => {
    //     try {
    //         setdepartureData(url)
    //         setdepSearch(url)
    //     }
    //     catch (e) {
    //         console.error(e, 'error');
    //     }
    // }
    // // console.log(departureData, 'airport')
    // // console.log(depSearch, 'filter');

    // const GetAirPort = (e) => {
    //     const getvalue = e.target.value;
    //     setDepartureSearchResult(getvalue)
    //     const getData = departureData.filter((itm) => itm.City.toLowerCase().includes(getvalue))
    //     setdepSearch(getvalue ? getData : departureData)
    // }

    // useEffect(() => {
    //     FlightData();
    // }, [])

    const [airPorts, setAirPorts] = useState([]);
    const [searchAirPort, setSearchAirport] = useState([]);
    const [getairPortToInput, setGetAirPortToInput] = useState();
    const inputRef = useRef();

    const [show, setShow] = useState(false);
    const handelshow = () => {
        setShow(true);
    };
    const handelblur = () => {
        setShow(false);
    };

    useEffect(() => {
        const flightData = async () => {
            try {
                setAirPorts(url)
                setSearchAirport(url)
            }
            catch (e) {
                console.error(e, 'error');
            }
        }
        flightData();
        // setSearchAirport()
    }, []);

    const handleDepartureInput = (e) => {
        const getValue = e.target.value.toLowerCase()
        setGetAirPortToInput(getValue)
        const result = airPorts.filter((item) => item.City.toLowerCase().includes(getValue) || item.Country.toLowerCase().includes(getValue) || item.AirportName.toLowerCase().includes(getValue) || item.AirportCode.toLowerCase().includes(getValue))
        setSearchAirport(getValue ? result : airPorts);
    };
    console.log('airports', airPorts, 'searchairport', searchAirPort);
    // const resultentAirport = (e) => {
    //     const getvalue = e.target.value;
    //     const result = airPorts.filter((itm) => itm.City.toLowerCase().includes(getvalue) || itm.AirportName.toLowerCase().includes(getvalue));
    //     console.log(result, 'result');
    //     setSearchAirport(result ? result : airPorts);
    //     setAirPorts(result ? result : airPorts)
    //     setGetAirPortToInput(getvalue);
    //     console.log(getairPortToInput, 'getairPortToInput');
    //     console.log(airPorts,'airports');
    //     console.log(searchAirPort,'searchairport');
    // }



    {/*arrival*/ }

    const [arrivalAirPort, setArrivalAirPort] = useState([]);
    const [findArrvialAirport, setfindArrivalAirport] = useState([])
    const [inputArrival, setInputArrival] = useState()
    useEffect(() => {
        const FetchAirport = async () => {
            try {
                setArrivalAirPort(url);
                setfindArrivalAirport(url);
            } catch (error) {
                console.log(error, 'arrival data not fetch')
            }
        };
        FetchAirport();
        setfindArrivalAirport()
    }, []);
    const handelArrivalData = (e) => {
        const getvalue = e.target.value.toLowerCase();
        setInputArrival(getvalue);
        const result = arrivalAirPort.filter((itm) =>
            itm.City.toLowerCase().includes(getvalue) ||
            itm.AirportName.toLowerCase().includes(getvalue) ||
            itm.AirportCode.toLowerCase().includes(getvalue));
        setfindArrivalAirport(getvalue ? result : arrivalAirPort);
        // console.log(result);
        // setShow()
    }
    // console.log(arrivalAirPort, 'arrival');

    return (
        <>
            <section className="banner-section">
                <figure><img src="assets/images/home/banner.png" alt="img" /></figure>
                <div className="container">
                    <div className="banner_content">
                        <div className="heading">Compare and Book Cheap Flights on Over <b>500 Airlines</b></div>
                        <ul className="tabs">
                            <li className="tab-link current" data-tab="tab-1"> <i className="fa-solid fa-plane"></i> Flights</li>
                            <li className="tab-link" data-tab="tab-2"> <i className="fa-solid fa-umbrella-beach"></i> Flight + Hotel</li>
                            <li className="tab-link" data-tab="tab-3"> <i className="fa-solid fa-bed"></i> Hotels</li>
                        </ul>

                        <div id="tab-1" className="tab-content current">

                            <div className="radio_buttons">

                                <div className="button_row">
                                    <input type="radio" id="test1" name="radio-group" checked />
                                    <label for="test1">Round Trip</label>
                                </div>

                                <div className="button_row">
                                    <input type="radio" id="test2" name="radio-group" />
                                    <label for="test2">One Way</label>
                                </div>

                                <div className="button_row">
                                    <input type="radio" id="test3" name="radio-group" />
                                    <label for="test3">Multi-City</label>
                                </div>

                            </div>

                            <div className="searchbox_content">
                                <div className="input_box inputfild">
                                    <input type="text" ref={inputRef} placeholder="Enter Departure Name" onChange={handleDepartureInput} value={getairPortToInput} onFocus={handelshow} />{/* onChange={GetAirPort} value={depDrtureSearchResult}}*/}
                                    <div className="transfer_data"><i className="fa-solid fa-right-left"></i></div>

                                    {
                                        show && (
                                            <div className="list">
                                                {
                                                    searchAirPort &&
                                                    searchAirPort.map((itm) => {
                                                        return (
                                                            <>
                                                                <li className="lii" onClick={() => { setGetAirPortToInput(`${itm.City} | ${itm.AirportName} | ${itm.Country}`); handelblur() }}>
                                                                    <p>{itm.City}</p>
                                                                    <span>{itm.AirportCode}</span>
                                                                    <h4>{itm.AirportName}</h4>
                                                                </li>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                    {/* {depSearch &&
                                        depSearch.map((itm) => {
                                            return (
                                                <>
                                                    <li onClick={setDepartureSearchResult(itm.AirportName)}>{itm.AirportName}</li>
                                                </>
                                            )
                                        })


                                    } */}
                                </div>


                                <div className="input_box inputfild">
                                    <input type="text" placeholder="Enter Arrival" onChange={handelArrivalData} value={inputArrival} />
                                    {<div className="list">
                                        {
                                            findArrvialAirport && findArrvialAirport.map((itm) => {
                                                return (
                                                    <>
                                                        <li className="lii" onClick={() => { setInputArrival(itm.City) }}>{itm.City}</li>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>}
                                </div>

                                <div className="input_box inputdate">
                                    <input type="text" placeholder="date" />
                                </div>

                                <div className="input_box inputdate">
                                    <input type="text" placeholder="date" />
                                </div>

                                <div className="input_box traveler">
                                    <small>Traveler</small>
                                </div>

                                <button className="search_button"> search flights </button>

                            </div>

                            <div className="direct_flight_row">
                                <div className="search_flight">
                                    <input type="text" placeholder="Search Preferred Airline" />
                                </div>
                                <div className="return_city">
                                    <label><input type="checkbox" />Return to or from another city/airport?</label>
                                </div>
                                <div className="return_city">
                                    <label><input type="checkbox" />Direct Flights</label>
                                </div>
                            </div>

                        </div>
                        <div id="tab-2" className="tab-content">

                            <div className="radio_buttons">

                                <div className="button_row">
                                    <input type="radio" id="test6" name="radio-group" checked />
                                    <label for="test6">Flight + Hotel</label>
                                </div>

                                <div className="button_row">
                                    <input type="radio" id="test5" name="radio-group" />
                                    <label for="test5">Hotel + Car</label>
                                </div>

                            </div>

                            <div className="searchbox_content">
                                <div className="input_box hotelfild">
                                    <span>del</span>
                                    <input type="text" placeholder="New Delhi IGI, India" />
                                    <div className="transfer_data"><i className="fa-solid fa-right-left"></i></div>
                                </div>

                                <div className="input_box hotelfild">
                                    <span>dxb</span>
                                    <input type="text" placeholder="New Delhi IGI, India" />
                                </div>

                                <div className="input_box inputdate flighthotel">
                                    <span>depart</span>
                                    <input type="text" placeholder="date" />
                                </div>

                                <div className="input_box inputdate flighthotel">
                                    <span>return</span>
                                    <input type="text" placeholder="date" />
                                </div>

                                <div className="input_box room_travelers">
                                    <div className="room_select">
                                        <span>1</span>
                                        <small>Room</small>
                                    </div>
                                    <div className="travel_select">
                                        <span>5</span>
                                        <small>Travelers</small>
                                    </div>
                                </div>

                                <button className="search_button"> search flights </button>

                            </div>

                            <div className="direct_flight_row">
                                <div className="search_flight">
                                    <input type="text" placeholder="Search Preferred Airline" />
                                </div>
                                <div className="return_city">
                                    <label><input type="checkbox" />I only need this hotel for part of my trip</label>
                                </div>
                                <div className="return_city">
                                    <label><input type="checkbox" />Homes & Apartments</label>
                                </div>
                            </div>

                        </div>
                        <div id="tab-3" className="tab-content">

                            <div className="searchbox_content">
                                <div className="input_box fullrow">
                                    <span>del</span>
                                    <input type="text" placeholder="New Delhi IGI, India" />
                                </div>

                                <div className="input_box inputdate flighthotel">
                                    <span>depart</span>
                                    <input type="text" placeholder="date" />
                                </div>

                                <div className="input_box inputdate flighthotel">
                                    <span>return</span>
                                    <input type="text" placeholder="date" />
                                </div>

                                <div className="input_box room_travelers">
                                    <div className="room_select">
                                        <span>1</span>
                                        <small>Room</small>
                                    </div>
                                    <div className="travel_select">
                                        <span>5</span>
                                        <small>Travelers</small>
                                    </div>
                                </div>

                                <button className="search_button"> search flights </button>

                            </div>

                            <div className="direct_flight_row">
                                <div className="search_flight">
                                    <input type="text" placeholder="Hote Name" />
                                </div>
                                <div className="return_city">
                                    <label><input type="checkbox" />Add a Car</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { BannerSection }