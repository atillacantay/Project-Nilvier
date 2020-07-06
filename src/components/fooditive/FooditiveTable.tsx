import React, { FC } from 'react'

import FilterRow from './FilterRow'
import FooditiveRow from './FooditiveRow'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { Category } from '../../store/fooditive/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
)

type Props = {
  categories: Category
}

const FooditiveTable: FC<Props> = ({ categories }) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.root} elevation={4}>
      <Table aria-label="fooditive-table">
        <TableHead>
          <TableRow hover>
            <TableCell>Kategori</TableCell>
            <TableCell>Tarih</TableCell>
            <TableCell width="20%">Firma Adı</TableCell>
            <TableCell width="25%">Marka</TableCell>
            <TableCell width="25%">Ürün Adı</TableCell>
            <TableCell width="25%">Uygunsuzluk</TableCell>
            <TableCell width="25%">Parti / Seri No</TableCell>
          </TableRow>
          <TableRow hover>
            <FilterRow />
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(categories).map(key => {
            const categoryItem = categories[key]
            return <FooditiveRow key={key} categoryItem={categoryItem} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FooditiveTable
