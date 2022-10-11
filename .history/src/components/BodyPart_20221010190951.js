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
          }
            
        }
        >
         <img src={Icon} alt="dumbbell" styles={{ width: '40px', height: '40px'}} />
           <Typography>
         </Stack>
    )
    }

export default BodyPart