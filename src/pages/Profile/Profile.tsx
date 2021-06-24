import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { chevronBackSharp, chevronForward, clipboardOutline, lockClosedOutline, personOutline, walletOutline } from 'ionicons/icons';
import '../Profile/Profile.scss';
import React from 'react';

const Profile: React.FC = (props:any) => {
  
  return (
    <IonPage className="profile">
      <IonContent>
        <div className="page-margins">
            <div className="header">
                <div className="d-flex flex-row menu-icons">
                    <IonIcon icon={chevronBackSharp} />
                    <span className="heading">
                        Profile
                    </span>
                </div>
            </div>
            <div className="back-page-header page-margins flex-horizontal-center">
                <div className="d-flex flex-column">
                    <img src="data:image/png;base64,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" className="profile-image" />
                    <p>Sai Sasank</p>
                </div>
            </div>
      </div>
        <div className="profile-card">
           <div className="setting-details space-between">
             <div className="flex-row flex-vertical-center">
                <IonIcon className="setting-icon" icon={personOutline}></IonIcon>
                  <div className="flex-column">
                  <span className="heading">Personal</span>
                  <span>Profile, phone, email</span>
                </div>
             </div>
             <div className="fwd-arrow"><IonIcon icon={chevronForward}/></div>
           </div>
            <div className="flex-row flex-vertical-center setting-details space-between">
              <div className="flex-row flex-vertical-center">
                  <IonIcon className="setting-icon" icon={walletOutline}></IonIcon>
                  <div className="flex-column">
                    <span className="heading">Payment</span>
                    <span>CC Number, Method, Paylater</span>
                  </div>
              </div>
              <div className="fwd-arrow"><IonIcon icon={chevronForward}/></div>
            </div>
           <div className="flex-row flex-vertical-center setting-details space-between">
             <div className="flex-row flex-vertical-center">
                <IonIcon className="setting-icon" icon={lockClosedOutline}></IonIcon>
                <div className="flex-column">
                  <span className="heading">Security</span>
                  <span>Password, 2F Authentication </span>
                </div>
             </div>
             <div className="fwd-arrow"><IonIcon icon={chevronForward}/></div>
           </div>
           <div className="flex-row flex-vertical-center setting-details space-between no-border">
             <div className="flex-row flex-vertical-center">
                <IonIcon className="setting-icon" icon={clipboardOutline}></IonIcon>
                <div className="flex-column">
                  <span className="heading">Order History</span>
                  <span>Shipping history</span>
                </div>
             </div>
             <div className="fwd-arrow"><IonIcon icon={chevronForward}/></div>
           </div>
           
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;