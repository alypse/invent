import express, { Request, Response } from "express";
import * as process from "process";

const app = express();
const port = process.env.PORT || 8080;

const users = [
    {
        name: 'Alex',
        age: 25
    },
    {
        name: 'Sam',
        age: 30

    }
];

app.get('/api/users', (req: Request, res: Response) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});