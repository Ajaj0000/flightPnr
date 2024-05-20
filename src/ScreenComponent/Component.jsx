import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { BannerSection } from "../BannerSection/BannerSection";
import { ExploreDeals } from "../Explore-deal/Explore-deal";
import { TopDest } from "../TopDest/Topdestinations";
import { TravelBlog } from "../TravelBlog/TravelBlog";
import { ChooseUs } from "../ChooseUs/ChooseUs";
import { Footer } from "../FooterSection/Footer";

function Component() {
    return (
        <>
            <Navbar />
            <BannerSection />
            <ExploreDeals />
            <TopDest/>
            <TravelBlog/>
            <ChooseUs/>
            <Footer/>
        </>
    )
}

export { Component }