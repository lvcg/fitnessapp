import React, from 'react'
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

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