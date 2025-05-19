const db = require("../../models");
import { faker } from "@faker-js/faker";

beforeAll(async () => {
  await db.sequelize.authenticate(); // Apenas testa conexão
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("Testando modelo Pesoa com tabela já existente", () => {
  let id;
  const dataNow = new Date();

  test("Registrar uma pessoa com dados aleatórios", async () => {
    const dataNow = new Date();
    const novaPessoa = await db.Pessoa.create({
      nome: faker.person.firstName(),
      sobrenome: faker.person.lastName(),
      nome_pai: faker.person.fullName(),
      nome_mae: faker.person.fullName(),
      naturalidade: "Angola",
      altura: (Math.random() * (2.0 - 1.4) + 1.4).toFixed(2),
      estado_civil: "Solteiro",
      data_nascimento: faker.date.birthdate(),
      sexo: "Masculino",
      biID: 10,
      enderecoID: 4,
    });
    expect(novaPessoa).toBeDefined();
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
