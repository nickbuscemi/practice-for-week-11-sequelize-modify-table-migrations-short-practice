module.exports = {
  development: {
    //storage: process.env.DB_FILE,
    storage: "db/dev.db",
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
};