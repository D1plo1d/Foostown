import React from 'react';
import gql from 'graphql-tag'
import * as Yup from 'yup'

import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import { makeStyles } from '@material-ui/styles'
import { ThemeProvider } from '@material-ui/styles'
import { unstable_Box as Box } from '@material-ui/core/Box';
import {
      Typography, TextField, Button
} from '@material-ui/core'

const useStyles = makeStyles ({
  loginContainer: {
    width: 300,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  createAccount: {
    color: '#000',
    textDecoration: 'none',
    fontSize: 11,
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  inputField: {
    width: 250,
    marginBottom: 20,
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15
  }
})

const Login = ({
  //setCSRFToken
}) => {
  const classes = useStyles();
  return(
    <ThemeProvider>
      <Box className={classes.loginContainer}>
        <div className={classes.loginForm}>
          <Typography variant='overline'>Login</Typography>
          <Formik
            initialValues={
              {
                email: '',
                password: '',
              }
            }
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                //login({ variables: { user: values } });
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required('Required'),
              password: Yup.string(),
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <TextField 
                    name='email'
                    label='Email'
                    type='email'
                    margin='normal'
                    variant='outlined'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`{
                      ${classes.inputField}
                      ${errors.email && touched.email ? 'text-input error' : 'text-input'}
                    }`}
                  /> <br/>
                  { errors.email &&
                    touched.email && <div className='input-feedback'>{errors.email}</div>}

                  <TextField 
                    name='password'
                    label='Password'
                    type='text'
                    margin='normal'
                    variant='outlined'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`{
                      ${classes.inputField}
                      ${errors.password && touched.password ? 'text-input error' : 'text-input'}
                    }`}
                  /> <br />
                  { errors.email && 
                    touched.email && <div className='input-feeback'>{errors.email}</div>}

                  <Box className={classes.submitBtn}>
                    <Button
                      type='submit'
                      className='outline'
                      disabled={isSubmitting}
                      variant='contained'
                    >
                      submit
                    </Button>

                    <Link to='/sign-up' className={classes.createAccount}>
                      create an account
                    </Link>
                  </Box>
                </form>
              )
            }}
          </Formik>
        </div>
      </Box>
    </ThemeProvider>
  )
};

export default Login;