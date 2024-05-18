import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { BannerSection } from "../BannerSection/BannerSection";
import { ExploreDeals } from "../Explore-deal/Explore-deal";

function Component() {
    return (
        <>
            <Navbar />
            <BannerSection />
            <ExploreDeals />
        </>
    )
}

export { Component }