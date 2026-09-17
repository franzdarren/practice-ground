import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './components/Car.jsx';
import SportsCar from './components/SportsCar.jsx';
import Person from './components/Person.jsx'
import Add from './components/Add.jsx'
import Gamble from './components/Gamble.jsx';
import Modal from './components/Modal.jsx'

createRoot(document.getElementById('root')).render(
  <App />
);

// class Carc{
//   constructor(name, year){
//     this.name = name;
//     this.year = year;
//   }

//   present() {
//     return 'I have a ' + this.name + ' from ' + this.year;
//   }
// }

// class Model extends Carc {
//   constructor(name, year, model) {
//     super(name, year);
//     this.model = model;
//   }

//   present() {
//     return super.present() + ', it is a ' + this.model;
//   }
// }

// const newCar = new Carc("Ford", 2014);
// console.log(newCar.present());

// const model = new Model("Fordwd", 2014, "Mustang");
// console.log(model.present());

// const hello = () => "Hello World!";
// const hello2 = (val) => "Hello "+val;

// console.log(hello());
// console.log(hello2("bro"));

// const vehicles = ['mustang', 'f-150', 'expedition'];

// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

// console.log(truck);