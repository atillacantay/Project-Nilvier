import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { MenuItem, Select, Input, Checkbox, ListItemText, FormControl, InputLabel } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 180,
    },
  }),
)

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

type FilterSelectProps = {
  filter: {
    key: number
    placeholder: string
  }
}

const FilterSelect: FC<FilterSelectProps> = ({ filter }) => {
  const classes = useStyles()
  const [personName, setPersonName] = React.useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[])
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-mutiple-checkbox-label">{filter.placeholder}</InputLabel>
      <Select
        labelId="filter-select-label"
        id="filter-select-checkbox"
        multiple
        displayEmpty
        value={personName}
        onChange={handleChange}
        input={<Input />}
        renderValue={selected => (selected as string[]).join(', ')}
        // MenuProps={MenuProps}
        fullWidth
      >
        {names.map(name => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={personName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export default FilterSelect
