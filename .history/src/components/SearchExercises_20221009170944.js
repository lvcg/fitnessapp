import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
    return (
        <Stack alignItems="center" mt="37px"
        justifyContent="center" p="20px"
        >
            <Typography fontWeight={700} sx={{
                fontSize: { lg: '44px', xs: '30px'}
            }} mb="50px" textAlign="center"
            >
                Awesome Exercises <br /> You Should Know
            </Typography>
            <Box position="relative" mb="72">
                <TextField 
                    sx={{
                        input: {
                            fontWeight: 700,
                            border: 'none',
                            borderRadius: '4px'
                        }
                    }}
                    
                />
            </Box>
        </Stack>
    )
}

export default SearchExercises;