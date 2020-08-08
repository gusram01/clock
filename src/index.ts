import './styles.css';

const root = document.documentElement;
const cover = document.getElementById('cover') as HTMLDivElement;
const time = new Date();
const mins = time.getMinutes();
const secs = time.getSeconds();
const hrs = time.getHours();
let init = (3600 * hrs) + (mins * 60) + secs + 1;

const insertMarks = (parent: HTMLElement) => {
  const fragment = new DocumentFragment();

  for (let i = 0; i < 24; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'mark');
    div.innerHTML = `
      <span class="mark_min">&mdash;</span>
      <span class="mark_min">&mdash;</span>
    `;
    fragment.appendChild(div);
  }
  parent.appendChild(fragment.cloneNode(true));
}

const styleMarks = (parent: HTMLElement, childsClass: string) => {
  const array = parent.querySelectorAll(childsClass) as NodeListOf<HTMLDivElement>;
  let deg = 1;

  array.forEach(element => {
    (deg % 5 === 0) ? deg++ : deg;
    element.style.transform = `rotateZ(${6 * deg++}deg)`;
  })
}

insertMarks(cover);
styleMarks(cover, '.mark');
(function timer() {
  root.style.setProperty('--sec', `${init}`);
  root.style.setProperty('--min', `${init / 10}`);
  root.style.setProperty('--hr', `${init / 120}`);
  init++;
  setTimeout(timer, 1000);
})();

