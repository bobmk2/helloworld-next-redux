import express from 'express';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';

const app = express();

app.use(helmet());

const limiter = new RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// @memo This count value is reset per deployment.
// TODO: If we keep this value, we should use some kind of kvs or database, ex) redis.
let count = 0;
async function incrementCount() {
  count++;
}

async function decrementCount() {
  count--;
}

async function resetCount() {
  count = 0;
}

app.get('/api/counter', (req, res) => {
  console.log(req.path);
  res.status(200).send({ count });
});

app.post('/api/counter/increment', async (req, res) => {
  console.log(req.path);
  await incrementCount();
  res.status(201).json({ count });
});

app.post('/api/counter/decrement', async (req, res) => {
  console.log(req.path);
  await decrementCount();
  res.status(201).json({ count });
});

app.post('/api/counter/reset', async (req, res) => {
  console.log(req.path);
  await resetCount();
  res.status(201).json({ count });
});

export default app;
