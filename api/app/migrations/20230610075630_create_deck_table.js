/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`--sql
        create table deck (
            id uuid primary key,
            name varchar(50) not null,
            cover varchar(255),
            description varchar(255),
            upvotes integer,
            created_at timestamp not null default now(),
            updated_at timestamp not null default now()
    );
  `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw(`--sql
        drop table deck;
    `)
};
