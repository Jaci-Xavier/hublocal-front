import styled from 'styled-components';

export interface DivProps {
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $padding?: string;
  $gap?: string;
}

export const DivContainer = styled.div<DivProps>`
  display: flex;
  /* margin-left: 2rem; */
  gap: ${({ $gap }) => $gap || '0'};
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
  align-items: ${({ $alignItems }) => $alignItems || 'stretch'};
  padding: ${({ $padding }) => $padding || '0'};
`;
