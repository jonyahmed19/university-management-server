import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import morgan from 'morgan'
const app:Application = express();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(morgan('dev'));



//Testing
app.get('/healthz', async (req: Request, res: Response) => {
    res.send('Working Successfully');
})

export  default app