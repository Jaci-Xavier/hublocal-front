import styled from 'styled-components';

interface TextProps {
    $fontSize?: string;
    $fontWeight?: string | number;
    $color?: string;
    $width?: string;
    children: React.ReactNode;
    $textAlign?: string;
    $lineHeight?: string;
    $responsiveFontSize?: string;
    $responsiveFontWeight?: string | number;
    $responsiveLineHeight?: string;
}

export const Text = styled.p<TextProps>`
    font-size: ${({ $fontSize }) => $fontSize || '16px'};
    font-weight: ${({ $fontWeight }) => $fontWeight || 'normal'};
    color: ${({ $color }) => $color || 'black'};
    width: ${({ $width }) => $width || 'auto'};
    text-align: ${({ $textAlign }) => $textAlign || 'left'};
    line-height: ${({ $lineHeight }) => $lineHeight || 'normal'};

    @media (max-width: 1367px) {
        font-size: ${({ $responsiveFontSize, $fontSize }) =>
        $responsiveFontSize || $fontSize || "1rem"};
        font-weight: ${({ $responsiveFontWeight, $fontWeight }) =>
        $responsiveFontWeight || $fontWeight || "normal"};
        line-height: ${({ $responsiveLineHeight, $lineHeight }) =>
        $responsiveLineHeight || $lineHeight || "normal"};
    }
`;