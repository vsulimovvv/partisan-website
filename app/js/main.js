window.addEventListener('DOMContentLoaded', () => {
  function sliderThreeSlidesPerView(parent) {
    const parentEl = document.querySelector(parent);
    if (parentEl) {
      const slider = parentEl.querySelector('.slider');
      const swiper = new Swiper(slider, {
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
          nextEl: parentEl.querySelector(".swiper-button-next"),
          prevEl: parentEl.querySelector(".swiper-button-prev"),
        },
      });
    }
  };
  sliderThreeSlidesPerView('.entertainments__slider');
  sliderThreeSlidesPerView('.news__slider');
  sliderThreeSlidesPerView('.holidays-held__slider');

  (function sliderArrowCenter() {
    const swiper = new Swiper(".slider-center", {
      slidesPerView: 'auto',
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })();

  (function reviewsSlider() {
    const swiper4 = new Swiper('.reviews__slider', {
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
  })();

  (function videosSlider() {
    const swiper = new Swiper(".slider-videos", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
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
  })();

  // * ==== Drop Menu
  (function dropMenu() {
    document.addEventListener('click', e => {
      const overlay = document.querySelector('.overlay');
      const body = document.querySelector('body');
      const isDropdownButton = e.target.closest("[data-dropdown-button]")
      if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
      };

      document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    });
  })();

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

  // * === add more holidays for you
  (function addHolidayCard() {
    const listContainer = document.querySelector('.filters__items');
    const addBtn = document.querySelector('.filters__btn');

    if (addBtn) {
      const namesCard = ['?????????? "????????????????"', '?????????? "????????????????"', '?????????? "?????? ??????????????"', '?????????? "?????? ??????????????????"'];
      const priceCard = ['900', '300', '500', '490'];
      const quantityPeople = ['4', '8', '5', '7'];
      const pickerCard = ['??????', '?????? ??????????????????', '?????? ??????????????', '?????? ????????????????', '??????????', '??????????'];

      function rendomNames() {
        return namesCard[Math.floor(Math.random() * namesCard.length)];
      };

      function rendomPrice() {
        return priceCard[Math.floor(Math.random() * priceCard.length)];
      };

      function rendomPeople() {
        return quantityPeople[Math.floor(Math.random() * quantityPeople.length)];
      };

      function rendomPricker() {
        return pickerCard[Math.floor(Math.random() * pickerCard.length)];
      };

      function generateCard() {
        return ` 
      <li class="filters__item mix girl">
        <article class="filters-card">
          <div class="filters-card__img">
            <img src="images/content/entertainments/1.jpg" alt="">
          </div>
          <div class="filters-card__right">
            <div class="filters-card__pickers">
              <span class="filters-card__picker">${rendomPricker()}</span>
            </div>
            <div class="filters-card__content">
              <div class="filters-card__details">
                <h3 class="filters-card__name">${rendomNames()}</h3>
                <div class="filters-card__quantity">???? ${rendomPeople()} ??????????????</div>
                <div class="filters-card__price">???? <span>${rendomPrice()} ???</span> ???? ??????. </div>
                <button class="filters-card__btn btn btn--small">??????????????????</button>
              </div>
              <div class="filters-card__info">
                <div class="filters-card__text">
                  <p>?????????? ?? ?????????????????? ?????????????????????? ?????? ?????????????? ????????????????-?????? ????, ?????? ???????????????????? ????????, ???????????????????? ????
                    ????????????????. ????????????????-?????????????????????? ???????????? ???????????????????? ?????? ???????????? ???? ?????????????????? ????????. ???????????? ??????????????????????,
                    ?????????????? ?????? ?? ?????????????? ???????????????????????? ???????? ?????? ???????????????? ????????????????????? ?????? ?????? ???? ?????????????? ???????????????? ????
                    ????????????????-????????????????????????.</p>
                </div>
                <button class="filters-card__btn--more">????????????????????</button>
                <button class="filters-card__btn btn">???????? ????????????????</button>
              </div>
            </div>
          </div>
        </article>
      </li>
      `;
      };

      addBtn.addEventListener('click', e => {
        listContainer.insertAdjacentHTML('beforeend', generateCard());
      });
    }
  })();

  (function showMenu() {
    const menuBtn = document.querySelector('.header__menu--mobile');
    const menu = document.querySelector('.menu-mobile');
    const body = document.querySelector('body');
    const links = document.querySelectorAll('.menu-mobile__link');

    menuBtn.addEventListener('click', e => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    links.forEach(l => {
      l.addEventListener('click', e => {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    });
  })();

  // // * === Show More
  // // function showMore() {
  // //   const toggleAccordion = (accordionControl, accordionContent, accordion) => {
  // //     const filters = document.querySelectorAll(accordionControl);
  // //     const filtersBtn = document.querySelectorAll('.filters-card__btn--more');
  // //     if (filters) {
  // //       filters.forEach(el => {
  // //         if (el) {
  // //           el.addEventListener('click', e => {
  // //             const target = e.target.closest(accordion);
  // //             const content = target.querySelector(accordionContent);

  // //             target.classList.toggle('active');

  // //             if (target.classList.contains('active')) {
  // //               content.style.maxHeight = content.scrollHeight + 'px';
  // //               filtersBtn.forEach(btn => {
  // //                 btn.textContent = '????????????????';
  // //               });

  // //             } else {
  // //               content.style.maxHeight = null;
  // //               filtersBtn.forEach(btn => {
  // //                 btn.textContent = '????????????????????';
  // //               });
  // //             }
  // //           });
  // //         }
  // //       });
  // //     };
  // //   };

  // //   toggleAccordion('.filters-card__btn--more', '.filters-card__text', '.filters-card');
  // // };
  // // showMore();

  (function filtersHolidays() {
    const container = document.querySelector('.filters');
    if (container) {
      const mixer = mixitup(container, {
        controls: {
          toggleDefault: 'none',
        }
      });
      mixer.toggleOn('.boy')
    }
  })();
});