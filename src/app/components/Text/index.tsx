'use client';
import * as T from './styles';

interface TextProps {
  children: React.ReactNode;
  $fontSize?: string;
  $fontWeight?: string | number;
  $color?: string;
  $width?: string;
  $textAlign?: string;
  $lineHeight?: string;
  $responsiveFontSize?: string;
  $responsiveFontWeight?: string | number;
  $responsiveLineHeight?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  $fontSize,
  $fontWeight,
  $width,
  $color,
  $textAlign,
  $lineHeight,
  $responsiveFontSize,
  $responsiveFontWeight,
  $responsiveLineHeight,
}) => {
  return (
    <T.Text 
      $fontSize={$fontSize} 
      $fontWeight={$fontWeight} 
      $color={$color} 
      $width={$width}
      $textAlign={$textAlign}
      $lineHeight={$lineHeight}
      $responsiveFontSize={$responsiveFontSize}
      $responsiveFontWeight={$responsiveFontWeight}
      $responsiveLineHeight={$responsiveLineHeight}
    >
      {children}
    </T.Text>
  );
};
