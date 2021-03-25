import React, { PureComponent } from 'react'
//import { Test } from './Forms.styles';

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class Forms extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      user: [
        {
          name: 'deshan madurajith',
          email: 'desh@email.com',
        },
      ],
    }
  }
  print = (values) => {
    console.log(values)
  }

  render() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    /*
"^(010|011|012)[0-9]{8}$"
*/

    const validation = Yup.object({
      name: Yup.string()
        .min(5, 'must be 5 char')
        .max(10, 'max 10')
        .required('must write'),
      email: Yup.string().email('invalid email').required('required email'),
      password: Yup.string()
        .required('must be password')
        .required('must be required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'pass word not  match')
        .required('ffffff'),
      radio: Yup.string().required('radio required'),
      address: Yup.object({ city: Yup.string().required('any city') }),
      tags: Yup.array().min(1).length(2),
      phone: Yup.string().matches(phoneRegExp, 'Must be phone').required('rew'),
      color: Yup.string().required('ret'),
      
    })
    return (
      <div className="FormsWrapper container">
        <Formik
          initialValues={{
            name: 'ffccc',
            email: 'cc@gmail.com',
            password: 'cccc',
            confirmPassword: 'cccc',
            radio: '2',
            address: { city: 'ddd' },
            tags: [],
            phone: '',
            color: '',
            
          }}
          onSubmit={this.print}
          validationSchema={validation}
        >
          <Form>
            <div>
              <Field type="text" name="name" id="" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <Field type="tel" name="phone" id="" />
              <ErrorMessage name="phone" />
            </div>

            <div>
              <Field type="text" name="address.city" id="" />
              <ErrorMessage name="address.city" />
            </div>

            <div>
              <Field type="email" name="email" id="" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <Field type="password" name="password" id="" />
              <ErrorMessage name="password" />
            </div>
            <div>
              <Field type="radio" name="radio" value="1" id="" />
              <Field type="radio" name="radio" value="2" id="" />
              <ErrorMessage name="radio" />
            </div>
            <div>
              <Field type="password" name="confirmPassword" id="" />
              <ErrorMessage name="confirmPassword" />
            </div>

            <div>
              <label>
                <Field type="checkbox" name="tags" value="one" />
                One
              </label>
              <label>
                <Field type="checkbox" name="tags" value="two" />
                Two
              </label>
              <label>
                <Field type="checkbox" name="tags" value="three" />
                Three
              </label>
              <ErrorMessage name="tags" />
            </div>
            <div>
              <Field as="select" name="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <ErrorMessage name="color" />
            </div>

            <button type="submit">go</button>
          </Form>
        </Formik>
      </div>
    )
  }
}

export default Forms
