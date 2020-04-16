import { LightningElement, api } from 'lwc';

export default class ViewSource extends LightningElement {
    baseURL =
        'https://github.com/trailheadapps/lwc-recipes-oss/tree/master/src/modules/';

    @api source;

    get sourceURL() {
        return 'https://github.com/sfdcbrewery/Pok-monLightningWebComponent';
    }
}
