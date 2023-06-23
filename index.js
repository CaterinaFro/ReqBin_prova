const base =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
const op = 'get';
const key = '1f1f8a44';

const URL = base + '/' + op + '?key=' + key;
console.log(URL);

fetch(URL)
  .then(
    (response) => response.json(), // parsing per avere la stringa
    (error) => alert(error)
  )
  .then((data) => {
    console.log(data);
    try {
      const db = JSON.parse(data);
      console.log(db);
    } catch (error) {
      console.error('Error while parsing data:', error);
    }
  });