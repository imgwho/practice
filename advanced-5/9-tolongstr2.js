function truncate(str, maxlen) {
  if(str.length > maxlen) {
    return str.substr(0, maxlen) + '...'
  }else {
    return str
  }
}