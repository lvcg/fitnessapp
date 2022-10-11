import React from 'react'
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ bodyPart, setBodyPart, bodyPart }) => {
    return (
        <Stack
          type="button"
          alignItems="center"
          justifyContent="center"
          className="bodyPart-card"
          sx={{
            borderTop: bodyPart === item ? '4px solid #FFC107' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px',
          }}
            onClick={() => setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
         
    );

export default BodyPart