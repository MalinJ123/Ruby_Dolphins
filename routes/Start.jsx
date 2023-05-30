import { Wrapper } from "../styles/MainStyle"
import { MessageField, MessageText, HeroImage, HeroImageText, TitleContainer, TextContainer } from "../styles/StartStyle"

function Start() {
    return (
        <Wrapper>
             <MessageField>
                <MessageText>
                    Vi har allt du behöver inför sommaren!
                </MessageText>
            </MessageField>
            <HeroImage>
                <HeroImageText>Marknadens bästa produkter</HeroImageText>
            </HeroImage>
            <TitleContainer>
                <h1>Sommaren knackar på!</h1>
            </TitleContainer>
            <TextContainer>
                <p>
                    Är du redo inför sommaren? Vi har allt du behöver för att njuta av solen, havet och värmen. Oavsett om du vill bada, grilla, campa eller bara slappa har vi produkterna som passar dig. Kolla in vårt fantastiska utbud av badkläder, solskydd, grillar, tält och mycket mer. Skynda dig att beställa innan det är för sent. Sommaren väntar inte på någon!
                </p>
            </TextContainer>
        </Wrapper>
    )
}

export default Start