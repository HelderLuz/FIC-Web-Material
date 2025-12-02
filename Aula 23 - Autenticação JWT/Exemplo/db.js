import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function getClientes() {
  const [rows] = await pool.query('SELECT * FROM cliente');
  return rows;
}

export async function getClientById(id) {
  const [rows] = await pool.execute('SELECT * FROM cliente WHERE id = ?', [id]);
  console.log(rows);
  return rows;
}

export async function removeCliente(id) {
  const [result] = await pool.execute('DELETE FROM cliente WHERE id = ?', [id]);
  return result;
}

export async function updateCliente(id, cliente) {
  const { nome, email, cpf, data_nascimento } = cliente
  const [results] = await connection.execute('UPDATE cliente SET nome = ?, email = ?, cpf = ?, data_nascimento = ? WHERE id = ?', [nome, email, cpf, data_nascimento, id])
  console.log(results)
  return results;
}

export async function createCliente(cliente) {
  const { nome, email, cpf, data_nascimento } = cliente
  const [result] = await pool.execute(
    'INSERT INTO cliente (nome, email, cpf, data_nascimento) VALUES (?, ?, ?, ?)',
    [nome, email, cpf, data_nascimento]
  );
  return result.insertId;
}