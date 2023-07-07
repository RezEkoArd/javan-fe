
const initialState = {
    products : [
        {
            id: 1001,
            img : "./image/pink-shirt.jpg",
            nameProduct : "Pink Shirt",
            color: "Rose Pink",
            size: "M",
            count: 1,
            price : 100,
         },
         {
            id: 1002,
            img : "./image/t-shirt.jpg",
            nameProduct : "Blue Tshirt",
            color: "Ocean Blue",
            size: "L",
            count: 1,
            price : 80,
         },
    ],
    totalTemp :  0,
}

const calculateTotalTemp = (products) => {
    return products.reduce((total, item) => {
        return total + item.count * item.price;
    }, 0);
};


const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_PRODUCT_PLUS" : 
        return {
            ...state,
            products: state.products.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        count: item.count + 1
                    };
                }
                return item;
            }),
            totalTemp: calculateTotalTemp(state.products.map((item) => {
                if (item.id === action.payload) {
                  return {
                    ...item,
                    count: item.count + 1,
                  };
                }
                return item;
              })),
        }
        
    case "COUNT_PRODUCT_MINUS" : 
    return {
        ...state,
        products: state.products.map((item) => {
            if (item.id === action.payload) {
                return {
                    ...item,
                    count: item.count === 0 ? 0 : item.count - 1
                };
            }
            return item;
        }),
        totalTemp: calculateTotalTemp(state.products.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                count: item.count === 0 ? 0 : item.count - 1,
              };
            }
            return item;
          })),
    }
    
    case "DELETE_PRODUCT" : 
        return {
            ...state,
            products: state.products.filter(item => item.id !== action.payload),
            totalTemp: calculateTotalTemp(state.products.filter((item) => item.id !== action.payload)),
        }

    case "TOTAL_TEMP" : 
        let totalTemp = 0;
        state.products.forEach((item) => {
            totalTemp += item.count * item.price;
        });
        return {
            ...state,
            totalTemp: totalTemp,
        };

    default: 
        return state;
  }
}

export default CartReducer