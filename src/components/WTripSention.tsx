import React, { useState, useEffect } from "react";

interface WTripItem {
    id: number;
    tag: string;
    title: string;
    subtitle: string;
    price: string;
    image: string;
}

const WTripSection: React.FC = () => {
    const [trips, setTrips] = useState<WTripItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [startIndex, setStartIndex] = useState(0);

    // ✅ 나중에 실제 API 연동 부분
    useEffect(() => {
        setLoading(true);
        // fetch("/api/wtrip")
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setTrips(data);
        //     setLoading(false);
        //   })
        //   .catch(() => setLoading(false));

        // 현재는 더미 데이터 없음 (API 오면 자동 반영)
        setTimeout(() => setLoading(false), 1000);
    }, []);

    const prev = () => {
        setStartIndex((prev) =>
            trips.length > 0 ? (prev - 1 + trips.length) % trips.length : 0
        );
    };

    const next = () => {
        setStartIndex((prev) =>
            trips.length > 0 ? (prev + 1) % trips.length : 0
        );
    };

    const visibleTrips = trips.slice(startIndex, startIndex + 4);

    return (
        <section className="relative w-full max-w-[1200px] mx-auto mt-20 px-4">
            {/* Title */}
            <div className="text-center mb-2">
                <h2 className="text-2xl font-bold text-sky-500">W트립</h2>
                <p className="text-gray-500 text-sm">
                    누구와 여행 가시나요? 동행자별 맞춤여행
                </p>
            </div>

            {/* Content */}
            <div className="relative flex justify-center gap-4 mt-8">
                {loading ? (
                    <p className="text-gray-400 text-center py-20 text-sm w-full">
                        데이터를 불러오는 중입니다...
                    </p>
                ) : visibleTrips.length > 0 ? (
                    visibleTrips.map((trip) => (
                        <div
                            key={trip.id}
                            className="w-[260px] bg-white rounded-2xl shadow-sm overflow-hidden"
                        >
                            <div className="relative w-full h-[180px]">
                                <img
                                    src={trip.image}
                                    alt={trip.title}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute left-3 top-3 bg-sky-200 text-sky-800 text-xs px-2 py-0.5 rounded-full">
                                    {trip.tag}
                                </span>
                            </div>
                            <div className="p-3 text-left">
                                <p className="text-gray-700 text-sm line-clamp-2">
                                    {trip.title}
                                </p>
                                <p className="text-gray-500 text-xs mt-1">
                                    {trip.subtitle}
                                </p>
                                <p className="text-base font-bold mt-1">
                                    {trip.price}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center py-20 text-sm w-full">
                        표시할 상품이 없습니다.
                    </p>
                )}
            </div>

            {/* Navigation Buttons */}
            {!loading && trips.length > 0 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 
            w-9 h-9 rounded-full bg-white flex items-center justify-center text-xl"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 
            w-9 h-9 rounded-full bg-white flex items-center justify-center text-xl"
                    >
                        ›
                    </button>
                </>
            )}

            {/* More Button */}
            <div className="flex justify-center mt-6">
                <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-800 text-sm">
                    W트립 상품 더보기 →
                </button>
            </div>
        </section>
    );
};

export default WTripSection;
