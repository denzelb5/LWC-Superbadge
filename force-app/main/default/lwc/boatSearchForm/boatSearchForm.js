import { LightningElement } from 'lwc';

// import getBoatTypes from the BoatDataService => getBoatTypes method

export default class BoatSearchForm extends LightningElement {
    selectedBoatTypeId = '';

    // Private
    error = undefined;

    searchOptions;

    // Wire a custom Apex method
    boatTypes({ error, data }) {
        if (data) {
            this.searchOptions = data.map(type => {
                // TODO: complete the logic
            });
            this.searchOptions.unshift({ label: 'All Types', value: ' '});
        } else if (error) {
            this.searchOptions = undefined;
            this.error = error;
        }
    }
}