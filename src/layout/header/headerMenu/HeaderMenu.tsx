import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <MenuList>
                {props.menuItems.map((item) => {
                    return <MenuItem>
                        <MenuLink href="">{item}
                            <Mask>
                                <span>{item}</span>
                                </Mask>
                            <Mask>
                                <span>{item}</span>
                                </Mask>
                        </MenuLink>
                    </MenuItem>
                })}
            </MenuList>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`

`
const MenuList = styled.ul`
    display: flex;
    gap: 30px;
    justify-content: center;
`

const MenuLink = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    display: inline-block;
    color: ${theme.colors.accent};
    overflow-y: hidden;
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const MenuItem = styled.li`
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        height: 3px;
        display: inline-block;
        background-color: ${theme.colors.accent};
        transform: scale(0);
    }
    &:hover {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            color: ${theme.colors.font};
            transform: skewX(12deg) translateX(5px);
            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`