import React, {useState, useEffect} from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonPage, 
  IonText, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './About.css';
import { warning } from 'ionicons/icons';
import DarkModeToggle from '../components/darkModeToggle';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbarStyle' color=''>
         <div>
          <div><IonTitle className='text-3xl font-bold'>About</IonTitle></div>
          {/* <div><DarkModeToggle></DarkModeToggle></div> */}
         </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
              <IonCard className='aboutCardStyle' color='large'>
                <img alt='Ionic image' src='https://th.bing.com/th?id=OIP.vn8kDU_UylsBd79dzrzeFAHaEK'></img>
                <IonCardHeader>
                  <IonCardTitle>React/Ionic app for a learning purpose.</IonCardTitle>
                  <IonCardSubtitle>
                    <p>This project has a shop, calendar and Photo Gallery.</p>
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className='text-'>
                  This app could be a good use case for thos who would like to create mobile app using ionic framework, code once for all purpose. 
                  </div>
                </IonCardContent>
              </IonCard>
      </IonContent>
    </IonPage>
   
  );
};

export default About;
