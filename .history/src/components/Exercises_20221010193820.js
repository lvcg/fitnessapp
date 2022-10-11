import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';


const Exercises = ({ exercises, setExercises, bodyPart}) => {
    return (
        <Box id="exercises"
            sx={{mt: {lg: ''}}}
        >
            <h1>Exercises</h1>
        </Box>
    )
}

export default Exercises
