import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { useMenuContext } from 'context/MenuContext';



export default function NavigationLink({
  theme,
  children,
  primary,
  to,
  dark = false,
  selected,
  ...props
}) {



const StyledLink = styled(Link)(({ theme, primary, dark, selected }) => ({
  fontSize: '18px',
  fontWeight: '400',
  textDecoration: 'none',
 
  color: dark ? "#fff" : selected ? "#fff" : theme.palette.text.dark,
  position: 'relative',
  transition: 'box-shadow 0.3s ease',
  backgroundColor: selected  ? theme.palette.tertiary.main : "transparent",
  borderRadius: selected ? "5px" : "0px",
  padding: selected ? "5px 10px" : "0px",
 

  '&:hover': {
    boxShadow: selected ? "none" : `0 2px 0 ${
       theme.palette.text.dark
    }`,
  },
}));

  const { selectedMenu, setSelectedMenu } = useMenuContext();
console.log("selected 2", selectedMenu)
  return (
    <StyledLink to={to} theme={theme} primary={primary} dark={dark} selected={selected}>
      {children}
    </StyledLink>
  );
}
