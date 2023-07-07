
export const countProductPlus = (id) => {
    return {
        type: "COUNT_PRODUCT_PLUS",
        payload: id,
    };
}

export const countProductMinus = (id) => {
    return {
        type: "COUNT_PRODUCT_MINUS",
        payload: id
    };
}

export const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    };
}

export const totalTemp = () => {
    return {    
        type: "TOTAL_TEMP",
    };
}
