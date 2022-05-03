const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `POST request body: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}, host: http://localhost:${port}`));