import { IonContent, IonIcon, IonPage, IonLabel } from '@ionic/react';
import { cartOutline, chevronBackSharp } from 'ionicons/icons';
import '../Login/Login.scss';
import React from 'react';

const Login: React.FC = (props: any) => {

    return (
        <IonPage>
            {/* <div className="cart-header">
                <div className="d-flex flex-row menu-icons">
                    <IonIcon icon={chevronBackSharp} />
                    <span className="heading">
                        Register
                    </span>
                </div>
            </div> */}
            <IonContent>
                <div className="flex-centered">
                    <IonIcon className="cart-icon" icon={cartOutline}></IonIcon>
                </div>
                {/* <img className="flex-horizontal-center login-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DfItjsEkWRefjQ-FfQZtHK5RhDq6SkndTscSAs0Nx25FJ1gpWFlGJiYOKRrKpYcAQBw&usqp=CAU" /> */}
                <div className="great-text">Great to see you!</div>
                <div className="start-text">login with your email address and password</div>
                <form>
                    {/* <div className="label">
                        <IonLabel position="stacked">Email Address</IonLabel>
                    </div> */}
                    <div className="input-div">
                        <input type="username" className="input" placeholder="Email Adddress" />
                    </div>

                    {/* <div className="label">
                        <IonLabel position="stacked">Password</IonLabel>
                    </div> */}
                    <div className="input-div">
                        <input className="input" type="password" placeholder="Password" />
                    </div>
                    <div className="text-forgot">Forgot password?</div>

                    <div className="button-div">
                        <button className="button" >Log In</button>
                    </div>
                    <div className="flex-centered pd-bt-30">
                        <span className="account-text">Are you new user? &nbsp;
                            <span className="login">Register</span>
                        </span>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Login;


