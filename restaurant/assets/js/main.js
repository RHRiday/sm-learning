var comparable = [];

/**
 * Adding / Removing from comparable list
 */
function addToCompare(btn) {
  thisIndex = $(btn).parent().data('id');
  if (comparable.includes(thisIndex)) {
    comparable.splice(comparable.indexOf(thisIndex), 1);
    $(btn).text('Add to Compare');
    $('.item-' + thisIndex).remove();
  } else {
    comparable.push(thisIndex);
    $(btn).text('Remove from Compare');
    $('#compareItems').append(`
          <div class="col item-` + thisIndex + `">
            <div class="card h-100">
              <img src="` + data[thisIndex].img + `" class="card-img-top w-75 m-auto">
              <div class="card-body">
                <h5 class="card-title text-center">` + data[thisIndex].name + `</h5>
                <ul class="list-group list-group-flush menu-item">
                  <li class="list-group-item ingredients">`+ data[thisIndex].type +`</li>
                  <li class="list-group-item ingredients">`+ data[thisIndex].amount +`</li>
                  <li class="list-group-item price"> $`+ data[thisIndex].price +`</li>
                </ul>
              </div>
            </div>
          </div>
  `);
  }
  console.log(comparable);
  $('#compare-counter').text(comparable.length);
}

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * JSON Data
   */
  data.forEach((e, index) => {
    $('#menuItems').append(`
          <div class="col-lg-4 menu-item" data-id="` + index + `">
            <a href="` + e.img + `" class="glightbox">
              <img src="` + e.img + `" class="menu-img img-fluid">
            </a>
            <h4>` + e.name + `</h4>
            <p class="ingredients">
              Lorem, deren, trataro, filede, nerada
            </p>
            <p class="price">
              $` + e.price + `
            </p>
            <button class="btn btn-danger btn-book-a-table" onclick="addToCompare(this)">Add to compare</button>
          </div>
      `);
  });
});