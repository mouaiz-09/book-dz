//  wii zin 
const btn_nav = document.getElementById('btn-01');
const section_nav = document.getElementById('part');
const hestory_section = document.getElementById('hestory_section')



btn_nav.onclick = () => {
  section_nav.classList.toggle('h')

}





var data =
  [
    {
      "title": "الفيل الأزرق",
      "author": "أحمد مراد",
      "cover": "https://upload.wikimedia.org/wikipedia/ar/9/93/Al_Feel_Al_Azraq.jpg"
    },
    {
      "title": "عزازيل",
      "author": "يوسف زيدان",
      "cover": "https://upload.wikimedia.org/wikipedia/ar/thumb/7/70/%D8%B9%D8%B2%D8%A7%D8%B2%D9%8A%D9%84.jpg/220px-%D8%B9%D8%B2%D8%A7%D8%B2%D9%8A%D9%84.jpg"
    },
    {
      "title": "موسم الهجرة إلى الشمال",
      "author": "الطيب صالح",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/MigrationToTheNorth.jpg/220px-MigrationToTheNorth.jpg"
    },
    {
      "title": "1984",
      "author": "جورج أورويل",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/1984first.jpg/220px-1984first.jpg"
    },
    {
      "title": "الخيميائي",
      "author": "باولو كويلو",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/TheAlchemist.jpg/220px-TheAlchemist.jpg"
    },
    {
      "title": "شيفرة دافنشي",
      "author": "دان براون",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/TheDaVinciCode.jpg/220px-TheDaVinciCode.jpg"
    },
    {
      "title": "مئة عام من العزلة",
      "author": "غابرييل غارسيا ماركيز",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/One_Hundred_Years_of_Solitude_%28Marquez%29.jpg/220px-One_Hundred_Years_of_Solitude_%28Marquez%29.jpg"
    },
    {
      "title": "الجريمة والعقاب",
      "author": "فيودور دوستويفسكي",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crime_and_Punishment_cover.jpg/220px-Crime_and_Punishment_cover.jpg"
    },
    {
      "title": "سيد الخواتم",
      "author": "جي. آر. آر. تولكين",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Lord_of_the_Rings_cover.jpg/220px-The_Lord_of_the_Rings_cover.jpg"
    },
    {
      "title": "هاري بوتر وحجر الفيلسوف",
      "author": "ج. ك. رولينج",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Harry_Potter_and_the_Philosopher%27s_Stone.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone.jpg"
    },
    {
      "title": "الطريق",
      "author": "كورماك ماكارثي",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/The_Road_Cover.jpg/220px-The_Road_Cover.jpg"
    },
    {
      "title": "أولاد حارتنا",
      "author": "نجيب محفوظ",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Awladhatna.jpg/220px-Awladhatna.jpg"
    },
    {
      "title": "مزرعة الحيوان",
      "author": "جورج أورويل",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Animal_Farm_%28illustrated%29.jpg/220px-Animal_Farm_%28illustrated%29.jpg"
    },
    {
      "title": "ذهب مع الريح",
      "author": "مارغريت ميتشل",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Gone_with_the_Wind_%28book%29_cover.jpg/220px-Gone_with_the_Wind_%28book%29_cover.jpg"
    },
    {
      "title": "الحرب والسلم",
      "author": "ليو تولستوي",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/War_and_Peace_%28Tolstoy%29.jpg/220px-War_and_Peace_%28Tolstoy%29.jpg"
    },
    {
      "title": "البؤساء",
      "author": "فيكتور هوغو",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Les_Mis%C3%A9rables_1862.jpg/220px-Les_Mis%C3%A9rables_1862.jpg"
    },
    {
      "title": "مدن الملح",
      "author": "إبراهيم الكوني",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mudun_al_Milh.jpg/220px-Mudun_al_Milh.jpg"
    },
    {
      "title": "الطاغية",
      "author": "أحمد مراد",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Book_cover_placeholder.jpg/220px-Book_cover_placeholder.jpg"
    },
    {
      "title": "ذاكرة الجسد",
      "author": "أحلام مستغانمي",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Dhakirat_Aljasad.jpg/220px-Dhakirat_Aljasad.jpg"
    },
    {
      "title": "الشيخ والبحر",
      "author": "إرنست همنغواي",
      "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/The_Old_Man_and_the_Sea.jpg/220px-The_Old_Man_and_the_Sea.jpg"
    }]




let dz = ["maouz", "dzdzd"]

for (let i = 0; i < data.length; i++) {
let id = i ;

  // amke a card 
  const link = document.createElement('a');
  link.href = `/watch/index.html?id=`+i;
  const card = document.createElement('div')
  card.classList.add('card')
  const box_img = document.createElement('div')
  box_img.classList.add('img')
  const img = document.createElement('img')
  img.src = "/img/img.jpg"
  img.style = 'width: 100%'
  img.classList.add('book-img')

  const desc = document.createElement('div')
  const titl = document.createElement('h4')
  titl.textContent = data[i].title


  const author = document.createElement('p')
  author.textContent = data[i].author


  box_img.appendChild(img)

  desc.appendChild(titl)
  desc.appendChild(author)
  card.appendChild(box_img)
  card.appendChild(desc)
  link.appendChild(card)

  hestory_section.appendChild(link)

}


/*
// amke a card 
  const card = document.createElement('div')
  card.classList.add('card')
  const box_img = document.createElement('div')
  box_img.classList.add('img')
  const img = document.createElement('img')
  img.src = data[i].cover
  img.style = 'width: 100%'
  img.classList.add('book-img')

  const desc = document.createElement('div')
  const titl = document.createElement('h4')
  titl.textContent = data[i].title


  const author = document.createElement('h4')
  author.textContent = data[i].author


  box_img.appendChild(img)

  desc.appendChild(titl)
  desc.appendChild(author)
  card.appendChild(box_img)
  card.appendChild(desc)
  hestory_section.appendChild(card)

*/
