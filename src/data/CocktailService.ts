import axios from 'axios';

class CocktailService {
  static async getRandomCocktail() {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      console.log(response.data.drinks[0])
      return response.data.drinks[0];
    } catch (error) {
      console.error(error);
    }
  }
}

export default CocktailService;
