import { LightningElement } from 'lwc';

export default class TemplateIfTrueExampleLWC extends LightningElement {
    areDetailsVisible=false;
    handleChange(event){
        this.areDetailsVisible=event.target.checked;
    }

}