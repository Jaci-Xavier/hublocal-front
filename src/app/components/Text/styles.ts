import styled from 'styled-components';

interface TextProps {
    $fontSize?: string;
    $fontWeight?: string | number;
    $color?: string;
    $width?: string;
    children: React.ReactNode;
    $textAlign?: string;
    $lineHeight?: string;
}

export const Text = styled.p<TextProps>`
    font-size: ${({ $fontSize }) => $fontSize || '16px'};
    font-weight: ${({ $fontWeight }) => $fontWeight || 'normal'};
    color: ${({ $color }) => $color || 'black'};
    width: ${({ $width }) => $width || 'auto'};
    text-align: ${({ $textAlign }) => $textAlign || 'left'};
    line-height: ${({ $lineHeight }) => $lineHeight || 'normal'};
`;