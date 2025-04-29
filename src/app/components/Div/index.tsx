import { ReactNode } from 'react';
import { DivContainer, DivProps } from './style';

interface Props extends Omit<DivProps, '$width' | '$height' | '$backgroundColor' | '$flexDirection' | '$justifyContent' | '$alignItems' | '$padding'> {
  width?: string;
  height?: string;
  backgroundColor?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  children: ReactNode;
  gap?: string;
}

export function Div({
  width,
  height,
  backgroundColor,
  flexDirection,
  justifyContent,
  alignItems,
  padding,
  children,
  gap,
  ...rest
}: Props) {
  return (
    <DivContainer
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $padding={padding}
      $gap={gap}
      {...rest}
    >
      {children}
    </DivContainer>
  );
}
