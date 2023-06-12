'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn(
                'Queixa', // table name
                'url_file_contrato', // new field name
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Queixa');
    }
};