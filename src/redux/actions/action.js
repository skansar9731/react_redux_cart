export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};


// remove items
  export const DLT = (id) => {
    return {
      type: "RMV_CART",
      payload: id,
    };
  };

// remove indivisual items

export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam,
  };
};