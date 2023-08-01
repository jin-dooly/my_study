
import { useState } from 'react';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

const initialData = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];

function App() {
  const [data, setData] = useState(initialData);

  return (
    <div>

      <Form data={data} setData={setData} />
      <Lists data={data} setData={setData} />

    </div>
  );
} 

export default App;
