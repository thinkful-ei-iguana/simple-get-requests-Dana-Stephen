const getBreed = function () {
  $('.doggoRanch').on('submit', event => {
    event.preventDefault();
    let breed = $('.doggo-breed').val();
    return getDoggos(breed);
  });
};

const displayResults = function(data) {
  $('.photo-container').html  (`<img src="${data} alt="specific   doggo">`)
};

const getDoggos = function (breed) {
  const options = {method: 'GET'};
  let callDoggo = `https://dog.ceo/api/breed/${breed}/images/random`;
  fetch(callDoggo, options)
    .then(response => response.json)
    .then(jsonData => displayResults(jsonData)
    )
    .catch(error => alert('Something went wrong. Try again later.'));
};

$(getBreed());