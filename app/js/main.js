window.addEventListener('DOMContentLoaded', () => {

  (function entertainmentsSlider(parent) {
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
        // pagination: {
        //   el: parentEl.querySelector(".swiper-pagination"),
        // },

      });
    }
  })('.entertainments__slider');

  (function holidaysHeld(parent) {
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
        // pagination: {
        //   el: parentEl.querySelector(".swiper-pagination"),
        // },

      });
    }
  })('.holidays-held__slider');

  (function turnkeyHolidaySlider() {
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

  // const swiper22 = new Swiper(".holidays-held__slider .slider", {
  //   slidesPerView: 'auto',
  //   spaceBetween: 30,
  //   breakpoints: {
  //     320: {
  //       spaceBetween: 20,
  //       slidesPerView: 1.2,
  //     },
  //     576: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //     991: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });






  // // * ==== Dropdown
  // document.addEventListener('click', e => {
  //   const isDropdownButton = e.target.closest("[data-dropdown-button]")
  //   if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

  //   let currentDropdown;
  //   if (isDropdownButton) {
  //     currentDropdown = e.target.closest('[data-dropdown]');
  //     currentDropdown.classList.toggle('active');
  //   };

  //   document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
  //     if (dropdown === currentDropdown) return;
  //     dropdown.classList.remove('active');
  //   });
  // });


  // // * ==== Toggle Tabs
  // function tabsSlider(
  //   headerSelector,
  //   tabSelector,
  //   contentSelector,
  //   activeClass
  // ) {
  //   const header = document.querySelectorAll(headerSelector);
  //   const tab = document.querySelectorAll(tabSelector);
  //   const content = document.querySelectorAll(contentSelector);

  //   header.forEach(el => {
  //     hideTabContent();
  //     showTabContent();

  //     function hideTabContent() {
  //       content.forEach((item) => {
  //         item.classList.remove('active');
  //       });
  //       tab.forEach((item) => {
  //         item.classList.remove(activeClass);
  //       });
  //     }

  //     function showTabContent(i = 0) {
  //       content[i].classList.add('active');
  //       tab[i].classList.add(activeClass);
  //     }

  //     header.forEach((item) => {
  //       if (item) {
  //         item.addEventListener('click', (e) => {
  //           const target = e.target;

  //           if (
  //             target.classList.contains(tabSelector.replace(/\./, ''))
  //           ) {
  //             tab.forEach((item, i) => {
  //               if (target == item || target.parentNode == item) {
  //                 hideTabContent();
  //                 showTabContent(i);
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   })
  // };
  // tabsSlider(
  //   '.conference-hall__wrapper',
  //   '.conference-hall__button',
  //   '.conference-hall__content',
  //   'conference-hall__button--active'
  // );

  // // * === add more holidays for you
  // (function addHolidayCard() {
  //   const listContainer = document.querySelector('.filters__items');
  //   const addBtn = document.querySelector('.filters__btn');

  //   const namesCard = ['Пакет "Максимум"', 'Пакет "Взрослый"', 'Пакет "Для девочек"', 'Пакет "Для мальчиков"'];
  //   const priceCard = ['900', '300', '500', '490'];
  //   const quantityPeople = ['4', '8', '5', '7'];
  //   const pickerCard = ['Хит', 'Для мальчиков', 'Для девочек', 'Для взрослых', 'Новый', 'Акция'];

  //   function rendomNames() {
  //     return namesCard[Math.floor(Math.random() * namesCard.length)];
  //   }

  //   function rendomPrice() {
  //     return priceCard[Math.floor(Math.random() * priceCard.length)];
  //   }

  //   function rendomPeople() {
  //     return quantityPeople[Math.floor(Math.random() * quantityPeople.length)];
  //   }

  //   function rendomPricker() {
  //     return pickerCard[Math.floor(Math.random() * pickerCard.length)];
  //   }

  //   function generateCard() {
  //     return ` 
  //     <li class="filters__item mix girl">
  //       <article class="filters-card">
  //         <div class="filters-card__img">
  //           <img src="images/content/entertainments/1.jpg" alt="">
  //         </div>
  //         <div class="filters-card__right">
  //           <div class="filters-card__pickers">
  //             <span class="filters-card__picker">${rendomPricker()}</span>
  //           </div>
  //           <div class="filters-card__content">
  //             <div class="filters-card__details">
  //               <h3 class="filters-card__name">${rendomNames()}</h3>
  //               <div class="filters-card__quantity">от ${rendomPeople()} человек</div>
  //               <div class="filters-card__price">от <span>${rendomPrice()} ₽</span> за чел. </div>
  //               <button class="filters-card__btn btn btn--small">Подробнее</button>
  //             </div>
  //             <div class="filters-card__info">
  //               <div class="filters-card__text">
  //                 <p>Новые и необычные развлечения для дружных компаний-это то, что необходимо всем, независимо от
  //                   возраста. Лазертаг-приключения смогут порадовать Вас играми на различный вкус. Полоса препятствий,
  //                   любимая еще с детства компьютерная игра или страшные приведения? Всё это Вы сможете испытать на
  //                   лазертаг-приключениях.</p>
  //               </div>
  //               <button class="filters-card__btn--more">Развернуть</button>
  //               <button class="filters-card__btn btn">Хочу поиграть</button>
  //             </div>
  //           </div>
  //         </div>
  //       </article>
  //     </li>
  //     `;
  //   };

  //   addBtn.addEventListener('click', e => {
  //     listContainer.insertAdjacentHTML('beforeend', generateCard());
  //   });
  // })();

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
  // //                 btn.textContent = 'Свернуть';
  // //               });

  // //             } else {
  // //               content.style.maxHeight = null;
  // //               filtersBtn.forEach(btn => {
  // //                 btn.textContent = 'Равзернуть';
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

  // // (function filtersHolidays() {
  // //   const container = document.querySelector('.filters');
  // //   const mixer = mixitup(container, {
  // //     controls: {
  // //       toggleDefault: 'none',
  // //     }
  // //   });
  // //   mixer.toggleOn('.boy')
  // // })();
});