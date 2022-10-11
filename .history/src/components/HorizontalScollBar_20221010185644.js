import React from 'react'
import { Box } from '@mui/material';
import { ScrollMenu}

import BodyPart from './BodyPart';

const HorizontalScollBar = ({data, bodyParts, setBodyPart }) => {
  return (
    <div>
        {data.map((item, index) => (
            <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.title || item}
                m="0 40px"
            >
               <BodyPart item={item} bodypart={bodypart} setBodyPart={setBodyPart}/>
            </Box>
        ))}
    </div>
  )
}

export default HorizontalScollBar