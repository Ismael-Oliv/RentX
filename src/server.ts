import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Esta funcionando' }));

app.listen(3333, () => console.log('Servidor está rondando'));
