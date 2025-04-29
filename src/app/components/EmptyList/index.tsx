'use client';
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
            <Text fontSize="24px" fontWeight="bold" color="#000000">
                {children}
            </Text>
        </Div>
    )
}