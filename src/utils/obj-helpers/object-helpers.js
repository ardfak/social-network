export const updateObjectInArray = (items, itemsId, objPropsName, newObjProps) => {
  return items.map(u => {
    if (u[objPropsName] === itemsId) {
      return {...u, ...newObjProps}
    }
    return u
  })
}