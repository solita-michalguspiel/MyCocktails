import { IonButton, IonButtons, IonContent, IonHeader, IonImg, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import CocktailService from '../../data/CocktailService';
import { MyCocktail, Ingredient } from '../../model/Cocktail';
import CocktailItem from './CocktailItem';

const Cocktails: React.FC = () => {

    function mapCocktailData(data: any): MyCocktail {
        const ingredients: Ingredient[] = [];
      
        // Create an array of ingredients
        for (let i = 1; i <= 15; i++) {
          const ingredient = data[`strIngredient${i}`];
          const measure = data[`strMeasure${i}`];
      
          if (ingredient && measure) {
            ingredients.push({ name: ingredient, measure });
          }
        }
        return {
          id: data.idDrink,
          name: data.strDrink,
          category: data.strCategory,
          type: data.strAlcoholic,
          glass: data.strGlass,
          instructions: data.strInstructions,
          imageUrl: data.strDrinkThumb,
          ingredients,
        };
      }

    const [cocktailData, setCocktailData] = useState<MyCocktail | null>(null);

    useEffect(() => {
        async function getRandomCocktail() {
            const randomCocktail = await CocktailService.getRandomCocktail();
            console.log("Cocktail" + randomCocktail);
            setCocktailData(mapCocktailData(randomCocktail));
        }
        getRandomCocktail();
    }, []);

    const handleGetRandomCocktail = async () => {
        const randomCocktail = await CocktailService.getRandomCocktail();
        
        console.log("Cocktail" + randomCocktail );
        setCocktailData(mapCocktailData(randomCocktail));
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Cocktails</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                    {cocktailData && (
                        <CocktailItem title={cocktailData.name} picture={cocktailData.imageUrl} category={cocktailData.category} type={cocktailData.type} glass={cocktailData.glass} instructions={cocktailData.instructions} ingredients={cocktailData.ingredients}></CocktailItem>
                    )}
                    <IonButton expand="block" onClick={handleGetRandomCocktail}>
                        Get Random Cocktail
                    </IonButton>
            </IonContent>
        </IonPage>
    );
};
export default Cocktails;
