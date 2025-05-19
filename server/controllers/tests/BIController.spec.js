const db = require("../../models");
import { faker } from "@faker-js/faker";

beforeAll(async () => {
  await db.sequelize.authenticate(); // Apenas testa conexão
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("Testando modelo BI com tabela já existente", () => {
  let id;
  const dataNow = new Date();

  test("Registrar um BI com dados aleatórios", async () => {
    const dataNow = new Date();
    const novoBI = await BI.create({
      emitido_em: faker.date.past({ years: 10 }), // Data de emissão (passada)
      valido_ate: faker.date.future({ years: 5 }), // Data de validade (futura)
      file: faker.system.fileName(), // Nome de um arquivo aleatório (simulando o BI)
      numeroBI: faker.string.alphanumeric({ length: 14, casing: "upper" }), // Número aleatório
    });
    expect(novoBI).toBeDefined();
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
