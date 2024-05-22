import React, { useEffect, useRef, useState } from "react";
import './BannerSection.css';
import url from "../Service/trawexairportlist.json";
import { useDispatch, useSelector } from "react-redux";
import { addChild, addInfant, ageChild, decrement, increment, selectClass, setArrinal, setDeparture, subChild, subInfant } from "../Store/ReduxSlice";
import { age } from "./childAge";

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

    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const handelSuggestion = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setShow(false)
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handelSuggestion)
        return () => {
            document.removeEventListener("mousedown", handelSuggestion)
        }
    });
    const handelblur = () => {
        setShow(false);
    };

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



    //arrival

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
        // setfindArrivalAirport();
    }, []);

    const handelArrivalData = (e) => {
        const getvalue = e.target.value.toLowerCase();
        setInputArrival(getvalue);
        const result = arrivalAirPort.filter((itm) =>
            itm.City.toLowerCase().includes(getvalue) ||
            itm.AirportName.toLowerCase().includes(getvalue) ||
            itm.AirportCode.toLowerCase().includes(getvalue));
        setfindArrivalAirport(getvalue ? result : arrivalAirPort);
    }



    const suggestionRef = useRef(null)
    const [sideClickOff, setSideClickOff] = useState(false)

    const handelSuggestionBox = (event) => {
        if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
            setSideClickOff(false)
        }
    };
    const handelSuggestionBlur = () => {
        setSideClickOff(false)
    };

    useEffect(() => {
        document.addEventListener("mousedown", handelSuggestionBox)
        return () => {
            document.removeEventListener("mousedown", handelSuggestionBox)
        };
    }, []);


    // travellar
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()


    const travelleRef = useRef(null)
    const [showtraveller, setTraveller] = useState(false)
    const handelShowTraveller = (event) => {
        if (travelleRef.current && !travelleRef.current.contains(event.target)) {
            setTraveller(false)
        }
    }
    console.log(showtraveller, "showtraveller");
    useEffect(() => {
        document.addEventListener("mousedown", handelShowTraveller)
        return () => {
            document.removeEventListener("mousedown", handelShowTraveller)
        }
    })
    // adult
    const handelDecrement = () => {
        dispatch(decrement())
    }
    const handelIncreament = () => {
        dispatch(increment())
    }

    // child
    const handelChildIncrease = () => {
        dispatch(addChild())
    }
    const handelSubChild = () => {
        dispatch(subChild())
    }

    // infant
    const handeaddfant = () => {
        dispatch(addInfant())
    }
    const handelsubInfant = () => {
        dispatch(subInfant())
    }

    console.log(count);


    // child age store

    const handelSelect = (data, index) => {
        dispatch(ageChild({ data, index }));

        console.log(data, 'data', index, 'index');
    }

    // select class

    const handelClassTraveller = (classs) => {
        dispatch(selectClass(classs))
        console.log(classs, "classs");
    };

    // date of arrial and departure 
    const [departure, setdeparture] = useState('');
    const [returnn, setReturnn] = useState('');

    const handelDeparture = (e) => {
        const getDate = e.target.value
        dispatch(setDeparture(getDate))
        setdeparture(getDate)
        if (returnn && new Date(returnn) > new Date(departure)) {
            const datee = new Date(returnn)
            datee.setDate(datee.getDate() + 2)
            setReturnn(datee.toISOString().split('T')[0])
        }
    };
    const handelReturn = (e) => {
        const getDate = e.target.value
        dispatch(setArrinal(getDate));
        setReturnn(getDate);
    };

    const handelDepartureDate = (departureDate) => {
        dispatch(setDeparture(departureDate))
        console.log(departureDate, "departure date");
    };

    const handelArrivalDate = (arrivalDate) => {
        dispatch(setArrinal(arrivalDate))
        console.log(arrivalDate, "arrival Date");
    };

    console.log(count?.departureDate, "departure date");





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
                                <div className="input_box inputfild" ref={inputRef}>
                                    <input type="text" placeholder="Enter Departure Name" onChange={handleDepartureInput} value={getairPortToInput} onFocus={() => { setShow(true) }} />{/* onChange={GetAirPort} value={depDrtureSearchResult}}*/}
                                    <div className="transfer_data"><i className="fa-solid fa-right-left"></i></div>

                                    {
                                        searchAirPort.length > 0 ?
                                            show && (
                                                <div className="list" >
                                                    {
                                                        searchAirPort && searchAirPort.map((itm) => {
                                                            return (
                                                                <>
                                                                    <li className="lii" onClick={() => { setGetAirPortToInput(`${itm.City}`); handelblur() }}>
                                                                        <p>{itm.City}</p>
                                                                        <span>{itm.AirportCode}</span>
                                                                        <h4>{itm.AirportName}</h4>
                                                                    </li>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) :
                                            <p>AirPort Not Available</p>
                                    }
                                </div>


                                <div className="input_box inputfild" ref={suggestionRef}>
                                    <input type="text" placeholder="Enter Arrival" onChange={handelArrivalData} value={inputArrival} onFocus={() => { setSideClickOff(true) }} id="arival" />
                                    {

                                        sideClickOff && (
                                            <div className="list">
                                                {
                                                    findArrvialAirport && findArrvialAirport.map((itm) => {
                                                        return (
                                                            <>
                                                                <li className="lii" onClick={() => { setInputArrival(itm.City); handelSuggestionBlur() }}>{itm.City}</li>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="input_box inputdate">
                                    <input type="date" placeholder="date" value={departure} onChange={handelDeparture} min={new Date().toISOString().split('T')[0]} />
                                </div>

                                <div className="input_box inputdate">
                                    <input type="date" placeholder="date" value={returnn} onChange={handelReturn} min={count?.departureDate || new Date().toISOString().split('T')[0]} />
                                </div>



                                {/* traveler */}



                                <div className="input-group-row in-roost" id="totalflighttravelers" ref={travelleRef} onClick={() => { setTraveller(true) }}>
                                    <label>Passengers</label>
                                    <span className="travel-economy">{count?.adults + count?.child + count?.infant} Traveler</span>

                                    {
                                        showtraveller && (
                                            <div className="popuppaxdetails">
                                                <div className="mainpopupselectroom">
                                                    <div>
                                                        <div className="maindivroomsingle">
                                                            <h4 className="roomnotext"><span>Travelers &amp; className</span><span className="closeroom"></span></h4>
                                                            <div className="roomdata">
                                                                <div className="flexdiv  adulttotal" data-min="1" data-max="6">
                                                                    <label>Adult (12+ yrs)

                                                                    </label>
                                                                    <div className="counter">
                                                                        <div className="minussign" onClick={handelDecrement}>-</div>
                                                                        <label>{count?.adults}</label>
                                                                        <div className="plussign" onClick={handelIncreament}>+</div>
                                                                    </div>
                                                                </div>

                                                                <div className="flexdiv  childrentotal" data-min="0" data-max="3">
                                                                    <label>Children (2-12 yrs)</label>
                                                                    <div className="counter">
                                                                        <div className="minussign" onClick={handelSubChild}>-</div>
                                                                        <label>{count?.child}</label>
                                                                        <div className="plussign" onClick={handelChildIncrease}>+</div>
                                                                    </div>
                                                                </div>

                                                                {
                                                                    Array.from(Array(count?.child)).map((itm, index) => {
                                                                        return (
                                                                            <>
                                                                                <div className="flexdiv flex-col">
                                                                                    <div className="childage" id="childagediv1" style={{ display: "block" }}>
                                                                                        <label>Child {index + 1} age</label>
                                                                                        <div className="counter">
                                                                                            <select id="childage1" onChange={(data) => { handelSelect(data.target.value, index) }}>
                                                                                                {
                                                                                                    age.map((itm, index) => {
                                                                                                        return (
                                                                                                            <>
                                                                                                                <option value={itm.age} >{itm.age}</option>
                                                                                                            </>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                        )
                                                                    })
                                                                }

                                                                {/* {
                                                            child.map((itm , Index) => {
                                                                return (
                                                                    <>
                                                                        <div className="flexdiv flex-col">
                                                                            <div className="childage" id="childagediv1" style={{ display: "block" }}>
                                                                                <label>{itm.name}</label>
                                                                                <div className="counter">
                                                                                    <select id="childage1">
                                                                                        {
                                                                                            age.map((itm) => {
                                                                                                return (
                                                                                                    <>
                                                                                                        <option value={itm.age}>{itm.age}</option>
                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })
                                                        } */}


                                                                <div className="flexdiv infanttotal" data-min="0" data-max="3">
                                                                    <label>Infant (0-2 yrs)</label>
                                                                    <div className="counter">
                                                                        <div className="minussign" onClick={handelsubInfant}>-</div>
                                                                        <label>{count?.infant}</label>
                                                                        <div className="plussign" onClick={handeaddfant}>+</div>
                                                                    </div>
                                                                </div>

                                                                <div className="flexdiv bg">
                                                                    <label>Class</label>
                                                                    <div className="counter">
                                                                        <select id="drpflightclass" className="flightclass" name="cabin" onChange={(e) => { handelClassTraveller(e.target.value) }}>
                                                                            <option value="Economy">Economy</option>
                                                                            <option value="Premium Economy">Premium Economy</option>
                                                                            <option value="Business">Business</option>
                                                                            <option value="First">First</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="flexdiv">
                                                                    <div className="counter" style={{ width: "100%" }}>{/***style="width: 100%;" */}

                                                                        <button type="button" className="btnok" onClick={() => { setTraveller(false) }}>Ok</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>


                                {/* traveller end */}


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