import { IonPage, IonContent, IonIcon } from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';
import '../Success/Success.scss';
import React from 'react';

const Success: React.FC = () => {
    return ( 
        <IonPage>
            <IonContent>
                <div className="flex-centered tick">
                    <IonIcon icon={checkmarkCircleOutline}></IonIcon>
                </div>
                <div className="flex-centered flex-column">
                    <span className="thanks-message">
                        Thank's for Order
                    </span>
                    <span className="success-msg">
                        You Successfully make a payment.<br />
                        Wait until your goods are shipped
                    </span>
                </div>
                <div className="button-div">
                    <button className="button">Done</button>
                </div>
                <div>
                    <span className="back flex-centered">
                        Back to Orders
                    </span>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Success;