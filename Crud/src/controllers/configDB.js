import { Sequelize } from "sequelize"


const db = new Sequelize({
    port: 3306,
    host: 'localhost',
    username: 'root',
    database: 'deportek',
    password: 'mateo212705',
    dialect: 'mysql'
})

const test = () => {
    db.authenticate()
    console.log("Conexion exitosa",test);
    }


export default db