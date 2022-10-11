import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
    return (
        <Box sx {{
            mt: { lg: '212px', xs: '70px' },'
            ml: { sm: '50px'}
        }}>
            <Typography color="#FF2625" fontWeight>
                Fitness Starts Within You
            </Typography>
        </Box>

    )
}

export default HeroBanner
