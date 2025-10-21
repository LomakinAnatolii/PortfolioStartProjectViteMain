import styled from "styled-components";
import {Icon} from "../../components/icons/Icon.tsx";
import {theme} from "../../styles/Theme.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Svetlana</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink href={"#"}>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegramSvg"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href={"#"}>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vkSvg"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href={"#"}>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagramSvg"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href={"#"}>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedinSvg"}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 50px 30px;
    background-color: ${theme.colors.primaryBg};
    text-align: center;
`
const Name = styled.span`
    position: relative;
    display: block;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;
    text-align: center;
`

const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    color: ${theme.colors.accent};
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    &:hover {
        color: ${theme.colors.primaryBg};
        background-color: ${theme.colors.accent};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    opacity: 0.5;
`