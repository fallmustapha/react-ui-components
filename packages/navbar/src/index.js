import { map } from "ramda";
import { Nav,NavBrand,NavLink,NavList,NavListItem,VerticalDivider } from "./styles";

const mockLinks=[
    {
        link:"link1",
        name:"link1"
    },
    {
        link:"link2",
        name:"link2"
    }
]
const Navbar=({brand,items=mockLinks})=>{
    return (
        <Nav>
            <NavBrand>MyNav</NavBrand>
            <VerticalDivider></VerticalDivider>
            <NavList>
                {
                    
                    map((item)=>{
                        return (
                            <NavListItem>
                                <NavLink href={item.uri}>{item.name}</NavLink>
                            </NavListItem>
                        )
                    },items)
                    
                }
                
            </NavList>
        </Nav>
    )
}

export default Navbar;