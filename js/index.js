window.addEventListener('pageshow', () => {
  document.body.onscroll = () => {
    // On body scroll
    let nav = document.querySelector('.nav');
    let li = document.querySelectorAll('.menu li');
    let label = document.querySelector('.label');
    let lines = document.querySelectorAll('.line');
    // Toggle nav bg-color if scrollY is greater than nav's height.
    nav.classList.toggle('solid', this.scrollY > nav.clientHeight);
    label.classList.toggle('green', this.scrollY > nav.clientHeight);
    lines.forEach((line) => {
      line.classList.toggle('black', this.scrollY > nav.clientHeight);
    });
    if (this.scrollY > nav.clientHeight) {
      li.forEach((el) => {
        if (el.classList.contains('active')) {
          el.classList.replace('active', 'active-colored');
        }
        el.onmouseover = () => {
          li.forEach((el) => {
            el.classList.remove('active-colored');
          });
          el.classList.add('active-colored');
        };
        el.onmouseleave = () => {
          el.classList.remove('active-colored');
        };
      });
    } else {
      li.forEach((el) => {
        if (el.classList.contains('active-colored')) {
          el.classList.replace('active-colored', 'active');
        }
        el.onmouseover = () => {
          li.forEach((el) => {
            el.classList.remove('active');
          });
          el.classList.add('active');
        };
        el.onmouseleave = () => {
          el.classList.remove('active');
        };
      });
    }
  };
  // Gallery Code
  let portfolio = document.querySelector('#portfolio');
  let title = document.querySelector('#project_title');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let index = 0;
  let works = [
    {
      imageUrl: 'chat.jpg',
      title: 'Chat application in PHP',
    },
    {
      imageUrl: 'ilocolokal.jpg',
      title: 'Clothing Website in PHP',
    },
    {
      imageUrl: 'lms.jpg',
      title: 'Library Management System in C#',
    },
    {
      imageUrl: 'snake.jpg',
      title: 'Snake Game in Python',
    },
    {
      imageUrl: 'tdl.jpg',
      title: 'To-Do-List app in PHP',
    },
  ];

  // Setting the default background image and title in portfoloio section
  portfolio.style.backgroundImage = `url(images/${works[0].imageUrl})`;
  title.innerHTML = works[0].title;

  // Defining previous function
  prev.onclick = () => {
    index--;
    if (index < 0) {
      index = works.length - 1;
    }
    portfolio.style.backgroundImage = `url(images/${works[index].imageUrl})`;
    title.innerHTML = works[index].title;
  };
  // Defining next function
  next.onclick = () => {
    index++;
    if (index > works.length - 1) {
      index = 0;
    }
    portfolio.style.backgroundImage = `url(images/${works[index].imageUrl})`;
    title.innerHTML = works[index].title;
  };
});
