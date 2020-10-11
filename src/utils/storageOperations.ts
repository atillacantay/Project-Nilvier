export const getItem = (name: string) => {
  return localStorage.getItem(name)
}

export const setItem = (name: string, value: string) => {
  localStorage.setItem(name, value)
}

export const removeItem = (name: string) => {
  localStorage.removeItem(name)
}

export const getCookie = (cname: string) => {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export const removeCookie = (cname: string) => {
  document.cookie = cname + '=; Max-Age=0;'
}
