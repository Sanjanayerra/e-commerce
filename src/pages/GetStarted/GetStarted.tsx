import { IonPage, IonContent, IonIcon } from '@ionic/react';
import { arrowForwardOutline, cartOutline, chevronForwardOutline } from 'ionicons/icons';
import '../GetStarted/GetStarted.scss';
import React from 'react';

const GetStarted: React.FC = () => {
    return (
            <div className="getstarted-bg-img">
                <div className="page">
                    <div className="flex-centered">
                        <IonIcon className="cart-icon" icon={cartOutline}></IonIcon>
                    </div>
                    <div>
                        <div className="best-quality">Best Quality</div>
                        <div className="explore-text">Explore the 2021's hottest outfit accessories and more. Exclusively</div>
                    </div>
                    <div className="button-div">
                        <button className="button">Get Started
                        {/* <IonIcon className="arrow-icon" icon={chevronForwardOutline}></IonIcon>
                        <IonIcon className="arrow-icon" icon={chevronForwardOutline}></IonIcon>
                        <IonIcon className="arrow-icon" icon={chevronForwardOutline}></IonIcon> */}
                        </button>
                    </div>
                </div>
            </div>
    )
}
export default GetStarted;