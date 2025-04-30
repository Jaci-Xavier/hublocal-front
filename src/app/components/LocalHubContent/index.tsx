import * as Content from './styles';
import image1 from '../../assets/image1.png';
import { Text } from '../Text';

export function LocalHubContent() {
    return (
        <Content.Container>
            <Content.ImageContainer>
                <Content.Image src={image1.src} />
            </Content.ImageContainer>
            <Content.TextContainer>
                <Text
                    $fontSize="2.8rem"
                    $fontWeight="700"
                    $color="#ffffff"
                    $textAlign="center"
                    $width="50%"
                    $lineHeight="3.5rem"
                >Junte-se a vários clientes satisfeitos.
                </Text>

                <Text
                    $fontSize="1.1rem"
                    $fontWeight="400"
                    $color="#ffffff"
                    $textAlign="center"
                    $width="50%"
                    $lineHeight="1.5rem"
                >Cliente HubLocal ganha mais relevância, autoridade e visibilidade. Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!
                </Text>
            </Content.TextContainer>
        </Content.Container>
    )
}