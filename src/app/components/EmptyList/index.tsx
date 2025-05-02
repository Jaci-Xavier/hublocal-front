'use client';
import { useEffect, useState } from "react";
import Button from "../Buttom";
import { Div } from "../Div";
import { Text } from "../Text";

interface EmptyListProps {
  text: string;
  buttonText: string;
  onClick: () => void;
}

export default function EmptyList({ text, buttonText, onClick }: EmptyListProps) {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const fontSize = width && width >= 1366 ? "3.5rem" : "4.3rem";
  const lineHeight = width && width >= 1366 ? "3.8rem" : "4.6rem";

  return (
    <Div
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgba(245, 245, 245, 1)"
    >
      <Div
        width="auto"
        height="auto"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#ffffff"
        gap="2rem"
        padding="6rem 6rem"
      >
        {width !== null && (
          <Text
            $fontSize={fontSize}
            $fontWeight="700"
            $color="#000000"
            $width="700px"
            $textAlign="center"
            $lineHeight={lineHeight}
          >
            {text}
          </Text>
        )}

        <Button
          color="#0385FD"
          $padding="13rem"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </Div>
    </Div>
  );
}
