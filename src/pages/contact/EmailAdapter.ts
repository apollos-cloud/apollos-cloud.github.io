import { EmailParams } from "./Contact";

require('dotenv').config();

const SibApiV3Sdk = require('sib-api-v3-sdk');
export class EmailAdapter {
    private static instance: any;

    private constructor() {
        if(!EmailAdapter.instance) {
            EmailAdapter.instance = new SibApiV3Sdk.AccountApi()
            EmailAdapter.instance.setApiKey(SibApiV3Sdk.AccountApiApiKeys.apiKey, process.env.EMAIL_API_KEY);
        }
    }

    public static getInstance(): any {
        if(!EmailAdapter.instance) {
            EmailAdapter.instance = new EmailAdapter();
        }
        return EmailAdapter.instance;
    }

    public async sendEmail({ department, email, message, name, subject }: EmailParams): Promise<any> {
        try {
            const sendEmailResponse = await EmailAdapter.instance.TransactionalEmailsApi().sendTransacEmail({

                "sender": { email, name },
                subject,
                "htmlContent": "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>",
                "params": {
                    "greeting": "This is the default greeting",
                    "headline": "This is the default headline"
                },
                "messageVersions": [
                    {
                        "to": [
                            {
                                "email": department + "@apollos-cloud.xyz",
                                "name": department
                            }
                        ]
                    }
                ]
           
            })
            console.log("RESPONSE ", sendEmailResponse);
            
        }
        catch (e) {
            console.log("ERROR ", e);
        }
    }
}