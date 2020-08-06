import './styles.css';

const root = document.documentElement;
const select = document.querySelector('select') as HTMLSelectElement;
let init = 0;


const selectValue = (ev: Event) => {
  ev.preventDefault();
  const selectElement = ev.target as HTMLSelectElement;
  const time = new Date();
  const mins = time.getUTCMinutes();
  const secs = time.getUTCSeconds();
  const hrsUTC = time.getUTCHours();
  const valueSelect = selectElement.value;
  const hrs = Number.parseInt(valueSelect);
  return init = (3600 * (hrsUTC + hrs)) + (mins * 60) + secs + 1;
};

select.addEventListener('click', selectValue);

const timer = () => {
  root.style.setProperty('--sec', `${init}`);
  root.style.setProperty('--min', `${init / 10}`);
  root.style.setProperty('--hr', `${init / 120}`);
  init++;
};

setInterval(timer, 1000);
