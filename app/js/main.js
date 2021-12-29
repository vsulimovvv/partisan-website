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


  // * ==== Toggle Tabs
  function tabsSlider(
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass
  ) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach(el => {
      hideTabContent();
      showTabContent();

      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }

      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }

      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;

            if (
              target.classList.contains(tabSelector.replace(/\./, ''))
            ) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    })
  };
  tabsSlider(
    '.conference-hall__wrapper',
    '.conference-hall__button',
    '.conference-hall__content',
    'conference-hall__button--active'
  );
  const mixer = mixitup('.filters', {
    controls: {
      toggleDefault: 'none',
    }
  });

  mixer.toggleOn('.boy')

  // function filtersHoliday() {
  //   const items = document.querySelectorAll('.filters__item');
  //   const btns = document.querySelectorAll('.filters__buttons > button');

  //   btns.forEach(btn => {
  //     btn.addEventListener('click', e => {
  //       let target = e.target;
  //       if (target.tagName !== 'BUTTON') return false;

  //       let filterClass = target.dataset['filter'];

  //       items.forEach(item => {
  //         item.classList.remove('hide');
  //         item.style.dispaly = 'block';
  //         if (!item.classList.contains(filterClass)) {
  //           item.classList.add('hide');
  //           item.style.dispaly = 'none';
  //         }
  //       });
  //     });
  //   });
  // };
  // filtersHoliday();
});