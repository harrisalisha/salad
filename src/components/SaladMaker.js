import React , {useReducer, createContext }from 'react';

import { createUseStyles } from 'react-jss';
import SaladBuilder from './SaladBuilder';
import SaladSummary from './SaladSummary';

const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center',
  }
});


export const SaladContext = createContext();

function reducer(state, item ){//reducer(state, initialState)
    //add new item in state
    return [...state, item]
}

const SaladMaker = () =>{
  const classes = useStyles();
  
  const [salad, setSalad] = useReducer(reducer, []);
  // useReducer add new item in state

  return(
    <SaladContext.Provider value={{ salad, setSalad}}>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">🥗 </span>
          List of Favorite Salads!
          <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladBuilder />
      <SaladSummary />
    </SaladContext.Provider>
  )
}
export default SaladMaker;