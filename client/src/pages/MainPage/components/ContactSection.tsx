import React from 'react'
import { Button } from '@mui/material'
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/contact');
  };
  
  return (
    <div>
      <Typography 
      variant="h2"
        sx={{
          textAlign: "center",
        }}
      >
        Less important title
      </Typography>
      <Button 
        variant='outlined'
        color='inherit'
        onClick={handleButtonClick}
        sx={{
          display: "block",
          margin: "0 auto",
          marginTop: "2rem",
          marginBottom: "2rem"
        }}
      >
        Contact us
      </Button>
    </div>
  )
}

export default ContactSection
