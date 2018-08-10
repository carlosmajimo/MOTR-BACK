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
    return db.createTable('person', {
        columns: {
            id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                primaryKey: true,
                autoIncrement: true,
                length: 10
            },
            identification: {
                type: 'string',
                notNull: true,
                length: 11
            },
            firstName: {
                type: 'string',
                notNull: true,
                length: 25
            },
            lastName: {
                type: 'string',
                notNull: true,
                length: 25
            },
            email: {
                type: 'string',
                notNull: true,
                length: 50
            },
            address: {
                type: 'string',
                notNull: true,
                length: 50
            },
            phone: {
                type: 'string',
                notNull: true,
                length: 50
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
    return db.dropTable('person');
};

exports._meta = {
  "version": 1
};
