import { IconType } from 'react-icons/lib'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core'

export interface IGifObject {
  id: string
  title: string
  import_datetime: string
  username: string
  images: {
    original: {
      url: string
    }
  }
}

export interface ITimelineItem {
  id: number
  icon: IconType | OverridableComponent<SvgIconTypeMap>
  title: string
  date: string
  chips?: { key: number; label: string }[]
  content: string
  website?: string
}
