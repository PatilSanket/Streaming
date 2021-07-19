console.log('Loading function');

const aws = require('aws-sdk');
//const presigned = require('aws-sdk/s3-request-presigner');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });


exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    // Get the object from the event and show its content type
    const bucket = "streaminganime";
    const key = event.pathParameters.name + '.mp4';
    
    const url = s3.getSignedUrl('getObject', {
    Bucket: bucket,
    Key: key,
    Expires: 1800
    });
    
    const response = {
    statusCode: 301,
    headers: {
            Location: url
    }
   };

  return response;

};
