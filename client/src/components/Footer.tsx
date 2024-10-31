import React from 'react'
import { Typography } from '@mui/material'
const Footer = () => {
  return (
    <footer>
      <Typography 
        variant="h6"
        sx={{
          textAlign: "center",
          marginTop: "4rem",
          marginBottom: "4rem"
        }}
      >
        Some Company 2024
      </Typography>
    </footer>
  )
}

export default Footer
