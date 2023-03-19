import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const Favourites: React.FC = () => {

  //const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='background'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favourites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Hello Favourites!</p>
      </IonContent>
    </IonPage>
  );
};

export default Favourites;
