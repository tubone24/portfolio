const axios = require('axios');

exports.handler = (event, context) => {
  const url = process.env.SLACK_URL;
  console.log(context);
  const body = JSON.parse(event.body);
  const headers = {
    accept: 'application/json',
  };
  const payload = {
    attachments: [
      {
        color: '#7fffd4',
        author_name: body.name,
        author_link: `mailto:${body.email}`,
        title: body.subject,
        text: body.message
      }
    ]
  }
  return axios.post(url, payload, { headers }).then(() => {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "OK" }),
    };
  }).catch((error) => ({
    statusCode: 500,
    body: JSON.stringify({ error }),
  }));
};
