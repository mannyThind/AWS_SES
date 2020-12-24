var AWS = require('aws-sdk');
AWS.config.loadFromPath('./path/to/credentials.json');
// Set the region 
AWS.config.update({region: 'us-west-2'});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

  const params = {
  Destination: {
    ToAddresses: ["SENDER_EMAIL"]},

    ConfigurationSetName: 'SEND_BOUNCE_OPEN',
  Message: {
    Body: {
      Html: {
        // HTML Format of the email
        Charset: "UTF-8",
        Data:
             "<html><body><p> First example </p></body></html>"
      },
      Text: {
        Charset: "UTF-8"
        Data: "This is a simple example "
      }
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Test email"
    }
  },
  Source: "AWS_BASE_EMAIL",
   Tags: [
      {
        Name: 'EMAIL',
        Value: 'NULL'
   }]
};


const sendEmail = ses.sendEmail(params).promise();
sendEmail .then(data => {
    console.log("email submitted to SES", data);
  })
  .catch(error => {
    console.log(error);
  });


