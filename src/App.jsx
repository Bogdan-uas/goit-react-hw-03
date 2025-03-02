import { useState } from 'react';
import ContactList from './components/ContactList/ContactList.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx';
import './App.css'

function App() {
  const [info, setInfo] = useState(
  [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
  )
  const [filter, setFilter] = useState('');

  const visibleInfo = info.filter((infos) =>
    infos.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='main-container'>
      <h1 className='main-title'>Phonebook</h1>
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactList info={visibleInfo} />
    </div>
  )
}

export default App
