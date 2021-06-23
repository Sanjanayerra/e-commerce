import { IonIcon, IonLabel, IonPage } from '@ionic/react';
import { chevronBackSharp } from 'ionicons/icons';
import '../SignUp/SignUp.scss';
import React from 'react';

const SignUp: React.FC = () => {
  return (
    <IonPage className="home">
        <div className="cart-header">
          <div className="d-flex flex-row menu-icons">
            <IonIcon icon={chevronBackSharp} />
            <span className="heading">
              Register
            </span>
          </div>
          <div className="label">
                <IonLabel position="stacked">Full Name</IonLabel>
            </div>
            <div className="input-div">
                <input type="text" className="input" placeholder="Full name"/>
            </div>
            <div className="label">
                <IonLabel position="stacked">Email Address</IonLabel>
            </div>
            <div className="input-div">
                <input type="text" className="input" placeholder="Email Address"/>
            </div>
            <div className="label">
                <IonLabel position="stacked">Phone Number</IonLabel>
            </div>
            <div className="input-div">
                <input className="input" placeholder="Phone number"/>
            </div>
            <div className="label">
                <IonLabel position="stacked">Password</IonLabel>
            </div>
            <div className="input-div">
                <input className="input" type="password" placeholder="Password"/>
            </div>
            <div className="button-div">
            {/* <IonButton onClick={() => setSuccessMessage(true)} expand="block">Show Alert 1</IonButton> */}
                <button className="button" type="submit">Sign Up</button>
            </div>
            <div className="flex-horizontal-center">
                <span className="account-text">Already have an account? &nbsp;
                    <span className="login">Login</span>
                </span>
            </div>
        </div>
    </IonPage>
  );
};

export default SignUp;
