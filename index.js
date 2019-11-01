'use strict';

const numberOfPics = function () {
  $('.doggoRanch').on('submit', event => {
    event.preventDefault();
    console.log(event.currentTarget);
    let num = $('.doggo-num').val();
    console.log(num);
    return getDoggos(num);
  });
};

const wrapDoggos = function (doggo) {
  return `
  <img
    src= '${doggo}'
    alt= 'doggo pic'
    height= '100'
    width= '100'
  >
  `;
};

const getDoggos = function (num) {
  const options = {method: 'GET'};
  const callDoggo = `https://dog.ceo/api/breeds/image/random/${num}`;
  console.log(callDoggo);
  fetch(callDoggo,options)
    .then(response => response.json()).then( jsonData => {
      const doggos = jsonData.message;
      console.log(doggos);
      let doggoHTML = doggos.map(doggo=> wrapDoggos(doggo)).join('');
      $('.photo-container').html(doggoHTML);
    }
    );
};



console.log('hello');

$(numberOfPics());