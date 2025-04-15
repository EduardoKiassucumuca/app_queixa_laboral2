const db = require('../../models');

beforeAll(async () => {
  await db.sequelize.authenticate(); // Apenas testa conexão
});

afterAll(async () => {
  await db.sequelize.close();
});

describe('Testando modelo Queixa com tabela já existente', () => {
  let id;
  const dataNow = new Date();

  test('Submeter uma queixa', async () => {
    try {
        const dataNow = new Date();
        const novaQueixa = await db.Queixa.create({
          assunto: 'Atraso no pagamento de salário',
          facto: 'O trabalhador relata que não recebe o salário há dois meses consecutivos, apesar de continuar exercendo suas funções normalmente na empresa. Já tentou resolver com o empregador, mas não obteve retorno.',
          queixosoID: 241,
          queixanteID: 156,
          empresaID: 156,
          trabalhadorID: 241,
          modo: "normal",
          provincia: "Luanda",
          created_at: dataNow,
          updated_at: dataNow,
          inspectorID: 14,
          testemunhaID: 4,
        });
        expect(novaQueixa).toBeDefined();
      } catch (error) {
        console.error("Erro ao criar queixa:", error);
        throw error; // re-lança para Jest saber que falhou
      }
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
