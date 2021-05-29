import emailjs from 'emailjs-com'

export default async function handler(req, res) {
  const { name, email, message } = req.body
  const params = {
    from_name: name,
    from_email: email,
    message: message
  }
  try {
    const res = await emailjs.send(
      process.env.EMAIL_JS_SERVICE,
      process.env.EMAIL_JS_TEMPLATE,
      params,
      process.env.EMAIL_JS_USER
    )

    res.status(200).json('sent')
  } catch (err) {
    console.log(err)
    res.json('err')
  }
}
