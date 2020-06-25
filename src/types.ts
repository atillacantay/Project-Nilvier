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
