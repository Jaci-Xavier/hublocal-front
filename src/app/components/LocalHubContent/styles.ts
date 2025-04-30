import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #0485FF;
    position: relative;

    @media (max-width: 1366px) {
    height: 100vh;
  }
  `;

export const ImageContainer = styled.div`
    width: 100%;
    margin-bottom: calc(23vh);

    @media (max-width: 1366px) {
    margin-bottom: calc(20vh);
    width: 100%;    
    }
  `;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
    background-color: #00CC99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    height: 25vh;
    position: absolute;
    bottom: 0;
`;
