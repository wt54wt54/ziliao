
const nodemailer = require('nodemailer');
// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '352186537@qq.com', // generated ethereal user
        pass: 'lvzehqcxxlucbhih'// smtp 验证码
    }
});
// 邮件的内容
let  info={
  from: '"Fred Foo 👻" <352186537@qq.com>', // sender address
  to: '352186537@qq.com', // list of receivers
  subject: '呵呵哒', // Subject line
  // text: , // plain text body
  html: '<h3>欢迎注册您的验证码是：呵呵不告诉你 </h3>' // html body
}

transporter.sendMail(info,(err,result)=>{
  console.log(err,result)
});

