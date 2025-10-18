import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
    return (
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden border-b-2 border-gray-200">
            <Header />

            <main className="flex-grow">
                <div className="max-w-[1200px] mx-auto py-10 text-center text-gray-600">
                    메인 콘텐츠 영역
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
