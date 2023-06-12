'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn(
                'Endereco', // table name
                'telefone_alternativo', // new field name
                {
                    type: Sequelize.INTEGER(9),
                    allowNull: true,
                },
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Endereco');
    }
};