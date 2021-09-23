const request = require('request');

request(process.argv[2], (error, response, body) => {
  
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  
  const content = body;
  const fs = require('fs');

  fs.writeFile(process.argv[3], content, err => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('file written successfully.....');
    
  });

});