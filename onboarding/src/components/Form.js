import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

window.axios = axios

function MyForm({ errors, touched, values }) {

    return (
      <div>
        <Form >
          <div>
            {touched.email && <p>{errors.email}</p>} 
            <Field 
              type="email" 
              name="email" 
              placeholder="Email" 
            />
          </div>
          <div>
            {touched.name && <p>{errors.name}</p>} 
            <Field 
              type="text" 
              name="name" 
              placeholder="Name" 
            />
          </div>
          <div>
            {touched.password && <p>{errors.password}</p>} 
            <Field 
              type="text" 
              name="password" 
              placeholder="Password" 
            />
          </div>
          <label>
            {touched.termsOfService && <p>{errors.termsOfService}</p>} 
            <Field 
              type="checkbox" 
              name="termsOfService"
              checked={values.termsOfService}
            />
              Check the box after reading the agreement.
          </label>
          <button>Submit</button>
        </Form>
      </div>
    );
  }

  const FormikMyForm = withFormik({

    mapPropsToValues({  name, email, password, termsOfService }) {
      return {
        name: name || "", 
        email: email || "",
        password: password || "",
        termsOfService: termsOfService || false
      };
    },
    
     

      validationSchema: Yup.object().shape({
        name: Yup.string()
          .max(15)
          .required(),
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .min(7, 'Password must be 7 or more characters.')
          .required(),
        termsOfService: Yup.bool()
          .required('Read the terms of agreement.'),
      }),
    
      
      
  
    handleSubmit(values, { resetForm }) {
      console.log("values", values)
      axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
          console.log("response data", res.data); 
          let data = res.data
          console.log(data)
          resetForm()
          // window.alert(`${data}!`)
          window.alert(JSON.stringify(`Welcome to the Team ${data.name}!`));
        })
        .catch(err => {
          console.log("error", err); 
        });
        
    }
    
  })(MyForm);

    


  export default FormikMyForm;
