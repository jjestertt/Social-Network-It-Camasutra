export const updateObjectInArray = (item, actionId, itemProp, objectItem) => {
   return item.map(user => {
        if (user[itemProp] === actionId) {
            return {...user, ...objectItem}
        }
        return user;
    });
}