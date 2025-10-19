import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle text={"Contact"}/>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={"textarea"}/>
                <button type={"submit"}>Send message</button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`

const StyledForm = styled.form`
`
const Field = styled.input`
`
