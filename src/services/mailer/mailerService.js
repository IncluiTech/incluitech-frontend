import nodemailer from 'nodemailer'
import config from '../../util/config'

class MailerService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: '465',
            secure: true,
            auth: config.MAILLING_AUTH
        })
    }

    async sendMail(mailingContent) {
        const mailContentProperty = mailingContent.body.isHtml ? 'html' : 'text'
        const mail = {
            from: `"" <${config.MAILING_AUTH.user}>`,
            to: mailingContent.to,
            subject: mailingContent.subject
        }
        mail[mailContentProperty] =  mailingContent.body.text
        return this.transporter.sendMail(mail)
    }
}

export const mailerService = new MailerService()