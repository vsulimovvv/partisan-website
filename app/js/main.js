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
  const swiper22 = new Swiper(".holidays-held__slider .slider", {
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

  const swiper4 = new Swiper('.reviews__slider', {
    // slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      320: {

        spaceBetween: 20,
        slidesPerView: 1.2,
      },
      576: {
        slidesPerView: 1.6,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 4,
      },
    },

  });

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