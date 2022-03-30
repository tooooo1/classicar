import styled from "styled-components"

export const MainBanner = styled.div`
    display: flex;
    height: 60vh;
    background-color: lightgray;
`

export const Wrapper = styled.div`
    display: flex;
    width: 71%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
`

export const CarTypeTitle = styled.div`
    font-size: 2rem;
    margin-top: 20vh;
    border-bottom: 1px solid #000000;
    padding-bottom: 1.5rem;
    width: 100%;
    margin-bottom: 20vh;
`
export const MemberBanner = styled.div`
    display: flex;
    height: 26vh;
    background-color: black;
`

export const News = styled.div`
    font-size: 2rem;
    margin-top: 20vh;
    padding-bottom: 1.5rem;
    width: 100%;
    margin-bottom: 20vh;

    &#temp {
        margin-bottom: 0;
    }
`
export const Img = styled.img`
    margin-bottom: 20vh;
`
