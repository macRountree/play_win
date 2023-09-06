document.addEventListener("DOMContentLoaded", () => {
    const scrollToBottomButtom = document.getElementById('btn-ir-arriba');
  
    const scrollToReviews = document.getElementById('to-reviews');
    const scrollToEvent = document.getElementById('to-eventos');
    const scrollToTop = document.getElementById('to-top');
    const scrollToContact = document.getElementById('to-contacto');


    const toReviews = document.getElementById('reviews');
    const toActor = document.getElementById('eventos');
    const toTop = document.getElementById('top');
    const toContact = document.getElementById('contacto');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

  
    scrollToReviews.addEventListener('click', () => {
        const y = getOffset(toReviews).top;
        window.scrollTo({
            top: y-90,
            behavior: "smooth"
        });
    });
    scrollToEvent.addEventListener('click', () => {
        const y = getOffset(toActor).top;
        window.scrollTo({
            top: y-90,
            behavior: "smooth"
        });
    });
    scrollToTop.addEventListener('click', () => {
        const y = getOffset(toTop).top;
        window.scrollTo({
            top: y-90,
            behavior: "smooth"
        });
    });
    scrollToContact.addEventListener('click', () => {
        const y = getOffset(toContact).top;
        window.scrollTo({
            top: y-90,
            behavior: "smooth"
        });
    });

  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToBottomButtom.style.display = 'block';
      } else {
        scrollToBottomButtom.style.display = 'none';
      }
    })
  
    scrollToBottomButtom.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  })
  


  /**
 * Recibe un H1 Tag y regresa un objeto
 * @param {HTMLTitleElement} el Elemento H1 de HTML
 * @returns {{top:number,left:number}}
 */
function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
  }
  return { top: _y, left: _x };
}