document.addEventListener('DOMContentLoaded', () => {
  const choseDate = new Date(2022, 2, 31);

  const daysValue = document.querySelector('#days');
  const hoursValue = document.querySelector('#hours');
  const minutesValue = document.querySelector('#minutes');
  const secondsValue = document.querySelector('#seconds');

  const daysText = document.querySelector('#days-text');
  const hoursText = document.querySelector('#hours-text');
  const minutesText = document.querySelector('#minutes-text');
  const secondsText = document.querySelector('#seconds-text');

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  function time() {
    const currentDay = new Date();
    let leftTime = choseDate - currentDay;

    daysValue.textContent = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    hoursValue.textContent = Math.floor(leftTime / 1000 / 60 / 60) % 24;
    minutesValue.textContent = Math.floor(leftTime / 1000 / 60) % 60;
    secondsValue.textContent = Math.floor(leftTime / 1000) % 60;

    daysText.textContent = declOfNum(daysValue.textContent, ['день', 'дня', 'дней'])
    hoursText.textContent = declOfNum(hoursValue.textContent, ['час', 'часа', 'часов'])
    minutesText.textContent = declOfNum(minutesValue.textContent, ['минута', 'минуты', 'минут'])
    secondsText.textContent = declOfNum(secondsValue.textContent, ['секунда', 'секунды', 'секунд'])
  };

  time();
  setInterval(time, 1000);
});