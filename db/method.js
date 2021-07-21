const {QueryTypes} = require('sequelize');
const { sequelize } = require('../db/connection');

const postgresDB = require('../models/index');

 const createTable = (model) => {
    return postgresDB[model].sync({force: true});
};

 const dbTransaction = () => {
    return sequelize.transaction();
};

 const saveData = (payload, model, transaction = null) => {
    return postgresDB[model].create(payload, {transaction: transaction});
};

 const saveMany = async (payload, model, transaction = null) => {
    return postgresDB[model].bulkCreate(payload, {transaction: transaction});
};

 const findOneByCondition = (condition, model, attributes) => {
    return postgresDB[model].findOne({
        where: condition,
        attributes
    });
};

 const findByCondition = (condition, model, attributes) => {
    let query = {
        attributes
    };
    if(condition){
        query = {...query, where: condition};
    }    
    return postgresDB[model].findAll(query);
};

 const updateOneByCondition = (updatedPayload, condition, model) => {
    return postgresDB[model].update(updatedPayload, {
        returning: true,
        where: condition
    });
};

 const deleteRecord = (condition, model) => {
    return postgresDB[model].destroy({
        where: condition
    });
};

 const rawQuery = (query, type, replacements = {}) => {
    let queryOptions = {
        type: QueryTypes[type],
        replacements: replacements
    };
    return sequelize.query(query, queryOptions);
};


module.exports={
    createTable,
    dbTransaction,
    saveData,
    saveMany,
    findOneByCondition,
    findByCondition,
    updateOneByCondition,
    deleteRecord,
    rawQuery
    

}