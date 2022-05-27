import express from 'express';
import path from 'path';
import { api } from '';

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(path.dirname('.'), 'public', 'index.html'), { root: path.join(path.dirname('.'))})
);

app.get('/notes', (req, res) => 
  res.sendFile(path.join(path.dirname('.'), 'public', 'notes.html'), { root: path.join(path.dirname('.'))})
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);