const express = require('express');
const expressHandlebars = require('express-handlebars');
const fs = require('fs');

const app = express();

app.use(express.static('public'));

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));


app.get('/', (_, res) => {
  res.render('index', {
    layout: false
  });
});

app.get('/:id', (req, res) => {
  res.render(req.params.id, {
    initialValue: fs.readFileSync(`values/${req.params.id}.js`, 'utf8'),
    nextId: +req.params.id + 1,
    isRouter: +req.params.id > 19
  });
});

app.set('view engine', 'handlebars');

app.listen(process.env.PORT || 3001);
