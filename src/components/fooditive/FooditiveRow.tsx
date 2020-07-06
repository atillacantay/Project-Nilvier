import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { CategoryItem } from '../../store/fooditive/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
)

type Props = {
  categoryItem: CategoryItem
}

const FooditiveRow: FC<Props> = ({ categoryItem }) => {
  const classes = useStyles()

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {categoryItem.category_name}
      </TableCell>
      <TableCell>{categoryItem.date}</TableCell>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5} padding="none">
        <Table size="small" aria-label="contents">
          <TableBody>
            {categoryItem.contents.map((content, index) => (
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

export default FooditiveRow
