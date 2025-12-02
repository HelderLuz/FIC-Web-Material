import { Router } from 'express';
import { getClientes, createCliente, removeCliente, updateCliente } from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
  const clientes = await getClientes();
  res.status(200).json(clientes);
});

router.post('/', async (req, res) => {
  const cliente = req.body
  const result = await createCliente(cliente)
  res.status(201).json({ "mensagem": "cliente criado com sucesso"})
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await removeCliente(id);
  console.log(result);
  res.status(200).json({"mensagem": "cliente removido com sucesso"});

})

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const cliente = req.body;
  const result = await updateCliente(id, cliente)
  res.status(200).json({"mensagem": "cliente atualizado com sucesso"})
})

export default router;