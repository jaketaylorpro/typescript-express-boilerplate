import * as Path from 'path';
import * as express from 'express';
import index from './routes/index';
const app = express();

app.use(express.static(Path.join(__dirname, '..', 'public')));
// my custom routes
app.use(index);

app.listen(process.env.PORT || 8080);
