
const readAsText = response => response.text();
const logResponse = response => console.log`server response ${response}`;
const logError = error => console.error`server error response ${error}`;

fetch('http://localhost:3000', {method: 'HEAD'})
// .then(readAsText)
.then(logResponse)
.catch(logError)