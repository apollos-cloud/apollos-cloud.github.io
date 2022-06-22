import { EmailParams } from './Contact';
import Mailjet from 'node-mailjet';
export class EmailAdapter {
  private static instance: any;
  private api: any;

  private constructor() {
    if (!EmailAdapter.instance) {
      // const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
      
      // apiInstance.authentications['apiKey'] = process.env.EMAIL_API_KEY;
      // this.api = apiInstance
    }
  }

  public static getInstance(): any {
    console.log("ADAPTER INSTANCE ", EmailAdapter.instance);
    if (!EmailAdapter.instance) {
      EmailAdapter.instance = new EmailAdapter();
    }
    return EmailAdapter.instance;
  }

  public async sendEmail({
    department,
    email,
    message,
    name,
    subject
  }: EmailParams): Promise<any> {
    const mailjet = new Mailjet({apiKey: '****************************1234', apiSecret: '****************************abcd'})
    const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "omri.wallach@apollos-cloud.xyz",
        "Name": "Omri"
      },
      "To": [
        {
          "Email": "omri.wallach@apollos-cloud.xyz",
          "Name": "Omri"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result: any) => {
    console.log(result.body)
  })
  .catch((err: any) => {
    console.log(err.statusCode)
  })
//     try {
//       let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); 

// sendSmtpEmail.subject = "My {{params.subject}}";
// sendSmtpEmail.htmlContent = "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
// sendSmtpEmail.sender = {"name":"John Doe","email":"example@example.com"};
// sendSmtpEmail.to = [{email}];
// sendSmtpEmail.cc = [{"email":"example2@example2.com","name":"Janice Doe"}];
// sendSmtpEmail.bcc = [{"name":"John Doe","email":"example@example.com"}];
// sendSmtpEmail.replyTo = {"email":"replyto@domain.com","name":"John Doe"};
// sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
// sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

//   const sendEmailResponse = await sendSmtpEmail.sendTransacEmail(sendSmtpEmail)
//       console.log('RESPONSE ', sendEmailResponse);
//     } catch (e) {
//       console.log('ERROR ', e);
//     }
  }
}
