import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { Category, CategoryItem } from '../../store/fooditive/types'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
)

type Props = {
  categories: Category
}

function Row(props: { row: CategoryItem }) {
  const { row } = props

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.category_name}
      </TableCell>
      <TableCell>{row.date}</TableCell>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5} padding="none">
        <Table size="small" aria-label="contents">
          <TableBody>
            {row.contents.map((content, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" width="20%">
                  {content.company}
                </TableCell>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4} padding="none">
                  <Table aria-label="products">
                    <TableBody>
                      {content.products.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell width="30%">{product.brand || 'Bilinmiyor'}</TableCell>
                          <TableCell width="30%">{product.product_name}</TableCell>
                          <TableCell width="30%">{product.unsuitability}</TableCell>
                          <TableCell width="30%">{product.serial_number || 'Bilinmiyor'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableCell>
    </TableRow>
  )
}

const FooditiveTable: FC<Props> = ({ categories }) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.root} elevation={4}>
      <Table aria-label="fooditive-table">
        <TableHead>
          <TableRow hover>
            <TableCell>Kategori</TableCell>
            <TableCell>Tarihi</TableCell>
            <TableCell width="20%">Firma Adı</TableCell>
            <TableCell width="30%">Marka</TableCell>
            <TableCell width="30%">Ürün Adı</TableCell>
            <TableCell width="30%">Uygunsuzluk</TableCell>
            <TableCell width="30%">Parti / Seri No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(categories).map(key => {
            const categoryItem = categories[key]
            return <Row key={key} row={categoryItem} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FooditiveTable
