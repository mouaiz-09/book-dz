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
// تعديل المعلومات








// استخراج ID من الرابط
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');



