import { styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const StyledLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

export default function Link({
  children,
  to,
}: {
  children: JSX.Element;
  to: string;
}): JSX.Element {
  const { search } = useLocation();

  return <StyledLink to={to + search}>{children}</StyledLink>;
}
