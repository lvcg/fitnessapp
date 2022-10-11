import React from 'react'
import { Box } from '@mui/material';

import BodyPart from './BodyPart';

const HorizontalScollBar = ({data}) => {
  return (
    <div>
        {data.map((item, index) => (
            <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.title || item}
                m="0 40px"
            >
               <BodyPart item={item} bodypart={bodypart} setBodyPart=/>
            </Box>
        ))}
    </div>
  )
}

export default HorizontalScollBar