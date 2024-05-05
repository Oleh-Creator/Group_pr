var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    autoHeight:true,
  });
  

  function scrollToElement() {
    var element = document.getElementById("targetElement");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Отримуємо всі елементи, починаючи з hedItLine1 до hedItLine5
  const hedItLines = [hedItLine1, hedItLine2, hedItLine3, hedItLine4, hedItLine5, hedItLine6];
  
  // Додаємо обробник кліків для кожного елемента headItTex
  for (let i = 0; i < 6; i++) {
    const headItTex = document.getElementById(`headItTex${i + 1}`);
    headItTex.onclick = function() {
      // Ховаємо всі елементи hedItLine
      for (let j = 0; j < 6; j++) {
        hedItLines[j].style.display = "none";
      }
      // Показуємо потрібний hedItLine
      hedItLines[i].style.display = "flex";
    };
  }
  
  // Додаємо обробник події прокрутки мишею для сторінки
  window.addEventListener('wheel', function() {
    // Ховаємо всі елементи hedItLine при прокрутці
    for (let j = 0; j < 6; j++) {
      hedItLines[j].style.display = "none";
    }
  });
  
  
  

