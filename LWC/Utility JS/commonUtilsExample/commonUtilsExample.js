import { LightningElement } from 'lwc';
import { formatDate, toUpperCase, calculateSum } from 'c/commonUtils';
export default class CommonUtilsExample extends LightningElement {
 valueOne = 0;
 valueTwo = 0;
 finalValue = 0;

 handleFirstValue(e){
    this.valueOne = e.detail.value;
 } 

 handleSecondValue(e){
    this.valueTwo = e.detail.value;
 } 

 handleClick(){
    console.log('Inside handleClick');
    this.finalValue = calculateSum(Number(this.valueOne), Number(this.valueTwo));
    console.log('final==> '+this.finalValue);
 }
}