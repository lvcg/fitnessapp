import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
    return (
        <Box sx {{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px'}
        }} position="relative" p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Starts Within You
            </Typography>
            <Typography fontWeight="fontWeight">
                Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
            </Typography>
            <Typography>
                Search & Check out ,<br /> these exercises.
            </Typography>
        </Box>
    )
}



export default HeroBanner
