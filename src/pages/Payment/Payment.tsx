import { IonPage, IonContent, IonIcon, IonButton, IonAlert } from '@ionic/react';
import { chevronBackSharp, bicycleOutline, createOutline } from 'ionicons/icons';
import '../Payment/Payment.scss';
import React, { useState } from 'react';

const Payment: React.FC = () => {
    
    const [ address, setAddress ] = useState([
        { location: "Home", phoneNumber: "(+62)32294131", address: "Cibadak Street 90" },
        { location: "Office", phoneNumber: "(+62)32294131", address: "Sukabumi City 12" }
    ])
    const [showAlert1, setShowAlert1] = useState(false);
    return ( 
        <IonPage>
            <div className="Payment-header">
                <div className="d-flex flex-row menu-icons">
                <IonIcon icon={chevronBackSharp} />
                    <span className="heading">
                        Checkout
                    </span>
                </div>
            </div>
            <IonContent>
                <div className="payment">
                    <div className="payment-page-labels">Payment Method</div>
                    <div className="flex-row space-between margin">
                        <span className="pay">
                            <IonIcon icon={bicycleOutline}></IonIcon>
                            <span className="pay-mode">AMA Pay</span>
                        </span>
                        <span className="pay">
                            <IonIcon icon={bicycleOutline}></IonIcon>
                            <span className="pay-mode">D Wallet</span>
                        </span>
                        <span className="pay">
                            <IonIcon icon={bicycleOutline}></IonIcon>
                            <span className="pay-mode">ME Pay</span>
                        </span>
                    </div>
                </div>
                <div className="delivery">
                    <div className="payment-page-labels">Delivery Address</div>
                    {
                        address.map((item:any) => {
                            return (   
                                <div className="delivery-card d-flex flex-row card">
                                    <div>
                                        <input className="radio-btn" type="radio"></input>
                                    </div>
                                    <div className="card-details flex-column">
                                        <div className="space-between card-name">
                                            <span className="home-label">{item.location}</span>
                                        </div>
                                        <div className="space-between flex-vertical-center">
                                            <div className="phone-number">
                                                {item.phoneNumber}
                                            </div>
                                        </div>
                                        <div className="space-between">
                                            <span className="address">
                                                {item.address}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="edit">
                                        <IonIcon icon={createOutline}></IonIcon>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="billing">
                    <div className="payment-page-labels">Billing Information</div>
                    <div className="billing-card card">
                        <table style={{width:"100%"}}>
                            <tr className="billing-info">
                                <td className="billing-label">Delivery Fee</td>
                                <td className="colon">:</td>
                                <td className="cost">$50</td>
                            </tr>
                            <tr className="billing-info">
                                <td className="billing-label">Sub Total</td>
                                <td className="colon">:</td>
                                <td className="cost">$349</td>
                            </tr>
                            <tr className="billing-info">
                                <td className="billing-label">Discount</td>
                                <td><div className="colon">:</div></td>
                                <td><div className="cost">$35</div></td>
                            </tr>
                            <tr className="billing-info total">
                                <td className="billing-label">Total</td>
                                <td className="colon">:</td>
                                <td className="total-cost">$315</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="button-div">
                    {/* <IonButton onClick={() => setShowAlert1(true)} expand="block">Show Alert 1</IonButton> */}
                    <button className="button" type="submit">Pay Now</button>
                </div>
            <IonAlert
                isOpen={showAlert1}
                onDidDismiss={() => setShowAlert1(false)}
                cssClass='my-custom-class'
                header={'Alert'}
                subHeader={'Subtitle'}
                message={'This is an alert message.'}
                buttons={['OK']}
            />
            </IonContent>
        </IonPage>
    )
}
export default Payment;