'use client';
import * as T from './styles';

export const Text: React.FC<any> = ({
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