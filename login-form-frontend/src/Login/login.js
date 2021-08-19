import React,{ useState } from 'react';
import './login.css';

import {useForm} from '../shared/hooks/form-hook';

import {validate} from '../util/validator';

const loginn = props =>
{
    const [formState, inputHandler] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        }
    },false);
    const submitHandler= e =>{
        e.preventdefault();
        console.log('Loginned successfully');
    }
return(
    
    <form onSubmit={submitHandler}>
      
        <h2 className="header__loginform">Simple Login Form</h2>
        
        <Input element="input" id="email" type="email" label="E-Mail" validator={[VALIDATOR_EMAIL()]}  errorText="Please enter a valid email address" onInput={inputHandler}/>
        
        <Input element="input" id="password" type="password" label="Password" validator={[VALIDATOR_MINLENGTH(5)]} onInput={inputHandler} />

     <Button type="submit" disabled={!formState.isValid}>Login</Button>
      </form>
);
};

export default loginn;