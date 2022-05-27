import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());


//ROTAS USUÁRIO
//create user

app.post('/user', async (req, res) => {
  const { email, name } = req.body
  try {
    const post = await prisma.user.create({
      data: {
        email,
        name
      },
    })
    res.json(post)
  } catch (error) {
    error = "Não foi possível cadastrar usuário! Dados inválidos ou usuário já cadastrado"
    res.status(400).json(error)
  }
  
})

app.get('/user', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
  res.json(users)
  } catch (error) {
    error = "Nenhum usuário encontrado"
    res.status(400).json(error)
  }
  
})



//ROTAS POST
//create post
app.post('/post', async (req, res) => {
  const { title, content, authorEmail,published} = req.body
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: { connect: { email: authorEmail } },
        published
      },
    })
    res.json(post)
  } catch (error) {
    error = "Erro ao criar post"
    res.status(400).json(error)
  }
  
})

app.get('/post/notpublished', async (req, res) => {
  const posts = await prisma.post.findMany({
   where: { published: false },
    include: { author: true },
  })
  res.json(posts)
})

app.get('/post/published', async (req, res) => {
  const posts = await prisma.post.findMany({
   where: { published: true },
    include: { author: true },
  })
  res.json(posts)
})

app.get('/post', async (req, res) => {
  const post = await prisma.post.findMany();
  res.json(post)
})

app.put('/publish/', async (req, res) => {
  const { id,published } = req.body
  try {
    const post = await prisma.post.update({ 
      where: {id},
      data: { published},
    })
    res.json(post)
  } catch (error) {
    error = "Post não encontrado"
    res.status(400).json(error)   
  }
 
  
})

app.delete('/post/', async (req, res) => {
  const { id } = req.body
  try {
    const post = await prisma.post.delete({
      where: {
        id,
      },
    })
    res.json(post)
  } catch (error) {
    error = "Post não encontrado"
    res.status(400).json(error)
   
  }
  
})


app.listen(3000,() => console.log("server is running"));