import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputEl = document.querySelector('input');
const btnEl = document.querySelector('.btn');
const timer = document.querySelector('.timer');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      return iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      userSelectedDate = selectedDate;
      btnEl.disabled = false;
    }
  },
};

let userSelectedDate = null;
let timerInterval = null;
btnEl.disabled = true;

btnEl.addEventListener('click', startTimer);

function startTimer() {
  btnEl.disabled = true;
  inputEl.disabled = true;

  if (userSelectedDate) {
    updateMarkup(userSelectedDate);
  }

  timerInterval = setInterval(updateMarkup, 1000);
}

function updateMarkup() {
  const currentData = Date.now();
  const diff = userSelectedDate - currentData;
  const { days, hours, minutes, seconds } = convertMs(diff);

  if (diff <= 1000) {
    clearInterval(timerInterval);
    inputEl.disabled = false;
  }

  timer.querySelector('[data-days]').textContent = addZero(days);
  timer.querySelector('[data-hours]').textContent = addZero(hours);
  timer.querySelector('[data-minutes]').textContent = addZero(minutes);
  timer.querySelector('[data-seconds]').textContent = addZero(seconds);
}

function addZero(e) {
  return String(e).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', options);
