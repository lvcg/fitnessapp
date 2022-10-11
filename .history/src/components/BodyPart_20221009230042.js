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
          sx={
            bodyPart === bodyPart ? { 
                borderTop: 'borderBottom solid #FFC107', backgroundColor: '#F5F5F5',

          } : ''
        }
        >
         <img src={Icon} alt="dumbbell" styles={{ width: '40px', height: '40px'}} />
        </Stack>
    )
    }

export default BodyPart