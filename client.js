const net = require('net');
const querystring = require('querystring');

const PORT = 80;
const HOST = '68386ee6.ngrok.io';
const HOST_PATH = 'bouncer';



const client = net.connect(PORT, HOST, () => {
  console.log('connected to the server');
  //creates header to send to server
    let body  = {
      video_id: 'cgRsYkKb1eI',
      guess: i,
      username: 'jay'
    }


 let bodyQueryString = querystring.stringify(body);
  console.log(bodyQueryString);

  let header = `POST /${HOST_PATH} HTTP/1.1
Date: ${new Date}
Host: ${HOST}
Content-Type: application/x-www-form-urlencoded
Content-Length: ${bodyQueryString.length}\r\n\r\n`

  client.write(header);
  client.write(bodyQueryString);
  client.end('end' () => {
    //current request complete
    if (< reattempl)
    doNextRequest();
  });

});
}

// //kick off first request
// doNextRequest();

// const net = require('net');
// const qs = require('querystring');
// // open a socket connection
// let port = 8081;
// let host = '10.0.1.24';
// let path = '/bouncer';
// let reattemptLimit = 2000;
// let i = -1;

// const doNextRequest = ()=>{
//   i++;
//   let client = net.createConnection(port, host);
//   client.setEncoding('utf8');

//   client.on("connect", () => {
//     let body = {
//       video_id: 'fzQ6gRAEoy0', // youtube ID
//       guess: i, // INT between 0 and 2000
//       username: 'J0n' // your name
//     };
//     let bodyQS = qs.stringify(body);
//     let headers = `POST ${path} HTTP/1.1
// Host: ${host}
// Content-Type: application/x-www-form-urlencoded
// Content-Length: ${bodyQS.length}\n\n`;
//     client.write(headers+bodyQS);
//     client.on("data", (response) => {
//       console.log(response);
//       client.end();
//     });
//     client.on('end', ()=>{
//       // current request is complete
//       if(i < reattemptLimit){
//         doNextRequest();
//       }
//     });
//   });

// };

// // kick off first request
// doNextRequest();
