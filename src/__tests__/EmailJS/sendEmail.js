import Email from "../../components/contact/sendEmail";

test("when receiving a with an empty string", () => {
  const emailConst = new Email("", "message");
  return emailConst.sendEmail().then((returnMessage) => {
    expect(returnMessage).toBe("Não pode haver espaço vazio");
  });
});

test("all functions work together", () => {
  const emailConst = new Email("teste@teste.com", "message");
  return emailConst.sendEmail().then((returnMessage) => {
    expect(returnMessage).toBe("Enviado");
  });
});
