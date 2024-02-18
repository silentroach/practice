export const checkIfInstanceOf = (obj: any, classFunction: any): boolean => {
  if (
    obj === undefined ||
    classFunction === undefined ||
    classFunction === null
  ) {
    return false;
  }

  while (obj !== null) {
    if (obj.constructor === classFunction) {
      return true;
    }

    obj = Object.getPrototypeOf(obj);
  }

  return false;
};
