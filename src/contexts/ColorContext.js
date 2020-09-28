import React, { createContext } from 'react';

export const ColorContext = createContext();

const Colors = (props) => {
  const colors = {
    'black': '#333',
    'blackAlpha': 'rgba(0, 0, 0, .6)',
    'grayBack': '#FAFAFC',
    'grayDark': '#B1B1B3',
    'grayLight': '#EEEEEE',
    'grayLighter': '#F7F7F7',
    'greenDark': '#24B570',
    'greenLight': '#5FC997',
    'marker': 'rgba(255, 239, 157, .5)',
    'pointColor': '#FE6F65',
    'white': '#fff',
  };
  return (
    <ColorContext.Provider
      value={colors}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default Colors;