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
  }) => {
    return (
      <T.Text 
        $fontSize={$fontSize} 
        $fontWeight={$fontWeight} 
        $color={$color} 
        $width={$width}
        $textAlign={$textAlign}
        $lineHeight={$lineHeight}
      >
        {children}
      </T.Text>
    );
  };