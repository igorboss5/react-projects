import React from 'react';
import './App.css';
import Header from './components/Header';

const products = [
  {
    id: 1,
    title: 'Bombshell Eau',
    img: 'bombshelleau.jpg',
    desc: 'В кожній жінці є бомба! Впевнений і сміливий, аромат Bombshell: хрустка суміш свіжозрізаних півоній з полуденного сонця.',
    category: '',
    price: '99$'
  },
  {
    id: 2,
    title: 'Bombshell Oud',
    img: 'bombshelloud.jpeg',
    desc: `Дорогоцінний і рідкісний пряний рожевий шафран відкриває аромат яскравістю.
          В основі — темний сорт знакової квітки колекції Bombshell: замшева півонія.`,
    category: '',
    price: '93$'
  },
  {
    id: 3,
    title: '',
    img: '',
    desc: '',
    category: '',
    price: ''
  }
]

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
