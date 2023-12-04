const print = console.log;
const colors = ['#409d9c', '#80a0ef', '#ef80c8', '#c6ffad', '#f3dc98', '#f39e98', '#3e525f'];

const body = document.querySelector('body');

const MAX_WITHHYN = 100;

const fill_body = () => {
     for (let i = 0; i < MAX_WITHHYN; i++) {
          const withh = document.createElement('div');
          withh.setAttribute('class', 'withh');
          withh.style.width = ((Math.random() * 10000 % 6) + 6) + 'px';
          withh.style.height = ((Math.random() * 10000 % 6) + 6) + 'px';
          withh.style.backgroundColor = colors[Math.floor(Math.random() * 100000 % colors.length)];
          withh.style.opacity = 0.8;
          withh.style.position = 'absolute';
          withh.style.top = Math.random() * 100000 % 101 + '%';
          withh.style.left = Math.random() * 100000 % 101 + '%';
          withh.style.borderRadius = ((Math.random() * 100000 % 100) + 50) + '%';
          withh.style.filter = 'blur(1px)';

          body.appendChild(withh);
     }
}

window.onload = fill_body;