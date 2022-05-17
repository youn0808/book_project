export const getBooksFromApi = () => {
  return fetch(
    `https://openlibrary.org/subjects/biography.json?limit=160`
  ).then((response) => {
    if (response.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
};
