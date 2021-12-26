window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper(".slider-center", {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const swiper2 = new Swiper(".slider-videos", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1.2,
      },
      576: {
        slidesPerView: 2.2,
        spaceBetween: 25,
      },
      900: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const slider = document.querySelector('.entertainments__slider .slider');
  // const parent = document.querySelectorAll('.entertainments__slider');

  const swiper3 = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1.2,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // const showMenu = () => {
  //   const menuBtn = document.querySelector('.header__toggle');
  //   const menu = document.querySelector('.main-menu');
  //   const body = document.querySelector('body');
  //   const overlay = document.querySelector('.overlay');

  //   menuBtn.addEventListener('click', e => {
  //     menu.classList.toggle('active');
  //     menuBtn.classList.toggle('active');
  //     overlay.classList.toggle('active');
  //     body.classList.toggle('no-scroll');
  //   });

  //   overlay.addEventListener('click', e => {
  //     menu.classList.remove('active');
  //     overlay.classList.remove('active');
  //     body.classList.remove('no-scroll');
  //     menuBtn.classList.remove('active');
  //   });

  //   // overlay.addEventListener('click', e => {
  //   // menu.classList.remove('active');
  //   // menuBtn.classList.remove('active');
  //   // overlay.classList.remove('active');
  //   // body.classList.remove('no-scroll');
  //   // });

  // };

  // showMenu();




  
  // * ==== Dropdown
  document.addEventListener('click', e => {
    const isDropdownButton = e.target.closest("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    };

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  });
});