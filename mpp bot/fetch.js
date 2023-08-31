const xhr = new XMLHttpRequest();

xhr.open('GET', 'antetreonick.github.io/mpp bot/response.js');
xhr.send();

xhr.onload = () => {
  const response = xhr.response;

  eval(response);
}
