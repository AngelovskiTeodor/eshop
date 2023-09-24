import IProductApiData from "../types/IProductApiData"

export const isSet = (str: string | null | undefined): Boolean => {
    if (!str || str == null || str == undefined || str == "") {
        return false
    }
    return true
}

export const getSkusFromList = (productsList: Array<IProductApiData>): Array<String> => {
    const skusList = new Array<String>();
    productsList.forEach(product => {
        const sku = new String(product.sku);
        skusList.push(sku);
    });
    return skusList;
}

export const elementExistsInList = (list: Array<String>, value: string): Boolean => {
    let ret = false
    list.forEach(elem => {
        if (elem.localeCompare(value)==0) {
            ret = true;
        }
    });
    return ret;
}