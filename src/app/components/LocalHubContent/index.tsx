import * as Content from './styles';
import image1 from '../../assets/image1.png';

export function LocalHubContent() {
    return (
        <Content.Container>
            <Content.ImageContainer>
                <Content.Image src={image1.src} />
            </Content.ImageContainer>
            <Content.TextContainer>
                <Content.Title>Junte-se a vários clientes satisfeitos.</Content.Title>
                <Content.Text>Cliente HubLocal ganha mais relevância, autoridade e visibilidade. Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!</Content.Text>
            </Content.TextContainer>
        </Content.Container>
    )
}