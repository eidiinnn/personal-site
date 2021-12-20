import emailjs from "emailjs-com";

export default class Email {
  constructor(email, message) {
    this.email = email;
    this.message = message;
    this.sentReturnMessage = "Enviado";
    this.returnVerifyNotPassed = "Não pode haver espaço vazio";
    this.returnMessageEmailJSError =
      "Mensagem não enviada. Meu email: eduardosilva.pn@gmail.com";

    this.clientEmailMessageObject = {
      from_name: this.email,
      message: this.message,
    };
  }

  async sendEmail() {
    return new Promise((resolve) => {
      if (!this.verifyEmailMessage()) return resolve(this.returnVerifyNotPassed);
      this.sendToEmailJS()
        .then(() => {
          resolve(this.sentReturnMessage);
        })
        .catch(() => {
          resolve(this.returnMessageEmailJSError);
        });
    });
  }

  async sendToEmailJS() {
    return emailjs
      .send(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        this.clientEmailMessageObject,
        process.env.REACT_APP_USER
      )
      .then(
        (response) => {
          return Promise.resolve();
        },
        (err) => {
          return Promise.reject();
        }
      );
  }

  verifyEmailMessage() {
    if (!this.email || !this.message) return false;
    else return true;
  }
}
