'use client';
import Button from "../Buttom";
import { Div } from "../Div";
import { Text } from "../Text";

export default function EmptyList({children}: any) {
    return (
        <Div
            width="100%"
            height="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgba(0, 0, 0, 0.050)"
        >
            <Div
                width="900px"
                height="500px"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#ffffff"
                gap="2rem"
            >
                <Text 
                    $fontSize="4.3rem"
                    $fontWeight="700"
                    $color="#000000"
                    $width="700px"
                    $textAlign="center"
                    $lineHeight="4.6rem"
                >
                    {children.text}
                </Text>

                <Button
                color='#0385FD'
                padding='13rem'
                >
                {children.buttonText}
                </Button>
            </Div>
        </Div>
    )
}