import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";

export const TabMenu = (props: {tabItems: Array<string> }) => {
    return (
        <ListTabMenu>
            {props.tabItems.map((item) => {
                return <TabMenuItem>
                    <Link href="">{item}</Link>
                </TabMenuItem>
            })}
        </ListTabMenu>
    );
};

const ListTabMenu = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
`
const TabMenuItem = styled.li`

`