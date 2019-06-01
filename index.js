// const express = require('express');
// const path = require('path');
// const app = express();
// const prod = true;
// const bodyParser = require('body-parser');

// //smpt definition
// console.log('==================start====================');
// // Serve static files from the React app
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/api/emailForm', (req, res) =>{
//   console.log('...attempting to send email.');
//     let reqFrom = '';
//     // console.log('email text = ' + req.body.emailText)
//     console.log('email text = test' ) // test
//     // if (req.body.emailText !== '') {
//     //    reqFrom = req.body.emailText }
//     // else
//     //    {reqFrom = 'p.harendarz@gmail.com'};
//        reqFrom = 'przemygit@gmail.com' // test
//     const data = {
//       from: 'test@przemy.com', //test
//     //   from: req.body.nameText + ' ' + reqFrom,
//       to: 'przemygit@gmail.com',
//       subject: 'Wiadomość z Twojej strony internetowej!',
//     //   text: req.body.messageText + ' --------------------- numer telefonu: ' + req.body.phoneText
//       text: ' asdasd --------------------- numer telefonu: ' // test
//     };
//     console.log('...sending mail to: ' + reqFrom) ;
//     mailgun.messages().send(data, function (error, body) {
//       if (error) {
//         console.log(error);
//       }
//       console.log(body);
//     });
// })

// //
// app.get('/', function(request, response) {
//   response.json({server: "started"});
// });
// // Put all API endpoints under '/api'

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.render('pages/index');

//   });
// //send email

// var api_key = process.env.MAILGUN_API_KEY;
// var domain = process.env.MAILGUN_DOMAIN;
// var mailgunApiKey = '2545513874a2a7c876ba2d21a06e185f-39bc661a-c0c49bf7';
// var mailgunDomain = 'sandboxcdf8a54c0213464fa26adc5076f1a54b.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: api_key || mailgunApiKey, domain: domain || mailgunDomain});

// const port = process.env.PORT || 5000;
// app.listen(port);
// console.log('===============end=================');
