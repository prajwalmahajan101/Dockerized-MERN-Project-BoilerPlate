export const getItemFromLocalStorage = (key:string):string=> {
  const value = localStorage.getItem(key);
  if(value) return value;
  return ""
}