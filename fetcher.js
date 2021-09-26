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
    //console.log('file written successfully.....');
  });

  // Read file stats
  fs.stat(process.argv[3], (err, stats) => {
    if (err) {
        console.log(`File doesn't exist.`);
    } else {
        console.log(`Downloaded and saved ${stats.size} bytes to ${process.argv[3]}`);
    }
  });

 
  // const stats = fs.statSync("./index.html");
  // const fileSizeInBytes = stats.size;
  // //Convert the file size to megabytes
  // const fileSizeInMegabytes = fileSizeInBytes / 1000000.0;

});