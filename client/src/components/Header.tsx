import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const handleButtonClick = () => {
    if (location.pathname !== '/contact') {
      navigate('/contact');
    } else {
      navigate('/');
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'white',
        borderBottom: '1px solid #ccc',
        color: 'black',
      }}
    >
      <Toolbar>
        <Typography
          variant='h6'
          component='span'
          sx={{
            flexGrow: 1,
          }}
        >
          Some Company
        </Typography>
        <Button
          variant='outlined'
          color='inherit'
          onClick={handleButtonClick}
        >
          {location.pathname === '/contact' ? 'Home' : 'Contact us'}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
