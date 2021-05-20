import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json({ message: 'Esta funcionando' }));
app.get('/courses', (request, response) => {
	const { name } = request.body;
	console.log(name);
	return response.json({ message: 'ok' });
});

app.listen(3333, () => console.log('Servidor está rondando'));
