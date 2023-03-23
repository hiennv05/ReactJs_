export let actionAdAccount = (accountNew) => {
    return {
        type: "ADD_ACCOUNT",
        payload: accountNew,
    };
};


export let deleteAccount = (idDelete) => {
   return {
       type: "DELETE_ACCOUNT",
       payload: idDelete,
   };
};
