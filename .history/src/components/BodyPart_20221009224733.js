import React from 'react'
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ bodyPart, setBodyPart }) => {
    return (
        <Stack direction="row" spacing={2}>
        <Typography variant="h6" component="h2">
            Body Part: {bodyPart}
        </Typography>
        </Stack>
    )
    }