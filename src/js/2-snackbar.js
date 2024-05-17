import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', createPromise);

function createPromise(e) {
  e.preventDefault();

  const delay = +this.elements.delay.value;
  const state = this.elements.state.value;
  console.log(delay);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise

    .then(delay => {
      iziToast.success({
        title: 55,
        message: `OK Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59A10D',
        color: '#fff',
      });
    })

    .catch(delay => {
      iziToast.error({
        message: `Error Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#EF4040',
      });
    });
}
