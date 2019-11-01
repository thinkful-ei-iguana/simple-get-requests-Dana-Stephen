const getBreed = function () {
  $('.doggoRanch').on('submit', event => {
    event.preventDefault();
    let breed = $('.doggo-breed').val();
    console.log(breed);
    return getDoggos(breed);
  });
};

const displayResults = function(data) {
  if(data.status==='error'){
    $('.photo-container').html(`<p>${data.code}: ${data.message}</p>`);
  }
  else{
    $('.photo-container').html(`<img src="${data}" alt="specific doggo">`);
  }
};

const getDoggos = function (breed) {
  const options = {method: 'GET'};
  console.log(breed);
  let callDoggo = `https://dog.ceo/api/breed/${breed}/images/random`;
  console.log(callDoggo);
  fetch(callDoggo, options)
    .then(response => response.json())
    .then(jsonData => {
      displayResults(jsonData);
      console.log(jsonData);
    }
    ).catch(error => alert('Something went wrong. Try again later.'));
};

$(getBreed());