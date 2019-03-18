import { LightningElement } from 'lwc';

export default class WebComponentLifeCycle extends LightningElement {
    constructor(){
        super();
        console.log(this);
    }
    connectedCallback(){

        console.log('----------connectedCallback--------');
    }
    disconnectedCallback() {
        console.log('----------disconnectedCallback--------');
      
    }
    renderedCallback(){
        console.info('----------renderedCallback--------');

}