function getImage() {
  let key = 'wSsCKCmLzbvbCXmn-N5lfAyfX0TzZPHF1JMRhaKPDDU';
  let uri = 'https://api.unsplash.com/photos/random/?client_id=';

  //   fetch(uri + key).then((res) => console.log(res));
  fetch(uri + key) // <- promise object
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let img = `<img src=${data.urls.regular} />`;
      document.getElementById('container').innerHTML = img;
    })
    .catch((error) => console.log(error));
}
