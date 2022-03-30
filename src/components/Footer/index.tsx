import * as Styled from "./styled"

const Footer = () => {
    return (
        <Styled.NavWrapper>
            <Styled.FooterMenu>
                <div id="title">MODEL</div>
                <div>Chevrolet Bel Air</div>
                <div>Mercedes Benz 200 S</div>
                <div>Volkswagen Beetle</div>
                <div>Classic Car Type 미정</div>
                <div>Classic Car Type 미정</div>
            </Styled.FooterMenu>

            <Styled.FooterMenu>
                <div id="title">SERVICE</div>
                <div>구독서비스</div>
                <div>시승신청</div>
                <div>이벤트</div>
            </Styled.FooterMenu>

            <Styled.FooterMenu>
                <div id="title">COMPANY</div>
                <div>기업정보</div>
                <div>기업소식</div>
                <div>히스토리</div>
                <div>브랜드 소개</div>
            </Styled.FooterMenu>

            <Styled.FooterMenu>
                <div id="title">COMMUNITY</div>
                <div>공지사항</div>
                <div>고객센터</div>
                <div>전시장안내</div>
            </Styled.FooterMenu>
        </Styled.NavWrapper>
    )
}

export default Footer
