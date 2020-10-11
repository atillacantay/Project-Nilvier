import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { AppThunk } from '../store/auth/actions'

interface FormProps {
  type: 'login' | 'register'
  action: AppThunk
  onSubmit: any
  children: JSX.Element[]
}

const Form: FC<FormProps> = ({ type, action, onSubmit, children }) => {
  const dispatch = useDispatch()

  // const onSubmit = handleSubmit(data => {
  //   dispatch(action(data))
  // })

  return (
    <form id={`${type}-form`} onSubmit={onSubmit} noValidate>
      {children}
    </form>
  )
}

export default Form
