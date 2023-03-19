import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonMenuButton } from '@ionic/react'; import { useParams } from 'react-router';
import AnimatedDrink from '../../components/AnimatedDrink';
import './Home.css';
import '../../components/Common.css'

const Home: React.FC = () => {

    //const { name } = useParams<{ name: string; }>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding background">
                <h1 className="title">Welcome to MyCocktails App!</h1>
                <h4>Explore wide variety of delicious cocktails and find your new favorite drink.</h4>
                <AnimatedDrink></AnimatedDrink>
                <IonButton routerLink="/page/favourites" className='button'>Check some cocktails!</IonButton>

            </IonContent>
        </IonPage>
    );
};

export default Home;
