import React, { useState, useEffect } from "react";

interface TicketItem {
    id: number;
    title: string;
    place: string;
    date: string;
    image: string;
    category: string;
}

const TicketSection: React.FC = () => {
    const [tickets, setTickets] = useState<TicketItem[]>([]);
    const [filteredTickets, setFilteredTickets] = useState<TicketItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("뮤지컬");
    const [loading, setLoading] = useState(true);
    const [startIndex, setStartIndex] = useState(0);

    const categories = [
        "뮤지컬",
        "콘서트",
        "스포츠",
        "전시/행사",
        "클래식/무용",
        "아동/가족",
        "연극",
        "레저/캠핑",
    ];

    useEffect(() => {
        setLoading(true);
        // fetch(`/api/tickets?category=${selectedCategory}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setTickets(data);
        //     setLoading(false);
        //   })
        //   .catch(() => setLoading(false));

        setTimeout(() => setLoading(false), 800);
    }, [selectedCategory]);

    useEffect(() => {
        if (tickets.length > 0) {
            setFilteredTickets(
                tickets.filter((t) => t.category === selectedCategory)
            );
            setStartIndex(0);
        }
    }, [selectedCategory, tickets]);

    const prev = () =>
        setStartIndex(
            (prev) =>
                (prev - 1 + filteredTickets.length) % filteredTickets.length
        );
    const next = () =>
        setStartIndex((prev) => (prev + 1) % filteredTickets.length);

    const visibleTickets = filteredTickets.slice(startIndex, startIndex + 4);

    return (
        <section className="relative w-full max-w-[1200px] mx-auto mt-20 px-4">
            <h2 className="text-2xl font-bold text-center">티켓 랭킹</h2>
            <p className="text-gray-500 text-sm text-center mb-6">
                오늘 뭐볼까? 지금 HOT한 공연
            </p>

            <div className="flex justify-center gap-2 mb-8 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-1.5 rounded-full border text-sm transition ${
                            selectedCategory === cat
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="relative flex justify-center gap-4">
                {loading ? (
                    <p className="text-gray-400 text-center py-20 text-sm w-full">
                        데이터를 불러오는 중입니다...
                    </p>
                ) : visibleTickets.length > 0 ? (
                    visibleTickets.map((t, i) => (
                        <div
                            key={t.id}
                            className="w-[260px] bg-white rounded-2xl shadow-sm overflow-hidden"
                        >
                            <div className="relative w-full h-[340px]">
                                <img
                                    src={t.image}
                                    alt={t.title}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute left-3 bottom-3 text-white text-4xl font-bold drop-shadow-lg">
                                    {i + 1}
                                </span>
                            </div>
                            <div className="p-3 text-left text-sm">
                                <p className="font-semibold text-gray-900">
                                    {t.title}
                                </p>
                                <p className="text-gray-500 mt-1">{t.place}</p>
                                <p className="text-gray-400 text-xs mt-1">
                                    {t.date}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center py-20 text-sm w-full">
                        이 카테고리의 공연이 없습니다.
                    </p>
                )}
            </div>

            {!loading && filteredTickets.length > 0 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center text-xl"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center text-xl"
                    >
                        ›
                    </button>
                </>
            )}

            <div className="flex justify-center mt-6">
                <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-800 text-sm">
                    티켓 홈 바로가기 →
                </button>
            </div>
        </section>
    );
};

export default TicketSection;
