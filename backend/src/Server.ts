import express, { Request, Response } from "express";
import * as process from "process";
import { users } from "./data/test-data";

const app = express();
const port = process.env.PORT || 8080;


app.get('/api/users', (req: Request, res: Response) => {
    res.send(users);
    console.log(`Request made at ${Date.now()}`);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});