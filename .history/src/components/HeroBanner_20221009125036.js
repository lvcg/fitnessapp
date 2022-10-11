import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

const HeroBanner = () => {
    return (
        <Box sx {{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px'}
        }} position="relative" p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Starts Within You
            </Typography>
            <Typography fontWeight={700}
            sx={{ 
                fontSize: { lg: '48px', xs: '40px' },
            }}
            >
                Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
            </Typography>
            <Typography font>
                Search & Check out ,<br /> these exercises.
            </Typography>
        </Box>
    )
}



export default HeroBanner
