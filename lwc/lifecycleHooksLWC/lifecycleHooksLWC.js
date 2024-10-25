import { LightningElement,api } from 'lwc';
import page1 from './temp1.html';
import page2 from './temp2.html';
export default class LifecycleHooksLWC extends LightningElement {
lst=[];
@api page='temp1';

constructor() {
super();
console.log('In Constructor');
}

connectedCallback() {
this.lst.push('Hello LWC');
console.log('ConnectedCallback');
console.log(this.lst);
}
disconnectedCallback() {
this.lst=[]
console.log('disconnectedCallback');
} 
changeTemp(){
    if(this.page=='temp1')
    this.page='temp2';
    else
    this.page='temp1';
}
render(){
    if(this.page=='temp1')
    return page1;
    else
    return page2;
}

}