import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <Stack>
      <Link>
        <Link to ="/">
        <img src={Logo} alt="logo" style={{width: '48px', height=}} />
      </Link>
    </Stack>
  )
}

export default Navbar