// Import stylesheets
import './style.css';

// Write Javascript code!
var t1 = {
  get perimetro() {
    return this.l1 + this.l2 + this.l3;
  },
  set lato1(x) { this.l1=x; },
  set lato2(x) { this.l2=x; },
  set lato3(x) { this.l3=x; }
}
t1.lato1=3;
t1.lato2=2;
t1.lato3=2;
console.log(t1.perimetro);
