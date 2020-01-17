const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://william:nojeitaodamadeira@cluster0-t8obj.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello Omnistack'});
})

app.listen(3333);