const buttonShow = document.querySelector('.button');
const container = document.querySelector('.container');
const calendarDiv = document.createElement('div');
calendarDiv.setAttribute('id', 'calendar');
const buttonHide = document.createElement('button');
calendarDiv.style.visibility = 'hidden';
buttonHide.setAttribute('id', 'calendlang');
buttonHide.textContent = 'Hide Calendar'; // Setting the textContent for the button
buttonShow.textContent = 'Show Calendar'; // Setting the textContent for the button

buttonShow.addEventListener('click', function() {
  container.appendChild(calendarDiv);
  calendarDiv.style.visibility = 'visible';
});

document.getElementById('russianBtn').addEventListener('click', function() {
  document.getElementById('calendlang').textContent = 'Спрятать Календарь'; // Add this line
});

document.getElementById('englishBtn').addEventListener('click', function() {
   document.getElementById('calendlang').textContent = 'Hide Calendar'; // Add this line
});
buttonHide.addEventListener('click', () => {
calendarDiv.style.visibility = 'hidden';
});

calendarDiv.appendChild(buttonHide);
container.appendChild(buttonShow);
container.appendChild(calendarDiv);
