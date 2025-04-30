import styled from "styled-components";

interface InputProps {
  $padding?: string;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-inline: ${({ $padding }: InputProps) => $padding || '0'};
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1367px) {
    padding-inline: 8.8rem;
  }
`;

export const Input = styled.input`
  border: 2px solid #0385FD;
  height: 3.75rem;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  transition: border-color 0.3s ease;
  padding-left: 4px;
  &:focus {
    border-color: #0385FD;
    outline: none;
  }
`;
