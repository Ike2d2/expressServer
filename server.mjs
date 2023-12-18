import express from "express";
import * as url from 'node:url';
import { dirname } from "node:path";

const __dirname = dirname(url.fileURLToPath(import.meta.url));
const port = process.env.PORT || 42069;

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.route('/amogus')
    .post((req, res) => {
        !localStorage.getItem('first') && localStorage.setItem('first', req.body.first)
        !localStorage.getItem('last') && localStorage.setItem('last', req.body.last)
    })
    .get((req, res) => {
        res.send(`
        <html>
        <body>
        ${JSON.stringify(localStorage.getItem('first'))} ${JSON.stringify(localStorage.getItem('last'))}
        </body>
        </html>
        `)
    })
    .put((req, res) => {
        localStorage.setItem('first', req.body.first)
    })
    .delete((req, res) => {
        localStorage.removeItem('first');
        localStorage.removeItem('last');
    })

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});