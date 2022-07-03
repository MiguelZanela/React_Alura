import { useState } from 'react';

import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [employees, setEmployee] = useState([])

  const toTheNewRegisteredEmployee = (employee) => {
    console.log(employee)
    setEmployee([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form toTheRegisteredEmployee={employee => toTheNewRegisteredEmployee(employee)}/>
    </div>
  );
}

export default App;
