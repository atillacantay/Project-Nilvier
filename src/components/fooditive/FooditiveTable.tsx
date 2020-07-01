import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core'
import { Category, CategoryItem } from '../../store/fooditive/types'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

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
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.category_name}
        </TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.contents.length}</TableCell>
        <TableCell>{row.contents.reduce((a, b) => +a + +b.products.length, 0)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Company Name</TableCell>
                    <TableRow>
                      <TableCell>Brand</TableCell>
                      <TableCell>Product Name</TableCell>
                      <TableCell>Unsuitability</TableCell>
                      <TableCell>Batch / Serial No</TableCell>
                    </TableRow>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.contents.map((content, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        <span>{content.company}</span>
                      </TableCell>
                      {content.products.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell>{product.brand || 'Unknown'}</TableCell>
                          <TableCell>{product.product_name}</TableCell>
                          <TableCell>{product.unsuitability}</TableCell>
                          <TableCell>{product.serial_number || 'Unknown'}</TableCell>
                        </TableRow>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const FooditiveTable: FC<Props> = ({ categories }) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.root} elevation={4}>
      <Table aria-label="transcript-table">
        <TableHead>
          <TableRow hover>
            <TableCell />
            <TableCell>Category</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Companies</TableCell>
            <TableCell>Total Number of Products</TableCell>
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
