// wii zin cv

//فتح وغلق home
const btn_nav = document.getElementById('btn-01');
const section_nav = document.getElementById('part');
const hestory_section = document.getElementById('hestory_section')
btn_nav.onclick = () => {
    section_nav.classList.toggle('h')

}
onload = () => {
    const input = document.getElementById('srech');
    input.focus()

}


// serch 
const btn = document.getElementById('submit')
function srch() {
    const input = document.getElementById('srech');
    const url = document.getElementById('url')
    const data = input.value;
    url.href += `?book=${data}`;
    console.log(data);


}

btn.onclick = () => {
    srch()
}

//book section

fetch('https://book-dz-v1.onrender.com/books')
.then(async response => await response.json()) // نحول الاستجابة إلى JSON
.then(data => {

  for (let i = 0; i < data.length; i++) {
    console.log();



    // amke a card 
    const link = document.createElement('a');
    const card = document.createElement('div')
    card.classList.add('card')
    const box_img = document.createElement('div')
    box_img.classList.add('img')
    const img = document.createElement('img')
    img.style = 'width: 100%'
    img.classList.add('book-img')

    const desc = document.createElement('div')
    const titl = document.createElement('h4')
    const author = document.createElement('p')

    // تعمار المعلومات
    titl.textContent = data[i].name
    img.src = data[i].cover
    author.textContent = data[i].auter

    link.href = `../watch/index.html?id=` + data[i]._id;

    //التلصاق
    box_img.appendChild(img)
    desc.appendChild(titl)
    desc.appendChild(author)
    card.appendChild(box_img)
    card.appendChild(desc)
    link.appendChild(card)
   book.appendChild(link)

  }


})
.catch(error => {
  console.error('حدث خطأ:', error);
  const cont = document.getElementById("cont");
  const link = document.getElementById("moor");
  const nofound=document.getElementById('not_found');
  nofound.classList.remove('none')
  link.style.display = "none";
  cont.style.display = "none";

});




