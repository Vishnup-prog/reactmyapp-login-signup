import React, {useState} from 'react';
import Input from '../shared/components/FormElements/Input';
import Button from '../shared/components/FormElements/Button';
import { 
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
  } from '../shared/util/validators';
import { useForm } from '../shared/hooks/form-hook';
import './login.css'; 

const Loginn = () =>
{
   
 const [isLoginMode, setIsLoginMode] = useState(true);
 const [formState,inputHandler,setFormData] =  useForm( {
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  },
  false
);

const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

return(
    <React.Fragment>
       <h2 className="header__loginform">Simple Login Form</h2>
     <hr/>
    <form onSubmit={submitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}

        <Input element="input" id="email" type="email" label="E-Mail" validator={[VALIDATOR_EMAIL()]}  
        errorText="Please enter a valid email address" onInput={inputHandler} />
        
        <Input element="input" id="password" type="password" label="Password" validator={[VALIDATOR_MINLENGTH(5)]}  errorText="Please enter a valid password, at least 5 characters." onInput={inputHandler} />

        <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? 'Login' : 'Signup'}</Button>
     
      </form>

      <Button inverse onClick={switchModeHandler} >{isLoginMode ? 'SIGNUP' : 'LOGIN'} </Button>
      
      </React.Fragment>
);
};

export default Loginn;