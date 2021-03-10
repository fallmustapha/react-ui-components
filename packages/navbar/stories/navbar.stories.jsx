import Navbar from "../src";

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

export default{
    title:"navbar",
    component:Navbar
}

const Template=args=><Navbar brand={"My Brand"} items={mockLinks}/>
export const Default= Template.apply({})
Default.args={
    brand:"My Brand",
    items:{mockLinks}
}