var xhr = XMLHttpRequest()
xhr.open("GET","/api", false)
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.readyState == 200) {
      console.log(xhr.responseText)
    }
  }
}
xhr.send(null)