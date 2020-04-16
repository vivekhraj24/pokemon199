import { LightningElement, track } from 'lwc';

const QUERY_URL =
    'https://pokeapi.co/api/v2/pokemon/';

export default class MiscRestCall extends LightningElement {
    @track searchKey = 'pikachu';
    @track pokemons;
    @track pokeability;
    @track error;
    
    
    handleSearchKeyChange(event) {
        this.searchKey = event.target.value.toLowerCase();
    }

    handleSearchClick() {
        fetch(QUERY_URL + this.searchKey)
            .then(response => {
                if (!response.ok) {
                    this.error = response;
                }
                return response.json();
            })
            .then(jsonResponse => {
                this.pokemons = jsonResponse;
            })
            .catch(error => {
                this.error = error;
                this.pokemons = undefined;
            });
    }
}
