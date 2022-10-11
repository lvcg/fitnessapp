import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => 
     (
        <Box sx={{
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
            <Typography fontSize="22px"
            lineHeight="35px" mb={3}
            >
                Search & Check out ,<br /> these exercises.
            </Typography>
            <Button variant ="contained" color = "error" href="#exercises">
                Explore Exercises 
            </Button>
            <Typography 
               fontWeight={600}
               color="#FF2625"
               sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' },
               }}
                fontSize="200px"
            >

            <Typography/>
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />

        </Box>
    );



export default HeroBanner
