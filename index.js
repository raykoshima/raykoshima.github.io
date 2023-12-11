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
function calcirisl22(radius) {
  return 2 * Math.PI * radius;
}
function calcirisl() {
  let inputElement = document.getElementById("calcirisl");
  let resultElement = document.getElementById("atoz");

  let radius = parseFloat(inputElement.value);

  if (!isNaN(radius)) {
      let circumference = calcirisl22(radius);
      resultElement.textContent = circumference.toFixed(2);
  } else {
      resultElement.textContent = "กรุณากรอกค่าที่ถูกต้อง";
  }
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


function randomnumberr(){
  document.getElementById("showrannumber").innerHTML = "สุ่มตัวเลข: " + Math.floor(Math.random() * 11);
}

function bigtextt(){
  var str = prompt("Enter name ");
  var res = str.slice(0,1).toUpperCase()+str.slice(1);
  document.getElementById("showbigtext").innerHTML = "ตัวอักษรตัวแรกใหญ่เสมอ: " + res;
  alert(res);
}

var typed = new Typed('#element', {
  strings: ['programming.','play minecraft.', 'cat.'],
  typeSpeed: 60,
  backDelay: 4000,
  smartBackspace: true,
  showCursor: true,
  cursorChar: '<b><font color="#FFFFFFFF">|</font></b>',
  autoInsertCss: true,
  loop: true
});

//getRandomQuote
function getRandomQuote() {
  const apiUrl = 'https://animechan.xyz/api/random';
  fetch(apiUrl).then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
    .then(dataText => {
      console.log(dataText);
      const imageAPI = `https://api.jikan.moe/v4/characters?q=${dataText.character}`
      fetch(imageAPI).then(responseImage =>{
        if(!responseImage.ok){
          throw new Error(`Network response was not ok: ${responseImage.status}`);
        }
        return responseImage.json();
      }).then(image => {
        // console.log(image);
        console.log(image.data[0].images.webp.image_url);
        const animeimage = document.getElementById('animeimage');
        animeimage.src = image.data[0].images.webp.image_url;
      })
      document.getElementById("catcat").innerHTML = dataText.quote + "<br>- " + dataText.character +" ("+dataText.anime+")";
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

async function getAnimePoster(){
  const parameterValue = document.getElementById('posterfinder').value;

  const posterAPI = `https://api.jikan.moe/v4/anime?q=${parameterValue}&sfw`;
  fetch(posterAPI).then(responsePoster =>{
    if(!responsePoster.ok){
      throw new Error(`Network response was not ok: ${responseImage.status}`);
    }
    return responsePoster.json();
  }).then(poster =>{
    console.log(poster.data[0].images.webp.image_url);
    const PosterImage = document.getElementById('PosterImage');
    PosterImage.src = poster.data[0].images.webp.image_url;
  })
}
