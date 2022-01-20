import React from 'react';
import ReactDOM from 'react-dom';
var obj = {
  FirstName : "parik",
  SecondName : "rao"
}

function merge(obj){
  return obj.FirstName + " " + obj.SecondName;
}

var rite = <div>
  <h1> First name : {obj.FirstName} </h1>
  <h2> Second Name : {obj.SecondName} </h2>
  <h2> Full name : {merge(obj)}</h2>
</div>
  


var testroot =  document.getElementById('root');
ReactDOM.render(
  rite,
  testroot
 
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
class Sapa{
    constructor(name = "anonymous",age = 0){
        this.name  = name;
        this.age = age;
    }
    getGrade() {
      return `Hello my name is ${this.name} and i am ${this.age} years old`;
    }
  
    }
  
    class Employee extends Sapa{
      constructor(name,age,ssn){
        super(name,age);
        this.ssn = ssn;
      }
  
      getssn(){
        return `my ssn is ${this.ssn}`;
      }
  
      getGrade(){
        let info = super.getGrade()
        info +=  `my ssn in ${this.ssn}`;
        return info;
      }
    }
  
  
  const bruh = (a,b) => a+b;
  
  const cust = {
    'name' : 'Bhel rand',
    'places_he_sucks' : ['beng','chennai','goa'],
  
    Proces(){
      this.places_he_sucks.forEach((city)=>{
        console.log(this.name + " sucks in " + city)
      })
    }
  }
  
  cust.Proces()
  
  
  console.log(bruh(2,3))
  // const pari = new Sapa("Sandesh gandu",21);
  // console.log(pari.getGrade());
  // const sand = new Sapa();
  // console.log(sand.getGrade());
  
  // const sex = new Employee("pari",21,2345);
  // console.log(sex.getssn());
  // const sex1 = new Employee();
  // console.log(sex1.getGrade()); 
  
  
  import React from "react"
import ReactDOM from 'react-dom'

let count = 0;

const add = () => { count++; randapp()}
const minus = () => {count--; randapp()}
const randapp = () => {
  const countingApp =  
  <div>
    <h1> Count : {count}</h1>
    <button onClick={add} > +1</button>
    <button onClick={minus} > -1</button>
  </div>



const indexRoot = document.getElementById('root')
ReactDOM.render(countingApp,indexRoot)
};
randapp();
  
  