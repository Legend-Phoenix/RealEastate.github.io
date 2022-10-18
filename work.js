// console.log('how are you my firend');
// import Swiper from 'swiper';

// =================CHANGE BACKGROUND HEADER================
function scrollHearder(){
    const header = document.getElementById('header')


    // when the scrol is grearter then 50 wiewport height add the 
    if(this.scrollY >= 50) header.classList.add('scroll-header') ; 
    if(this.scrollY <= 50 ) header.classList.remove('scroll-header') ; 
}
window.addEventListener('scroll' , scrollHearder); 


// ========================== SWIPER POPULAR =======================

var swiperPopular   = new Swiper(".popular_container", {

  spaceBetween: 32, grabCursor: true,centeredSlides: true , slidesPerView:'auto', loop : true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


  
// ======================= VALUE ACCORDION=================
const accordionItems = document.querySelectorAll('.value_accordion-item')


accordionItems.forEach((item) =>{
  const accrodionHeader = item.querySelector('.value_accordion-header')

  accrodionHeader.addEventListener('click', ()=>{

    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)


    // close other if new is open ==========================> 
    if(openItem && openItem!== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem =(item) =>{
  const accrodionContent = item.querySelector('.value_accordion-content')

    if(item.classList.contains('accordion-open')){
      accrodionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
    }else{
      accrodionContent.style.height = accrodionContent.scrollHeight + 'px'
      item.classList.add('accordion-open')
    }
}


// ============================== SCROLL SECTION ACTIVE LINK=======================================

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



// ==================== SHOW SCROLL UP ====================

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up') ; 


  // when the scroll is highter then 360 wiewport height , add the 


  if(this.scrollY >= 350)  scrollUp.classList.add('show-scroll') ; 
}

window.addEventListener('scroll', scrollUp)


// ==================DARK LIGHT THEME===================
 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})