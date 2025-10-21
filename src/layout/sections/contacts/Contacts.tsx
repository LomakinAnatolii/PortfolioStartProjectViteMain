import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle text={"Contact"}/>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding: 100px 30px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: 540px;
    margin: 0 auto;
    textarea {
        height: 155px;
        resize: none;
    }
`
const Field = styled.input`
    padding: 7px 15px;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid #${theme.colors.borderColor};
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    &:focus {
        outline: 1px solid ${theme.colors.borderColor};
    }
`
