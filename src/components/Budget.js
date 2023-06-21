import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {budget} = useContext(AppContext); //le hook useContext pour accéder à la valeur budget du contexte AppContext. 
  return (
    <div className='alert alert-secondary'>
        <span>Budget : £ {budget}</span>
    </div>
  );
};

export default Budget
