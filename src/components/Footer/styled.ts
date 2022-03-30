import styled from "styled-components"

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 40vh;
    margin: 0 auto;
    background-color: black;
`

export const FooterMenu = styled.div`
    color: #e0e0e0;
    display: flex;
    flex-direction: column;

    & div {
        margin: 8px 0;
        font-size: 0.8rem;
    }

    #title {
        margin-top: 8vh;
        margin-bottom: 4vh;
        font-size: 1.4rem;
    }
`
