import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import TourSection from "./components/TourSection";
import WTripSention from "./components/WTripSention";
import TicketSection from "./components/TicketSection";
import NolLiveSection from "./components/NolLiveSection";

function App() {
    return (
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden border-b-2 border-gray-200">
            <Header />
            <main className="flex-grow">
                <Banner />
                <TourSection />
                <WTripSention />
                <TicketSection />
                <NolLiveSection />
                <Footer />
            </main>
        </div>
    );
}

export default App;
