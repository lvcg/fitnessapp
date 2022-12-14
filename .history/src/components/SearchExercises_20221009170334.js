import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography, Button } from '@mui/material';

const SearchExercises = () => {
    return (
        <Stack alignItems="center" mt="37px"
        justifyContent="center" p="20px"
        >
            <Typography fontWeight={700} sx={{
                fontSize: { lg: '44px', xs: '30px'}
            }} mb="50px" textAlign
            >
                Awesome Exercises <br /> You Should Know
            </Typography>
        </Stack>
    )
}

export default SearchExercises;