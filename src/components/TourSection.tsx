import React, { useState, useEffect } from "react";

interface TourItem {
    id: number;
    tag: string;
    title: string;
    subtitle: string;
    price: string;
    image: string;
    category: string;
}

const TourSection: React.FC = () => {
    const [tours, setTours] = useState<TourItem[]>([]);
    const [filteredTours, setFilteredTours] = useState<TourItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("마감임박");
    const [startIndex, setStartIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const categories = [
        "마감임박",
        "해외패키지",
        "국내숙소",
        "해외숙소",
        "투어/입장권",
    ];

    // ✅ 초기 데이터 불러오기

    // 나중에 여기서 실제 API 호출하면 됨
    // fetch(`/api/tours?category=${selectedCategory}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setTours(data);
    //     setLoading(false);
    //   });

    // ✅ 카테고리 변경 시 데이터 필터링
    useEffect(() => {
        if (tours.length > 0) {
            const filtered = tours.filter(
                (t) => t.category === selectedCategory
            );
            setFilteredTours(filtered);
            setStartIndex(0);
        }
    }, [selectedCategory, tours]);

    const prev = () => {
        setStartIndex((prev) =>
            filteredTours.length > 0
                ? (prev - 1 + filteredTours.length) % filteredTours.length
                : 0
        );
    };

    const next = () => {
        setStartIndex((prev) =>
            filteredTours.length > 0 ? (prev + 1) % filteredTours.length : 0
        );
    };

    const visibleTours = filteredTours.slice(startIndex, startIndex + 3);

    return (
        <section className="relative w-full max-w-[1200px] mx-auto mt-16 px-4">
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-1">투어 특가</h2>
            <p className="text-center text-gray-500 text-sm mb-6">
                마감임박! 금주의 특가 여행 추천
            </p>

            {/* Category Buttons */}
            <div className="flex justify-center gap-2 mb-6 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-1.5 rounded-full border text-sm transition-all duration-200 ${
                            selectedCategory === cat
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="relative flex gap-4 justify-center">
                {loading ? (
                    <p className="text-gray-400 text-center py-20 text-sm">
                        데이터를 불러오는 중입니다...
                    </p>
                ) : visibleTours.length > 0 ? (
                    visibleTours.map((tour) => (
                        <div
                            key={tour.id}
                            className="w-[330px] bg-white rounded-2xl shadow-sm overflow-hidden"
                        >
                            <div className="relative w-full h-[210px]">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute left-3 top-3 bg-blue-600 text-white text-xs px-2.5 py-0.5 rounded">
                                    {tour.tag}
                                </span>
                            </div>
                            <div className="p-3 text-left">
                                <p className="text-blue-700 text-xs font-semibold">
                                    {tour.title}
                                </p>
                                <p className="text-gray-700 text-sm mt-1">
                                    {tour.subtitle}
                                </p>
                                <p className="text-base font-bold mt-1">
                                    {tour.price}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center py-20 text-sm">
                        이 카테고리의 상품이 없습니다.
                    </p>
                )}
            </div>

            {/* Navigation Buttons */}
            {!loading && filteredTours.length > 0 && (
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
                    투어 홈 바로가기 →
                </button>
            </div>
        </section>
    );
};

export default TourSection;
