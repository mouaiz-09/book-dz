//  wii zin 
const btn_nav = document.getElementById('btn-01');
const section_nav = document.getElementById('part');
const hestory_section = document.getElementById('hestory_section')
const btn_clos = document.getElementById('clos');
const sher_page = document.getElementById('sher');
const btn_sher = document.getElementById('sher_btn');
const input = document.getElementById('inp_book_sher')


// مشاركة الرابط
function sher_value() {
  let url = location.href;
  input.value = url;
}
sher_value();
// فتح صفحة مشاركة الكتاب
btn_sher.onclick = () => {
  sher_page.classList.remove('none')

}

// غلق صفحة مشاركة الكتاب
btn_clos.onclick = () => {
  sher_page.classList.add('none')

}


// فتح صفحة خريطة الموقع
btn_nav.onclick = () => {
  section_nav.classList.toggle('h')

}

function copyText() {
  // نجيب النص
  var text = input.value;

  // ننسخو للكليب بورد
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("تم نسخ النص!");
    }, function (err) {
      alert("فشل النسخ: " + err);
    });
}








// استخراج ID من الرابط
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');
//استخراج المعلومات من id
fetch('https://book-dz-v1.onrender.com/book/' + bookId)
  .then(async response => await response.json())
  .then(data => {
    //var
    const imgcover = document.getElementById('cover');
    const titel = document.getElementById('title');
    const auther = document.getElementById('author');
    const scoor = document.getElementById('rating')
    const dw = document.getElementById('downloadBtn')


    // data
    titel.innerHTML = data.name;
    auther.innerHTML = data.auter;
    imgcover.src = data.cover;
    dw.href = data.link




    //scoor nember:


    if (data.scoor ) {
      scoor.innerHTML =""
      const x = data.scoor;
    
      
      for (let i = 0; i <= x; i++) {
        if(i==5){
          break;
        }
        else{

          scoor.innerHTML += `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`
        }
        
      }

    }
    else if (data.scoor == 0) {
      scoor.innerHTML = ' '
    }



  })

// المقترحات


fetch('https://book-dz-v1.onrender.com/books')
  .then(async response => await response.json()) // نحول الاستجابة إلى JSON
  .then(data => {



    for (let i = 0; i < data.length; i++) {
      if (i >= 7) {
        break;

      }


      // amke a card 
      const link = document.createElement('a');
      const card = document.createElement('div')
      card.classList.add('card')
      const box_img = document.createElement('div')
      box_img.classList.add('img')
      const img = document.createElement('img')
      img.style = 'width: 100%'
      img.classList.add('book-img')
      const author = document.createElement('p')
      const desc = document.createElement('div')
      const titl = document.createElement('h4')
      //  تعما ر المعلومات
      titl.textContent = data[i].name
      img.src = data[i].cover
      author.textContent = data[i].auter
      link.href = `../watch/index.html?id=` + data[i]._id;


      box_img.appendChild(img)

      desc.appendChild(titl)
      desc.appendChild(author)
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




