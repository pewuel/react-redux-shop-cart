import config from '../../config/config';


export const getLoadedStatus = ({ products }) => products.loaded;

export const getMatchedProducts = ({ products }) => {

    let { searchText, items, sortBy, orderBy } = products;


    if (searchText.length >= config.products.SEARCH_MIN_LENGTH) {
        items = items.filter(item => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
    }

    items.sort((val,val2) => {

        let a = val[sortBy];
        let b = val2[sortBy];

        if (typeof a === 'string' && typeof b === 'string') {
            a = a.toLowerCase();
            b = b.toLowerCase();
        }

        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }

        return 0;
    });

    if (orderBy !== 'ASC') {
        items.reverse();
    }


    return [
        ...items
    ];
};