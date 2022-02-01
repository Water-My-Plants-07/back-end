/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'david', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { username: 'claudia', password: '1234' },
        { username: 'rowValue3', password: '1234' }
      ]);
    });
};
