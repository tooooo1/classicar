import * as Styled from "./styled"

const Main = () => {
    return (
        <>
            <Styled.MainBanner />

            <Styled.Wrapper>
                <Styled.CarTypeTitle>Classic Car Type</Styled.CarTypeTitle>
                <div
                    style={{
                        height: "14vh",
                        borderBottom: "1px solid #000000",
                        width: "100%",
                    }}
                ></div>
            </Styled.Wrapper>

            <Styled.Wrapper>
                <Styled.News id="temp">History</Styled.News>
                <Styled.Img src="img/redcar.png" width={700} />
            </Styled.Wrapper>

            <Styled.MemberBanner />

            <Styled.Wrapper>
                <Styled.News>News</Styled.News>
            </Styled.Wrapper>
        </>
    )
}

export default Main
