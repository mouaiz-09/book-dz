//  wii zin 
const btn_nav = document.getElementById('btn-01');
const section_nav = document.getElementById('part');
const book = document.getElementById('book')
const hestroy = document.getElementById('hestory_section')


btn_nav.onclick = () => {
  section_nav.classList.toggle('h')

}







//book section


fetch('https://back-end-v1.onrender.com/api/main/books')
  .then(async response => await response.json()) // نحول الاستجابة إلى JSON
  .then(data => {
   
    

    for (let i = 0; i < data.books.length; i++) {



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
      titl.textContent = data.books[i].name
      img.src = data.books[i].cover
      author.textContent = data.books[i].auter

      link.href = `./watch/index.html?id=` + data.books[i]._id;

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
    const nofound = document.getElementById('not_found');
    nofound.classList.remove('none')
    link.style.display = "none";
    cont.style.display = "none";

  });

//novels section

fetch("https://back-end-v1.onrender.com/api/main/novels")
  .then(async response => await response.json()) // نحول الاستجابة إلى JSON
  .then(data => {
    
    
    
    console.log(data.books);
    for (let i = 0; i < data.novales.length; i++) {





      // amke a card 
      const link = document.createElement('a');
      const card = document.createElement('div');
      card.classList.add('card')
      const box_img = document.createElement('div')
      box_img.classList.add('img')
      const img = document.createElement('img')
      img.style = 'width: 100%'
      img.classList.add('book-img')

      const desc = document.createElement('div')
      const titl = document.createElement('h4')
      const author = document.createElement('p')
      const scoor = document.createElement('p')


      // تعمار المعلومات
      titl.textContent = data.novales[i].name
      img.src = data.novales[i].cover
      author.textContent = data.novales[i].auter
      


      link.href = `./watch/index.html?id=` + data.novales[i]._id;

      //التلصاق
      box_img.appendChild(img)
      desc.appendChild(titl)
      desc.appendChild(author)
      desc.appendChild(scoor)
      card.appendChild(box_img)
      card.appendChild(desc)
      link.appendChild(card)
      hestory_section.appendChild(link)

    }


  })
  .catch(error => {
    console.error('حدث خطأ:', error);
    const cont = document.getElementById("cont_hest");
    const link = document.getElementById("moor_hest");
    const nofound = document.getElementById('not_found_hest');
    nofound.classList.remove('none')
    link.style.display = "none";
    cont.style.display = "none";

  });










