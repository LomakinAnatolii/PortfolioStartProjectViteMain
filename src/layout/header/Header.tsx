import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const menuItems = ["Home", "Skills", "Works", "Testimony", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo/>
                <HeaderMenu menuItems={menuItems}/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    padding: 20px 30px;
    background-color: #1f1f20e5;
    opacity: 0.9;
`