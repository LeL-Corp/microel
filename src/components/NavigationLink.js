import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme, primary, dark }) => ({
  fontSize: '18px',
  fontWeight: '400',
  textDecoration: 'none',
  color: dark ? theme.palette.text.dark : theme.palette.text.primary,
  position: 'relative',
  transition: 'box-shadow 0.3s ease',

  '&:hover': {
    boxShadow: `0 2px 0 ${
      dark ? theme.palette.text.dark : theme.palette.text.primary
    }`,
  },
}));

export default function NavigationLink({
  theme,
  children,
  primary,
  to,
  dark = false,
  ...props
}) {
  return (
    <StyledLink to={to} theme={theme} primary={primary} dark={dark}>
      {children}
    </StyledLink>
  );
}
