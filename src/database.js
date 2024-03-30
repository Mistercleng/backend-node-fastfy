"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knex = exports.config = void 0;
const knex_1 = require("knex");
exports.config = {
    client: 'sqlite3',
    connection: {
        filename: './temp/app.db',
    },
    useNullAsDefault: true,
};
exports.knex = (0, knex_1.knex)(exports.config);
