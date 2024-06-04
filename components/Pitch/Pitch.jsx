import {StyledCardInnerContainer, StyledCardInnerImage, StyledCardInnerText} from "../../collections/Card/elements";
import {SectionParagraph} from "../Typography/SectionParagraph";
import {SectionTinyHeading} from "../Typography/SectionTinyHeading";
export const PitchComponent = () => {
    return (
        <StyledCardInnerContainer>
            <StyledCardInnerImage>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 48 48">
                    <path fill="currentColor" fillRule="evenodd" d="M33 18.535c1.163.348 2 .465 2 .465v-3h2a5 5 0 0 0 0-10h-5.764A5.236 5.236 0 0 0 26 11.236c0 4.518 4.348 6.506 7 7.299M40 11a3 3 0 0 1-3 3h-4v2.435a13 13 0 0 1-1.603-.667C29.414 14.774 28 13.36 28 11.236A3.236 3.236 0 0 1 31.236 8H37a3 3 0 0 1 3 3m-25.183 6.993A4.998 4.998 0 0 1 14.998 8h3.169A4.833 4.833 0 0 1 23 12.833c0 4.042-3.63 5.89-6 6.667c-1.148.376-2 .5-2 .5v-2zM17 16.071l-2.11-.076A2.998 2.998 0 0 1 14.997 10h3.169A2.833 2.833 0 0 1 21 12.833c0 1.915-1.217 3.17-2.924 4.06c-.36.188-.725.348-1.076.484zM28 24c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4m-2 0a1.999 1.999 0 1 1-4 0a1.999 1.999 0 1 1 4 0m-7 2c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4m-2 0a1.999 1.999 0 1 1-4 0a1.999 1.999 0 1 1 4 0M6 36.546C6 33.522 11.996 32 15 32c.585 0 1.284.058 2.03.173C18.371 31.19 20.827 30 24 30s5.629 1.19 6.971 2.173A13.6 13.6 0 0 1 33 32c3.004 0 9 1.523 9 4.545V42H6zm15.652-.523c.348.324.348.493.348.522V40H8v-3.455c0-.03 0-.198.348-.522c.363-.339.962-.7 1.776-1.03C11.756 34.333 13.75 34 15 34s3.244.333 4.876.993c.814.33 1.413.691 1.776 1.03m6.49-3.167A10.4 10.4 0 0 0 24 32c-1.656 0-3.064.386-4.141.856C22.074 33.6 24 34.832 24 36.546c0-1.714 1.926-2.945 4.142-3.69M40 36.546c0-.03 0-.199-.348-.523c-.363-.339-.962-.7-1.776-1.03C36.244 34.333 34.25 34 33 34s-3.244.333-4.876.993c-.814.33-1.413.691-1.776 1.03c-.348.324-.348.493-.348.522V40h14zM33 30c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-2a1.999 1.999 0 1 0 0-4a1.999 1.999 0 1 0 0 4" clipRule="evenodd"/>
                </svg>

            </StyledCardInnerImage>
            <StyledCardInnerText>
                <SectionParagraph>
                    Pitch
                </SectionParagraph>
                <SectionTinyHeading>
                    Comprehensive
                    <b>pitch management</b>, including comms, diary management and pitch hosting.
                </SectionTinyHeading>
            </StyledCardInnerText>
        </StyledCardInnerContainer>
    );
}
