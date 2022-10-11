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
            }
        }
        >
         <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px'}} />
           <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitlalize"
           >
                {item}
           </Typography>
         </Stack>
    )
    }

export default BodyPart