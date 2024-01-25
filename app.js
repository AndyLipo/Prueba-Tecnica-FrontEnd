const express = require('express');
const app = express();
const PORT = 5500; // Puedes cambiar el puerto según tus necesidades

// Middleware para procesar datos JSON
app.use(express.json());

// Definir rutas y controladores

// Endpoint para obtener la lista de usuarios
app.get('/api/prueba/users', (req, res) => {
  // Lógica para obtener la lista de usuarios
  res.json({ message: 'Obteniendo lista de usuarios' });
});

// Endpoint para crear un nuevo usuario
app.post('/api/prueba/users', (req, res) => {
  const { nombre, apellido, numero, fecha } = req.body;
  // Lógica para crear un nuevo usuario
  res.json({ message: 'Usuario creado correctamente' });
});

const users = [
    { id: 1, nombre: 'Jose', apellido: 'Gonzalez', numero: 123456789, fecha: '08-07-1994' },
    { id: 2, nombre: 'Juan', apellido: 'Fernandez', numero: 987654321, fecha: '08-07-1994' },
  
  ];
  app.get('/api/prueba/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
  
    // Buscar el usuario por ID en el array
    const usuario = users.find(user => user.id === userId);
  
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });
  

// Endpoint para obtener un usuario por ID
app.get('/api/prueba/users/:id', (req, res) => {
  const userId = req.params.id;
  // Lógica para obtener un usuario por ID
  res.json({ message: `Obteniendo usuario con ID: ${userId}` });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
