//Highlighting the current clicked nav bar header option
const headerLiElements = document.querySelectorAll('.header-main-nav li');

headerLiElements.forEach((li) =>
  li.addEventListener('click', (e) => {
    headerLiElements.forEach((l) => l.classList.remove('current'));
    li.classList.add('current');
  })
);

//Adding observer for animating elements when they become visible (e.g- by scrolling)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('row')) {
        entry.target.classList.add('show');
      } //Observing section elements for highlighting corresponding navigation bar li
      else if (entry.target.classList.contains('target-section')) {
        if (entry.target.classList.contains('s-about')) {
          document.querySelector('[title="about"]').click();
        } else if (entry.target.classList.contains('s-works')) {
          document.querySelector('[title="projects"]').click();
        } else if (entry.target.classList.contains('s-contact')) {
          document.querySelector('[title="contact us"]').click();
        } else if (entry.target.classList.contains('s-intro')) {
          document.querySelector('[title="intro"]').click();
        }
      }
    } else {
      //for animation to occure every time row is visible on page, removing show class
      if (entry.target.classList.contains('row')) {
        entry.target.classList.remove('show');
      }
    }
  });
});

const rowElements = document.querySelectorAll('.row');
//telling the observer to observe all sections
rowElements.forEach((element) => observer.observe(element));

const sectionElements = document.querySelectorAll('section');
//telling the observer to observe all sections
sectionElements.forEach((element) => observer.observe(element));
