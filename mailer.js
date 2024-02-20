// mailer.js
import nodemailer from 'nodemailer';

// 配置SMTP服务器信息
const transporter = nodemailer.createTransport({
    service: '163 mail',
    // 163邮箱的SMTP服务器地址，可替换为其他邮箱服务商的SMTP服务器地址
    host: 'smtp.163.com',
    // 163邮箱的SMTP端口
    port: 465,
    auth: {
        user: 'xxx@example.com', // 你的邮箱账号
        pass: 'xxxx' // 你的邮箱密码或应用密码
    }
});

// 定义发送邮件的函数

// 使用 export 导出 sendEmail 函数
export async function sendEmail(subject, text, to = '收件人地址@example.com') {
    const mailOptions = {
        from: 'xxx@example.com',
        to: to, // 收件人邮箱地址，默认为一个预设地址
        subject: subject,
        text: text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.log('Error sending email:', error);
    }
}
