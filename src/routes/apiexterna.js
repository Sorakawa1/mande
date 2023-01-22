// Endpoints for external data
const { Router } = require('express');
const router = new Router();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/', async (req, res) => {

    const username ='mande';
    const password = 'mande';
    //const encodedCredentials = btoa(`${username}:${password}`); // encode the credentials
  
    const response = await fetch('http://localhost:3000/api/client', {
        method: 'GET',
        headers: {
          'user': username,
          'pass': password
        }
      });
   const data = await response.json();
   res.send(data);
});

module.exports = router;