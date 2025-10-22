import React, { useState, useEffect } from "react";

interface LiveItem {
    id: number;
    title: string;
    date: string;
    time: string;
    image: string;
}

const NolLiveSection: React.FC = () => {
    const [lives, setLives] = useState<LiveItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        setLoading(true);
        // fetch("/api/nollive")
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setLives(data);
        //     setLoading(false);
        //   })
        //   .catch(() => setLoading(false));

        setTimeout(() => setLoading(false), 800);
    }, []);

    const prev = () =>
        setStartIndex((prev) => (prev - 1 + lives.length) % lives.length);
    const next = () => setStartIndex((prev) => (prev + 1) % lives.length);

    const visibleLives = lives.slice(startIndex, startIndex + 4);

    return (
        <section className="relative w-full max-w-[1200px] mx-auto mt-20 px-4 gap-5">
            <h2 className="text-2xl font-bold text-center text-sky-600 mb-1">
                NOL live
            </h2>

            <div className="relative flex justify-center gap-4 mt-8">
                {loading ? (
                    <p className="text-gray-400 text-center py-20 text-sm w-full">
                        데이터를 불러오는 중입니다...
                    </p>
                ) : visibleLives.length > 0 ? (
                    visibleLives.map((live) => (
                        <div
                            key={live.id}
                            className="w-[260px] bg-gradient-to-b from-gray-900/80 to-black text-white rounded-2xl overflow-hidden relative"
                        >
                            <img
                                src={live.image}
                                alt={live.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />
                            <div className="relative p-4">
                                <span className="text-xs bg-black/70 px-2 py-0.5 rounded-full">
                                    방송예정
                                </span>
                                <p className="mt-3 font-semibold text-sm line-clamp-2">
                                    {live.title}
                                </p>
                                <p className="mt-6 text-gray-200 text-sm">
                                    {live.date}
                                </p>
                                <p className="text-3xl font-bold mt-1">
                                    {live.time}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center py-20 text-sm w-full">
                        예정된 방송이 없습니다.
                    </p>
                )}
            </div>

            {!loading && lives.length > 0 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 
            w-9 h-9 rounded-full bg-white flex items-center justify-center text-xl text-gray-700"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 
            w-9 h-9 rounded-full bg-white flex items-center justify-center text-xl text-gray-700"
                    >
                        ›
                    </button>
                </>
            )}

            <div className="flex justify-center mt-6">
                <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-800 text-sm">
                    NOL live 바로가기 →
                </button>
            </div>
        </section>
    );
};

export default NolLiveSection;
