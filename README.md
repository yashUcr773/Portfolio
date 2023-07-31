# Portfolio

Demo - [yashaggarwal.com](https://yashaggarwal.com)

Portfolio app showcasing my projects and telling about me.
Built using Angualar, Node and Express.
Hosted on AWS
To run in dev mode
- Clone the repo
- Run `npm install`
- Run `npm run start`
- Frontend will start on localhost:4200 and Backend will start at localhost:3000

To run in prod mode
- Clone the repo
- Run `npm install`
- Run `npm run build`
- Run `npm run start:prod`
- App will start at localhost:3000

The app uses nodemailer for sending mails.
The SMTP server / mailer used is [Brevo](https://www.brevo.com/)
To successfully send in the mails, you will need to add/update the following env variables
- SMTP_EMAIL_HOST
- SMTP_EMAIL_PORT
- SMTP_EMAIL_USER
- SMTP_EMAIL_PASS
- NODE_ENV