const chatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector('.chat-input span');
const chatbox = document.querySelector('.chatbox');

let userMessage;

const createChatLi = (message, className) => {
	// Create a chat <li> with passed msg and classnAme
	const chatLi = document.createElement('li');
	chatLi.classList.add('chat', className);
	let chatContent =
		className === 'outgoing'
			? `<p>${message}</p>`
			: `<span class="material-symbols-outlined">sound_detection_dog_barking</span><p>${message}</p>`;
	chatLi.innerHTML = chatContent;
	return chatLi;
};

// const generateResponse = () => {
// 	const API_URL = 'https://api.openai.com/v1/chat/completions';

// 	const requestOptions = {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Authorization: `Bearer ${API_KEY}`,
// 		},
// 		body: JSON.stringify({
// 			model: 'gpt-3.5-turbo',
// 			messages: [{ role: 'user', content: userMessage }],
// 		}),
// 	};
// 	// 24:30 in resume
// 	// send message and get reply from magic genie in the cloud
// 	fetch(API_URL, requestOptions)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// };

const handleChat = () => {
	userMessage = chatInput.value.trim();
	// console.log(userMessage);
	if (!userMessage) return;
	// attempt to append users message to chatbox element
	chatbox.appendChild(createChatLi(userMessage, 'outgoing'));

	setTimeout(() => {
		// make it look like the chat-o-tron 5000 is thinking
		chatbox.appendChild(createChatLi('Thinking...', 'incoming'));
		generateResponse();
	}, 600);
};

sendChatBtn.addEventListener('click', handleChat);
