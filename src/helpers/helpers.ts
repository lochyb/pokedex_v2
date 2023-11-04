export const capitalizeFirstLetter = (n: string) => {
  const array = n.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
};

export const getIdFromUrl = (url: string): number => {
  const urlParts = url.split("/");
  return Number(urlParts[urlParts.length - 2]);
};
