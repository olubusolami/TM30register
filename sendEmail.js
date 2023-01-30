const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");
const sendEmail = async (receiver, content) => {
  const send = async () => {
    let data = JSON.stringify({
      provider: "mailgun",
      subject: "BCC test Mail Test",
      recipients: [`${receiver}`],
      header: {
        title: "The Email Header",
        bgColor: "",
        appName: "MyApp",
        appURL: "http://myapp.com",
        appLogo:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      },
      content:
        "Inside Content: <br>Testing email attachment content<br> <p>KKD</p>",
      body: {
        content: `${content.name} ${content.email} has registered`,
        greeting: "Greetings,",
      },
    });

    var config = {
      method: "post",
      url: `${process.env.base_url}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "client-id": `${process.env.staging}`,
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImxvY2FsX2Y3NDU1ZmZhNTU4MDI1OTg0ODUwIiwiZW1haWwiOiJhZGV5ZW1vZGFub2ludGVkNUBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIyLTAyLTA4VDEzOjUxOjEzLjA0OVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAyLTA4VDE0OjE3OjQ2Ljk1NVoiLCJlbWFpbFZlcmlmaWVkQXQiOjE2NDQzMjk4NjY3MjEsInNlY3JldCI6ImxvY2FsX2NhM2IwZGZiN2ExMmY0NGY3ZTkzIiwiaWQiOiI2MjAyNzU1MWU5YjI4MzRiNTA0YmEzZGIiLCJ0eXBlIjoiYXV0aCIsImF1dGhvcml6ZWRTZXJ2aWNlIjpbXSwiZXhwIjoxNjQ2NjkyNjQ0LCJkYXRhIjoiNjIwMjc1NTFlOWIyODM0YjUwNGJhM2RiIiwiaWF0IjoxNjQ2NjQ5NDQ0fQ.iCLcN6Vutsr5VJvn244oj8K_ZOyXN_YmerjfQwq6PEs'
      },
      data: data,
    };

    return await axios(config)

      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  };
  const isSent = await send();
//   console.log(isSent)
  return isSent;
};

module.exports = sendEmail;
