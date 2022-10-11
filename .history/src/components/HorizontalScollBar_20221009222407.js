import React from 'react'
import { Box } from '@mui/material';

const HorizontalScollBar = ({data}) => {
  return (
    <div>
        {data.map((item, index) => (
            <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.title || item}
                m=
    </div>
  )
}

export default HorizontalScollBar