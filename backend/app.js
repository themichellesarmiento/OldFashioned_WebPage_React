import fs from 'fs/promises';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*Middleware */
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/news', async (req, res) => {
  const newProducts = await fs.readFile(
    path.join(__dirname, 'data/new-products.json'),
    'utf8'
  );
  res.json(JSON.parse(newProducts));
});

app.get('/homepage', async (req, res) => {
  try {
    const files = {
      'new-products':'newProducts',
      'categories':'categories',
      'best-sellers':'bestSellers',
      'testimonials':'testimonials',
    };

    const results = {};

     await Promise.all(
      Object.entries(files).map(async ([fileName, responseKey]) => {
        const data = await fs.readFile(
          path.join(__dirname, `data/${fileName}.json`),
          'utf8'
        );
        results[responseKey] = JSON.parse(data);
      })
    );

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load homepage data' });
  }
});


app.post('/orders', async (req, res) => {
  const orderData = req.body.order;

  if (!orderData || !orderData.items || orderData.items.length === 0) {
    return res.status(400).json({ message: 'No orders found.' });
  }

  if (
    !orderData.customer?.email?.includes('@') ||
    !orderData.customer?.name?.trim() ||
    !orderData.customer?.street?.trim() ||
    !orderData.customer?.['postal-code']?.trim() ||
    !orderData.customer?.city?.trim()
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile(
    path.join(__dirname, 'data/orders.json'),
    'utf8'
  );
  const allOrders = JSON.parse(orders);

  allOrders.push(newOrder);

  await fs.writeFile(
    path.join(__dirname, 'data/orders.json'),
    JSON.stringify(allOrders)
  );

  res.status(201).json({ message: 'Order created!' });
});

/*404 fallback */
app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3000);