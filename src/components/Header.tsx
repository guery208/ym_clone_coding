import { Search, Ticket, User } from "lucide-react";
import React, { useState } from "react";

function Header() {
    const [active, setActive] = useState("홈"); // 선택된 메뉴 상태

    return (
        <header className="flex flex-col w-full border-b-2 border-gray-200 overflow-x-hidden">
            {/* 헤더1 */}
            <div className="w-full flex justify-between items-center px-20 py-3">
                {/* 로고, 검색창, 미니배너 */}
                <div className="flex items-center">
                    {/* 로고 */}
                    <img
                        className="h-[40px] w-[145px] m-1"
                        src="logo.png"
                        alt="logo"
                    />
                    {/* 검색창 */}
                    <div className="flex items-center justify-between w-[300px] h-[45px] border border-gray-300 rounded-3xl m-3 px-3">
                        <input
                            className="w-full text-[12px] font-normal text-gray-600 outline-none focus:outline-none focus:ring-0 placeholder-gray-400"
                            type="text"
                            placeholder="이제 NOL 인터파크로 떠나요!"
                        />
                        <button type="button" className="ml-2">
                            <Search size={18} className="text-gray-500" />
                        </button>
                    </div>

                    {/* 미니배너 */}
                    <div className="relative w-[170px] h-[45px] m-3 overflow-hidden rounded-md">
                        <a
                            href="https://events.interpark.com/exhibition/?exhibitionCode=250122001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 w-full h-full animate-fadeSlide opacity-0"
                        >
                            <img
                                src="mini-banner1.png"
                                alt="배너1"
                                className="w-full h-full object-cover"
                            />
                        </a>

                        <a
                            href="https://events.interpark.com/exhibition/?exhibitionCode=250124002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 w-full h-full animate-fadeSlide opacity-0 [animation-delay:3s]"
                        >
                            <img
                                src="mini-banner2.png"
                                alt="배너2"
                                className="w-full h-full object-cover"
                            />
                        </a>

                        <a
                            href="https://nol.interpark.com/promotion/nol-promotion?mchtNo=INTERPARK_TOUR&mchtDtlNo=00&eventCode=NOI0B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 w-full h-full animate-fadeSlide opacity-0 [animation-delay:6s]"
                        >
                            <img
                                src="mini-banner3.png"
                                alt="배너3"
                                className="w-full h-full object-cover"
                            />
                        </a>
                    </div>
                </div>

                {/* 상단 메뉴 */}
                <div className="flex items-center text-gray-400 text-xs font-bold">
                    <a
                        href="https://nol.yanolja.com/"
                        className="text-gray-450 "
                    >
                        NOL
                    </a>
                    <span className="mx-2 text-gray-300">|</span>
                    <a
                        href="https://triple.guide/intro"
                        className="text-gray-450"
                    >
                        TRIPLE
                    </a>
                    <span className="mx-2 text-gray-300">|</span>
                    <a href="https://triple.global/" className="text-gray-450">
                        interpark Global
                    </a>
                </div>
            </div>

            {/* 헤더2 */}
            <div className="flex justify-between items-center px-20  border-gray-100">
                {/* 홈 / 투어 / 티켓 */}
                <nav className="flex gap-6 text-gray-800 text-[18px] font-bold ">
                    {["홈", "투어", "티켓"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className={`relative pb-2 transition-all duration-200
                                ${
                                    active === item
                                        ? "font-bold text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
                                        : "text-gray-500 hover:text-black"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* 로그인 / 내 예약 */}
                <div className="flex items-center gap-6 text-gray-700 text-[14px]">
                    <button className="flex items-center">
                        <User size={18} className="inline mr-2" />
                        로그인
                    </button>
                    <button className="flex items-center">
                        <Ticket size={18} className="inline mr-2" />내 예약
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
