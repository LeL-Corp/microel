import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme, dark, primary }) => ({
  fontSize: '18px',
  fontWeight: '400',
  textDecoration: 'none',
  color: dark ? theme.palette.text.dark : primary ? theme.palette.primary.main : theme.palette.text.primary,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export default function NavigationLink({ theme, children,dark, primary, to, ...props }) {
  return (
    <StyledLink to={to} theme={theme} dark={dark} primary={primary}>
      {children}
    </StyledLink>
  );
}
