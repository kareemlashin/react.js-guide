import React, { PureComponent } from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'

class Dynamic extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }
  onSubmit = (values) => {
    console.log(values)
  }
  bf = (values) => {
    console.log(values)
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    const validation = Yup.object({
      news: Yup.array().of(
        Yup.object({
          name: Yup.string()
            .min(5, 'must be 5 char')
            .max(10, 'max 10')
            .required('must write'),
          user: Yup.string()
            .min(5, 'must be 5 char')
            .max(10, 'max 10')
            .required('must write'),
        }),
      ),
    })
    return (
      <div className="DynamicWrapper">
        dd
        <Formik
          initialValues={{
            news: [{ name: '', user: '' }],
          }}
          validationSchema={validation}
          onSubmit={this.bf}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="news">
                {({ push, remove }) => (
                  <div>
                    {values.news.map((x, index) => (
                      <div ket={`key-${index}-{x.name}`}>
                        <Field name={`news[${index}.name]`} type="text" />
                        <ErrorMessage name={`news[${index}.name]`} />
                        <Field name={`news[${index}.user]`} type="text" />
                        <ErrorMessage name={`news[${index}.user]`} />

                        <br />
                        <br />
                        <button onClick={() => remove(index)}>*</button>
                      </div>
                    ))}

                    <button onClick={() => push({ name: '', user: '' })}>
                      +
                    </button>
                  </div>
                )}
              </FieldArray>

              {(() => {
                if (values.news.length) {
                  return (
                    <div>
                      <button>ddd</button>
                    </div>
                  )
                } else {
                  return <div>must be 1 last of</div>
                }
              })()}
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default Dynamic
