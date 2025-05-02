import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 8vh;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
`;

export const HeaderText = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    color: #000000;

    @media (max-width: 1367px) {
        font-size: 1.6rem;
  }
`;

