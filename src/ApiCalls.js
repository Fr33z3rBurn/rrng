const Api = Object.create(
  {},
  {
    GetRandomRecipe: {
      value: () => {
        return fetch("https://www.themealdb.com/api/json/v2/9973533/random.php").then((res) => res.json());
      },
    },
  }
);

export default Api;
