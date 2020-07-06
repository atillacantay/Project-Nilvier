import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { TableCell } from '@material-ui/core'
import FilterSelect from './FilterSelect'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
)

const filters = [
  { key: 0, placeholder: 'Kategori' },
  { key: 1, placeholder: 'Tarih' },
  { key: 2, placeholder: 'Firma Adı' },
  { key: 3, placeholder: 'Marka' },
  { key: 4, placeholder: 'Ürün Adı' },
  { key: 5, placeholder: 'Uygunsuzluk' },
  { key: 6, placeholder: 'Parti / Seri No' },
]

const FilterRow: FC = () => {
  const classes = useStyles()

  return (
    <>
      {filters.map(filter => (
        <TableCell key={filter.key}>
          <FilterSelect filter={filter} />
        </TableCell>
      ))}
    </>
  )
}

export default FilterRow
