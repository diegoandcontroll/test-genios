import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { TablePage } from './components/TablePage';

import { createServer, Model } from 'miragejs';
import { CarsProvider } from './hooks/useCars';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
createServer({
  models: {
    cars: Model,
  },

  seeds(server) {
    server.db.loadData({
      cars: [
        {
          id: 1,
          name: 'Mustang',
          age: '200',
          vlMax: '180kmh',
          noteEco: '10/5',
          noteUser: '10/2',
        },
        {
          id: 2,
          name: 'Ferrari',
          age: '2022',
          vlMax: '200kmh',
          noteEco: '10/6',
          noteUser: '10/3',
        },
        {
          id: 3,
          name: 'BMW',
          age: '2022',
          vlMax: '200kmh',
          noteEco: '10/6',
          noteUser: '10/3',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/cars', () => this.schema.all('cars'));

    this.post('/cars', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('cars', data);
    });
  },
});

root.render(
  <CarsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </BrowserRouter>
  </CarsProvider>
);
