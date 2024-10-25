import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Navexamples extends NavigationMixin(LightningElement) {
    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    openAccountList(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            }
        });
    }

    createNewAccount(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }

    openAccountRecord(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes: {
                recordId: "0015g00000LKX1VAAX",
                actionName: 'view'
            }
        });
    }

    openLightningComponent(){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__AuraCmp'
            }
        });
    }

    openSalesforceBlog(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes: {
                url : 'https://niksdeveloper.com/category/salesforce/'
            }
        });
    }
    navigateToViewAccount(){
          this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
        recordId: '0015g00000LKX1VAAX',
        objectApiName: 'Account',
        actionName: 'view'
        },
        });}

        navigateToRelatedList() {
            this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
            recordId: '0015g00000LKX1VAAX',
            objectApiName: 'Account',
            relationshipApiName: 'Contacts',
            actionName: 'view'
            },
            }); 
        }
    }