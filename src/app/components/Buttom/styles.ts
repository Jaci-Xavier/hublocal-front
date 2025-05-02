import styled from "styled-components";

interface ButtonProps {
    padding?: string;
    width?: string;
}

export const ButtonContainer = styled.div<ButtonProps>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: ${({ width }) => width || '100%'};
    font-size: 16px;
    font-weight: 500;
    padding-inline: ${({ padding }) => padding || '0'};

    @media (max-width: 1367px) {
    padding-inline: 8.8rem;
  }
`;

interface StyledButtonProps {
    color?: string;
}

export const Button = styled.button<StyledButtonProps>`
    background-color: ${({ color }) => color};
    color: #fff;
    border: none;
    height: 3.75rem;
    width: 100%;
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: 700;
    transition: background-color 0.3s ease;
    cursor: pointer;

    @media (max-width: 1367px) {
    height: 3.2rem;
  }
`;
