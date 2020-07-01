import React, { FC, useEffect } from 'react'

import FooditiveTable from '../../components/fooditive/FooditiveTable'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import { Category } from '../../store/fooditive/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fooditiveRoot: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(3),
    },
  }),
)

export interface FooditiveStateProps {
  categories: Category
  isFetching: boolean
  error?: string
}

export interface FooditiveDispatchProps {
  fetchProducts: () => void
}

type Props = FooditiveStateProps & FooditiveDispatchProps

const Fooditive: FC<Props> = ({ categories, isFetching, error, fetchProducts }) => {
  const classes = useStyles()

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(categories)

  return (
    <div className={classes.fooditiveRoot}>
      {isFetching && <CircularProgress />}
      {!error && categories && <FooditiveTable categories={categories} />}
    </div>
  )
}

export default Fooditive
