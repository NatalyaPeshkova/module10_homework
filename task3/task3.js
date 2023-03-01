const wsUri = " wss://echo-ws-service.herokuapp.com";

const input = document.querySelector('.input');
const btnMess = document.querySelector('.btn-mess');
const btnGeo = document.querySelector('.btn-geo');
const userMessage = document.querySelector('.user-message');
const serverMessage = document.querySelector('.server-message');
const wrapperChat =  document.querySelector('.wrapper-chat');
const btnClear = document.querySelector('.btn-clear');

//Выводит сообщения
function writeToScreen(message, position='flex-end') {
	let element = `
        <p class='message' style='align-self: ${position}'>
            ${message}
        </p>
    `;
	userMessage.innerHTML += element;
	wrapperChat.scrollTop = wrapperChat.scrollHeight;
}

//Объект соединения
let websocket = new WebSocket(wsUri); 
	websocket.onopen = function(evt) {
		console.log("CONNECTED");
	};
	websocket.onmessage = function(evt) {
		writeToScreen(`ответ сервера: ${evt.data}`, 'flex-start');
	};
	websocket.onerror = function(evt) {
		writeToScreen(`server: ${evt.data}`, 'flex-start');
	};

  //отправка сообщения
btnMess.addEventListener('click', () => {
	let message = input.value;
	websocket.send(message);
	writeToScreen(`Вы: ${message}`);
	input.value = ''

});


  //гео-локация.
  // Функция,  об ошибке
const error = () => {
	let textErr0r = 'Невозможно получить ваше местоположение';
	writeToScreen(textErr0r);
};

  // Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
	let latitude  = position.coords.latitude;
	let longitude = position.coords.longitude;
	let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	writeToScreen(`<a  href='${geoLink}' target='_blank'>Ваша гео-локация</a>`);
};

btnGeo.addEventListener('click', () => {
	if (!navigator.geolocation) {
	console.log('Geolocation не поддерживается вашим браузером');
	} else {
	navigator.geolocation.getCurrentPosition(success, error);
	}
});

//   //удаляем сообщения
//   serverMessages.addEventListener('click', () => {
// 	userMessages.innerHTML = " ";
//   });

  //удаляем сообщения
btnClear.addEventListener('click', () => {
	userMessage.innerHTML = " ";
});