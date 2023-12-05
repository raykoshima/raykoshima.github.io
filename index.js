// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})




//my js script
function printAlphabets() {
  // สร้างตัวแปรเพื่อเก็บตัวอักษร A-Z
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // ใช้ forEach เพื่อวนลูปผ่านทุกตัวอักษร
alphabets.split('').forEach((alphabet, index) => {
    // ใช้ setTimeout เพื่อกำหนดระยะเวลาการแสดงผล
    setTimeout(() => {
      document.getElementById("atoz").innerHTML = alphabet;
      console.log(alphabet);
    }, index * 1000); // 1000 milliseconds = 1 วินาที
  });
}
printAlphabets();

  function clicktochange() {
    document.getElementById("clicktochange").innerHTML = "Now you don't<br><img src='assets/gif/apex-mirage.gif'>";
}

function myFunction2() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo3").innerHTML = text;
}

function catapilol() {
  fetch("https://catfact.ninja/fact")
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      let txt = "";
        for (let x in data) {
          txt += data[x] + " ";
        document.getElementById("catcat").innerHTML = txt;
        };
    
      return data;
    })  
    

}

var typed = new Typed('#element', {
  strings: ['programming','play minecraft.', 'play apex legends'],
  typeSpeed: 60,
  backDelay: 4000,
  smartBackspace: true,
  showCursor: true,
  cursorChar: '<b><font color="#B1B2FF">|</font></b>',
  autoInsertCss: true,
  loop: true
});