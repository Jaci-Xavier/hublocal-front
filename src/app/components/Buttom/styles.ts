import styled from "styled-components";

interface ButtonProps {
    padding?: string;
}

export const ButtonContainer = styled.div<ButtonProps>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    padding-inline: ${({ padding }) => padding || '0'};
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
    font-size: 20px;
    font-weight: 700;
    transition: background-color 0.3s ease;
    cursor: pointer;
`;
