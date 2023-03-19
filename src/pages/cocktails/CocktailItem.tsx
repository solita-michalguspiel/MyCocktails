import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonImg } from '@ionic/react';
import React, { useEffect } from 'react';
import { Ingredient } from '../../model/Cocktail';
import { heart } from 'ionicons/icons';
import { useState } from 'react';


interface CocktailItemProps {
    title: string;
    picture: string;
    category: string;
    type: string;
    glass: string;
    instructions: string;
    ingredients: Ingredient[];
}

const CocktailItem: React.FC<CocktailItemProps> = ({ title, picture, category, type, glass, instructions, ingredients }) => {

    const [clickedStatus, setClickedStatus] = useState<Boolean>(false);

    useEffect(() => {
        setClickedStatus(false)
      }, [title])
      
    return (
        <IonCard className='cocktail-card'>
            <IonCardHeader>
                <div className='cocktail-card-header'>
                    <IonCardTitle>{title}</IonCardTitle>
                    <IonButton fill="clear" color="none"
                        onClick={() => setClickedStatus(!clickedStatus)}>
                        <IonIcon slot="icon-only"
                            icon={heart}
                            style={{ color: clickedStatus === true ? "red" : "gray" }}></IonIcon>
                    </IonButton>
                </div>

            </IonCardHeader>
            <IonCardContent>
                <IonImg src={picture} className="mainpicture" />
                <div className='capsule-holder'>
                    <div className='capsule-item'>{category}</div>
                    <div className='capsule-item'>{type}</div>
                    <div className='capsule-item'>{glass}</div>
                </div>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.name} {ingredient.measure}</li>
                    ))}
                </ul>
                <div>Instructions: {instructions}</div>
            </IonCardContent>
        </IonCard>
    );
};

export default CocktailItem;