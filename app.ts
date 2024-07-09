import express from 'express'
import { canchaRouter } from './src/cancha/cancha.routes.js'

const app = express()

//El middleware express.json() convierte los datos JSON que vienen en el cuerpo de la solicitud (request body) en un objeto JavaScript que puede ser accedido a través de req.body
app.use(express.json())
app.use('/api/canchas', canchaRouter)


//no funciona
/*
//obtener una cancha
app.get('/api/canchas/:id', (req, res)=>{
  const id = req.params.id
  const cancha = repository.findOne({id}) //objeto 
  if (!cancha){
    return res.status(404).send({message:'Cancha no encontrada'})
    res.json({data: cancha}) //no funciona
  }
})

*/

app.use((_, res)=>{
  return res.status(404).send({message: 'Resource not found!!!'})
})

app.listen(5500, () => {
    console.log("Server is running on http://localhost:5500/")
})