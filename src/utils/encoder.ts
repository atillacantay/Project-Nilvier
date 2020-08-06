export const encoder = (string: string) => {
  if (string) {
    //gets keyword from pathname and converts it to the true format
    return string.split('/')[4].trim().split(' ').join('%20')
  } else return null
}
