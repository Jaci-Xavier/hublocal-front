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
  $marginBottom?: string;
  $flex?: string;
  $marginTop?: string;
}

export const DivContainer = styled.div<DivProps>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
  align-items: ${({ $alignItems }) => $alignItems || 'stretch'};
  gap: ${({ $gap }) => $gap || '0'};
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
  padding: ${({ $padding }) => $padding || '0'};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '0'};
  flex: ${({ $flex }) => $flex || 'unset'};
  margin-top: ${({ $marginTop }) => $marginTop || '0'};
`;
