import React from 'react'
import { Box } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


import BodyPart from './BodyPart';



const HorizontalScollBar = ({data, bodyParts, setBodyPart }) => {
  return (
    <ScrollMenu>
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
    </ScrollMenu>
  )
}

export default HorizontalScollBar