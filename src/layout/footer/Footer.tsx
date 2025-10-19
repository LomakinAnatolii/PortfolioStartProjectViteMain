import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {Icon} from "../../components/icons/Icon.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <SectionTitle text={"Svetlana"}/>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"telegramSvg"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"vkSvg"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"instagramSvg"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"linkedinSvg"}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`
const SocialList = styled.ul`

`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.p`

`