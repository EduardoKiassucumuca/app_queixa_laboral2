const db = require("../../models");
import { faker } from "@faker-js/faker";

beforeAll(async () => {
  await db.sequelize.authenticate(); // Apenas testa conexão
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("Testando modelo Endereco com tabela já existente", () => {
  let id;
  const dataNow = new Date();

  test("Registrar um Endereco com dados aleatórios", async () => {
    const dataNow = new Date();
    const novoEndereco = await Endereco.create({
      bairro: faker.location.streetName(), // nome do bairro
      rua: faker.location.streetAddress(), // endereço completo ou rua
      casa: faker.location.buildingNumber(), // número da casa ou edifício
      provincia: faker.location.state(), // nome de uma província
      telefone_principal: faker.phone.number("+244 9## ### ###"), // número de Angola formatado
      telefone_alternativo: faker.phone.number("+244 9## ### ###"), // alternativo
    });
    expect(novoEndereco).toBeDefined();
  });

  //   test('Buscar queixa criada', async () => {
  //     const encontrada = await db.Queixa.findByPk(id);
  //     expect(encontrada).not.toBeNull();
  //     expect(encontrada.assunto).toBe('Testando');
  //   });

  //   test('Atualizar queixa', async () => {
  //     await db.Queixa.update({ titulo: 'Atualizado' }, { where: { id } });
  //     const atualizada = await db.Queixa.findByPk(id);
  //     expect(atualizada.titulo).toBe('Atualizado');
  //   });

  //   test('Deletar queixa', async () => {
  //     await db.Queixa.destroy({ where: { id } });
  //     const deletada = await db.Queixa.findByPk(id);
  //     expect(deletada).toBeNull();
  //   });
});
