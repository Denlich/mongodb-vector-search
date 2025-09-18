import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Application is listening on port ${PORT}`);
});
