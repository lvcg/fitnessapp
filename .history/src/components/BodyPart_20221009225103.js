import React from 'react'
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ bodyPart, setBodyPart }) => {
    return (
        <Stack>
         <img src={Icon} alt="dumbbell" styles={{ width: '40px'}} />
        </Stack>
    )
    }

export default BodyPart