const Api = Object.create(
  {},
  {
    GetRandomRecipe: {
      value: () => {
        return fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((res) => res.json());
      },
    },
  }
);

export default Api;
