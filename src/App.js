import React from "react";
import './App.css';
// TODO: import useFormik from formik library
import { useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
      let arrayValues = Object.keys(values);
      let lengthValues =arrayValues.length;
      if (lengthValues === 3) alert(JSON.stringify(`Login Successful ${values.name}!!!`));
    },
    validate: values =>{
      let errors = {};
      if(!values.name) errors.name = 'Required';
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.password) errors.password = 'Required';
      console.log(errors);
      return errors;
    }
  });
  return (
    <div>
      <div className="login__page">
          <div className="container__login">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="login__tittle ">Welcome</h1>
              <div>Name:</div>
              <input type="text" name="name" id="nameField"onChange={formik.handleChange} value={formik.values.name}/>
              {formik.errors.name ? <div id="nameError">{formik.errors.name}</div> : null}
              <div>Email:</div>
              <input type="text" name="email" id="emailField" onChange={formik.handleChange} value={formik.values.email}/>
              {formik.errors.email ? <div id="emailError" >{formik.errors.email}</div> : null}        
              <div>Password:</div>
              <input type="password" name="password" id="pswField" onChange={formik.handleChange} value={formik.values.password}/><br/>
              {formik.errors.password ? <div id="pswError">{formik.errors.password}</div> : null}                
              <button type="submit" id="submitBtn">Login</button>
            </form>      
          </div>
    </div>
    </div>
  );
}

export default App;
