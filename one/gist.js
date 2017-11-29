let idlist =
  'http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'

fetch(idlist).then(res => res.json()).then(res => {
  // console.log(res.data[0])
  let id = res.data[0]
  console.log(id)
  let data =
    `http://v3.wufazhuce.com:8000/api/onelist/${id}/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`
  fetch(data).then(res => res.json()).then(res => {
    console.log(res)
  })
})



let html =
  `
  <div class="item">
      <img class="fp-one-imagen" src="${item.hp_img_url}" alt="">
      <div class="fp-one-imagen-footer">
        ${item.hp_author} 
      </div>
      <div class="fp-one-cita-wrapper">
        <div class="fp-one-date">
          <p class="titulo">${item.hp_title}</p>
          <p class="dom">${day}</p>
          <p class="may">Nov ${year}</p>
      </div>
      <div class="fp-one-cita">
        ${item.hp_content}
      </div>
    </div>
  </div>`
        