'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
    return db.createTable('user', {
        columns: {
            id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                primaryKey: true,
                autoIncrement: true,
                length: 10
            },
            person_id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                length: 10,
                foreignKey: {
                    name: 'person_id_fk',
                    table: 'person',
                    rules: {
                        onDelete: 'RESTRICT',
                        onUpdate: 'RESTRICT'
                    },
                    mapping: {
                        person_id: 'id'
                    }
                }
            },
            password: {
                type: 'string',
                notNull: true,
                length: 250
            },
            createdAt: {
                type: 'timestamp',
                notNull: true,
                defaultValue: new String('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                type: 'timestamp',
                notNull: true,
                defaultValue: new String('CURRENT_TIMESTAMP')
            },
            deletedAt: {
                type: 'timestamp'
            },
        },
        ifNotExists: true
    });
};

exports.down = function(db) {
    return db.dropTable('user');
};

exports._meta = {
  "version": 1
};
