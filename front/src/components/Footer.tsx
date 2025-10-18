import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-white text-gray-700 text-[10px] border-t border-gray-200">
            {/* 상단 네비 */}
            <div className="border-b border-gray-200">
                <nav className="flex justify-center flex-wrap gap-6 py-3 text-[13px] font-medium text-gray-600">
                    <a href="https://nol-universe.com/">회사소개</a>
                    <a href="https://nol.interpark.com/terms.html#agree">
                        이용약관
                    </a>
                    <a
                        href="https://nol.interpark.com/terms.html#protect_privacy"
                        className="font-bold text-black"
                    >
                        개인정보처리방침
                    </a>
                    <a href="https://nol.interpark.com/terms.html#location_terms">
                        위치기반서비스 이용약관
                    </a>
                    <a href="https://help.interpark.com/tour/terms">여행약관</a>
                    <a href="https://travel.interpark.com/home/customer/board/notice/tour/detail/10638">
                        여행자보험 가입내역
                    </a>
                    <a href="https://tickets.interpark.com/contents/guide/manual">
                        티켓판매안내
                    </a>
                    <a href="https://travel.interpark.com/home/customer/board/notice/tour">
                        공지사항
                    </a>
                    <a href="/partnership">고객센터</a>
                    <a href="/partnership">Language</a>
                </nav>
            </div>

            {/* 메인 정보 영역 */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 py-6 px-4 text-left">
                {/* (주)놀유니버스 */}
                <section>
                    <h2 className="font-bold text-[13px] mb-2">
                        (주)놀유니버스
                    </h2>
                    <p>
                        주소 경기도 성남시 수정구 금토로 70 (금호동, 텐엑스타워)
                    </p>
                    <p>
                        사업자등록번호 824-81-02515
                        <button className="ml-2 text-blue-500 underline">
                            사업자정보확인
                        </button>
                    </p>
                    <p>통신판매업신고번호 2024-성남수정-0912</p>
                    <p>관광사업증 등록번호 : 제2024-000024호</p>
                    <p>호스팅서비스제공자 (주)놀유니버스 | 대표이사 배보찬</p>
                </section>

                {/* 고객센터 */}
                <section>
                    <h2 className="font-bold text-[13px] mb-2">고객센터</h2>
                    <p>
                        <a href="tel:1588-3443" className="hover:underline">
                            투어 1588-3443
                        </a>{" "}
                        |{" "}
                        <a href="tel:1544-1555" className="hover:underline">
                            티켓 1544-1555
                        </a>
                    </p>
                    <p>
                        팩스 02-830-7807 | 이메일{" "}
                        <a
                            href="mailto:help.interpark@nol-universe.com"
                            className="hover:underline"
                        >
                            help.interpark@nol-universe.com
                        </a>
                    </p>
                    <p>해외항공 02-3479-4399 | 국내항공 02-3479-4340</p>
                    <p>
                        <a
                            href="https://help.interpark.com/tour/inquiry"
                            className="text-blue-600 hover:underline"
                        >
                            투어 1:1 문의
                        </a>{" "}
                        |{" "}
                        <a
                            href="https://help.interpark.com/ticket/inquiry"
                            className="text-blue-600 hover:underline"
                        >
                            티켓 1:1 문의
                        </a>
                    </p>
                </section>

                {/* 전자금융거래 */}
                <section>
                    <h2 className="font-bold text-[13px] mb-2">
                        전자금융거래 분쟁처리 담당정보
                    </h2>
                    <p>투어 1588-3443 | 티켓 1544-1555</p>
                    <p>
                        팩스 02-830-8295 | 이메일{" "}
                        <a
                            href="mailto:interpark_ef@nol-universe.com"
                            className="hover:underline"
                        >
                            interpark_ef@nol-universe.com
                        </a>
                    </p>
                    <p>
                        개인정보보호책임자{" "}
                        <a
                            href="mailto:privacy_i@nol-universe.com"
                            className="hover:underline"
                        >
                            privacy_i@nol-universe.com
                        </a>
                    </p>
                </section>
            </div>

            {/* 하단 문구 */}
            <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-[10px] leading-relaxed px-4">
                <p>
                    (주)놀유니버스는 일부 상품의 통신판매중개자로서 통신판매의
                    당사자가 아니므로, 상품의 예약, 이용 및 환불 등 거래와
                    관련된 의무와 책임은 판매자에게 있으며 (주)놀유니버스는 일체
                    책임을 지지 않습니다.
                </p>
                <p className="mt-1">
                    ⓒ Nol Universe Co., Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
