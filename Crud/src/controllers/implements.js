import db from "./configDB.js";

export const Implements = class {
    static get = async (req, res) => {
      const [rows] = await db.query("SELECT * FROM accesorio_dep");
      const implementos = rows.map(row => `Id: ${row.Id_Accd}, Objeto: ${row.Objeto}`);
      console.log(implementos);
      const implementosString = implementos.join(",");
      res.send(`Obteniendo implementos : ${implementosString}`);
    }
  
    static post = async (req, res) => {
      const { Objeto } = req.body;
      const [rows] = await db.query('INSERT INTO accesorio_dep (Objeto) VALUES (?)', [Objeto]);
      res.json(`Usted ha creado el objeto: ${rows}`);
    }
  
    static put = (req, res) => {
      res.send('Actualizando implementos');
    }
  
    static delete = (req, res) => {
      res.send('Eliminando implementos');
    }
  };
 