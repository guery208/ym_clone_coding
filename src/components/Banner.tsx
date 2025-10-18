import React, { useState } from "react";

const banners = [
    { id: 1, image: "banner_img1.png" },
    { id: 2, image: "banner_img2.png" },
    { id: 3, image: "banner_img3.png" },
    { id: 4, image: "banner_img4.png" },
    { id: 5, image: "banner_img5.png" },
    { id: 6, image: "banner_img6.png" },
];

const Banner: React.FC = () => {
    const [index, setIndex] = useState(0); // 현재 시작 인덱스 (0~5)

    const next = () => setIndex((prev) => (prev + 1) % banners.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + banners.length) % banners.length);

    // 현재 index 기준으로 2장의 배너 보여줌
    const visible = [banners[index], banners[(index + 1) % banners.length]];

    return (
        <div className="relative w-full max-w-[1200px] mx-auto mt-8 rounded-2xl overflow-hidden">
            <div
                className="flex gap-4 transition-transform duration-700 ease-in-out rounded-2xl"
                style={{
                    transform: `translateX(0)`,
                }}
            >
                {visible.map((b) => (
                    <div
                        key={b.id}
                        className="w-1/2 flex-shrink-0 rounded-2xl overflow-hidden"
                    >
                        <img
                            src={b.image}
                            alt={`배너 ${b.id}`}
                            className="w-full h-[300px] object-cover rounded-2xl"
                        />
                    </div>
                ))}
            </div>

            {/* 좌우 버튼 */}
            {/* 왼쪽 버튼 */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 
  w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl"
            >
                ‹
            </button>

            {/* 오른쪽 버튼 */}
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 
  w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl"
            >
                ›
            </button>
        </div>
    );
};

export default Banner;
