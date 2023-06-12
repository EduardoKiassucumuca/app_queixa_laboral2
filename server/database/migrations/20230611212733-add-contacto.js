'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn(
                'Endereco', // table name
                'telefone_principal', // new field name
                {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Endereco');
    }
};