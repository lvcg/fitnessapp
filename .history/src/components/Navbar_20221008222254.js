import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <Stack>
      <Link>
      
        <img src={Logo} alt="logo" />
      </Link>
    </Stack>
  )
}

export default Navbar