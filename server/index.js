import express from 'express';
import fs from 'fs';
import marked from 'marked';

const app = express();
const PORT = 1337;
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: true,
    smartLists: true,
    smartypants: true
});
const md = marked(fs.readFileSync('content.md', 'UTF-8'));

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { content: md });
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
});