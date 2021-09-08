const date = '1 Jan 2022';

function countdown(){
  const newDate = new Date(date);
  const currentDate = new Date();
  
  const timeRemainingInSeconds = (newDate - currentDate) / 1000;
  
  // const months = Math.floor(timeRemainingInSeconds / 3600 / 24 / 30); // Temps restant en mois
  const days = Math.floor(timeRemainingInSeconds / 3600 / 24);  // Temps restant en jours
  const hours = Math.floor(timeRemainingInSeconds / 3600) % 24; // Temps restant en heures
  const minutes = Math.floor(timeRemainingInSeconds / 60) % 60; // Temps restant en minutes
  const seconds = Math.floor(timeRemainingInSeconds % 60);

  // document.getElementById('months').innerHTML = months;
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = formatTime(hours);
  document.getElementById('minutes').innerHTML = formatTime(minutes);
  document.getElementById('seconds').innerHTML = formatTime(seconds);

}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);