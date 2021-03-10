import styles from 'styled-components';


export const Nav=styles.nav({
    backgroundColor:'lightGrey',
    height:'40px',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:"8px",
    paddingTop: "3px",
    paddingRight: "3px",
    paddingBottom: "3px",

    
})
export const NavBrand=styles.h1({
    display: 'inline',
    fontFamily:'arial,sans-serif',
    margin:'5px,0',
    color:'white'
})
export const NavList=styles.ul({
    listStyle:'none',
    display:'inline'
});
export const NavListItem=styles.li({
    textDecoration:'none',
    fontFamily:'arial,sans-serif',
    display: 'inline',
    alignItems:'center',
});
export const NavLink=styles.a({
    display:'inline-block',
    float: 'left',
    fontSize: '18px',
    textDecoration: 'none',
    padding: '13px 10px 13px 0',

    '&:hover':{
        color: 'rgba(0, 0, 0, 0.3)',
        cursor:'pointer'
    }
});
export const VerticalDivider=styles.div({
    borderLeft:'4px solid white',
    height:'35px',
    marginLeft:'5px'
})