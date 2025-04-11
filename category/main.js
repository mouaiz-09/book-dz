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




