import React, { useMemo, FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { RootState } from '../../store'
import { AppThunk, clearStatus } from '../../store/auth/actions'
import { AuthenticationFailureResponse } from '../../store/auth/types'
import * as yup from 'yup'

import { Button, makeStyles, TextField, Container, Box, Avatar, Typography, CircularProgress } from '@material-ui/core'
import { LockOpen } from '@material-ui/icons'
import Form from '../Form'

const useStyles = makeStyles(() => ({
  loginRoot: {},
  button: {
    backgroundColor: '#9146FF',
    '&:hover': {
      backgroundColor: '#9f68ef',
    },
  },
  indicator: {
    verticalAlign: 'middle',
  },
}))

interface IFormInputs {
  email: string
  password: string
}

interface AuthProps {
  type: 'login' | 'register'
  action: AppThunk
}

interface AuthStateProps {
  isLoading: boolean
  error?: AuthenticationFailureResponse
}

const Auth: FC<AuthProps> = ({ type, action }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector<RootState, AuthStateProps>(state => state.auth)

  const validationSchema = useMemo(
    () =>
      yup.object({
        isRegisterForm: yup.boolean(),
        email: yup.string().required().email(),
        password: yup.string().required().min(6).max(20),
      }),
    [],
  )

  const { register, handleSubmit, errors } = useForm<IFormInputs>({ validationSchema })

  const onSubmit = handleSubmit(data => {
    dispatch(action(data))
  })

  useEffect(() => {
    return () => {
      if (error) dispatch(clearStatus())
    }
  }, [error])

  return (
    <Container component="main" maxWidth="lg">
      <Box display="flex" justifyContent="center">
        <Avatar>
          <LockOpen fontSize="large" />
        </Avatar>
      </Box>
      <Box display="flex" flexDirection="column" mt={1} mb={1}>
        <Form type={type} action={action} onSubmit={onSubmit}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            inputRef={register}
            error={!!errors.email || !!error?.errors?.email}
            helperText={errors.email?.message || error?.errors?.email}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            inputRef={register}
            error={!!errors.password || !!error?.errors?.password}
            helperText={errors.password?.message || error?.errors?.password}
          />
        </Form>
        {/* <form id={`${type}-form`} onSubmit={onSubmit} noValidate>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            inputRef={register}
            error={!!errors.email || !!error?.errors?.email}
            helperText={errors.email?.message || error?.errors?.email}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            inputRef={register}
            error={!!errors.password || !!error?.errors?.password}
            helperText={errors.password?.message || error?.errors?.password}
          />
        </form> */}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={1} mb={1}>
        {typeof error === 'string' && <Typography color="secondary">{error}</Typography>}
        <Button
          type="submit"
          form={`${type}-form`}
          variant="contained"
          className={classes.button}
          color="inherit"
          disabled={isLoading}
        >
          {type}
          {isLoading && (
            <Box ml={1}>
              <CircularProgress size={18} color="inherit" className={classes.indicator} />
            </Box>
          )}
        </Button>
      </Box>
      {type === 'login' && <Typography>Forget password?</Typography>}
    </Container>
  )
}

export default Auth
