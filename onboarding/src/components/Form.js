import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";


 function MyForm() {
    return (
        <div>
          <Form>
            <label>
              Username:
              <input
                type="text"
                name="username"
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
              />
            </label>
            <label>
              Password:
              <input
                type="text"
                name="password"
              />
            </label>
            <label>
                Terms of Service
              <input
                type="checkbox"
              />
            </label>
            <button>Submit!</button>
          </Form>
        </div>
      );
    }
    

export default MyForm;
