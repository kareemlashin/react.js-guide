import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  decrement,
  increment,
  getUser,
  createUser,
  remove,
  oneUser,
  upd,
} from './../action/action'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import i18next from 'i18next'

class StateMangeMent extends PureComponent {
  constructor(props) {
    super(props)
  }
  state = {
    name: this.props.update.name,
  }
  componentDidMount = () => {
    this.props.usersfun()
  }
  print = (values) => {
    this.props.createUser(values)
  }

  sendupdate = (values) => {
    let id = this.props.update.id
    this.props.upd(values, id)
  }

  render() {
    const validation = Yup.object({
      name: Yup.string()
        .min(5, 'must be 5 char')
        .max(10, 'max 10')
        .required('must write'),
    })
    return (
      <div className="">
        <div>
        {i18next.t('title')}

        </div>
        Test content: {this.props.counter}
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.usersfun}>get</button>
        <button onClick={this.props.createUser}>createUser</button>
        {this.props.users.map((x) => (
          <div key={x.rg}>
            {x.name}
            <button onClick={this.props.remove.bind(this, x.id)}>{x.id}</button>
            <button onClick={this.props.oneUser.bind(this, x)}>
              {x.id} update
            </button>
          </div>
        ))}
        <Formik
          initialValues={{
            name: '',
          }}
          onSubmit={this.print}
          validationSchema={validation}
        >
          <Form>
            <div>
              <Field type="text" name="name" id="" />
              <ErrorMessage name="name" />
            </div>
            <button type="submit">go</button>
          </Form>
        </Formik>
        <Formik
          initialValues={{
            name: this.props.update.name,
          }}
          enableReinitialize
          onSubmit={this.sendupdate}
          validationSchema={validation}
        >
          <Form>
            <div>
              <Field type="text" name="name" id="" />
              <ErrorMessage name="name" />
            </div>
            <button type="submit">go</button>
          </Form>
        </Formik>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.reducers2.counter,
    users: state.reducers.users,
    update: state.reducers.update,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    usersfun: () => {
      dispatch(getUser())
    },
    createUser: (data) => {
      dispatch(createUser(data))
    },
    remove: (id) => {
      dispatch(remove(id))
    },
    oneUser: (user) => {
      dispatch(oneUser(user))
    },
    upd: (user, id) => {
      dispatch(upd(user, id))
    },
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(StateMangeMent)
