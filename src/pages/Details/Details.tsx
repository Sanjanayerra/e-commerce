import { IonChip, IonIcon, IonPage } from '@ionic/react';
import { chevronBackSharp, heart, heartOutline, shirtOutline } from 'ionicons/icons';
import '../Details/Details.scss';
import React, { useState } from 'react';

const Details: React.FC = () => {

    const [ favorite, setFavorite ] = useState(false)
  return (
      <IonPage className="bg-color">
            <div className="header">
                <div className="d-flex flex-row menu-icons space-between">
                    <IonIcon icon={chevronBackSharp} />
                    <div onClick= {() => setFavorite(!favorite)}>
                        <IonIcon className={favorite ? "favorite" : "unfavorite"} icon={favorite ? heartOutline : heart} />
                    </div>
                </div>
                <div className="flex">
                    <div className="d-flex flex-column">
                        <div className="icon-div"><IonIcon className="icon-image" icon={shirtOutline} /></div>
                        <span className="flex-horizontal-center">- - -</span>
                        <p className="product-details-name">Kemejaan Short Shirt</p>
                        <span className="text-center price">&#8377;&nbsp; 299</span>
                        <p className="product-details-description">A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.</p>
                        <div className="space-between">
                            <span className="select-size">Select Size</span>
                            <span className="size-chart">Size Chart</span>
                        </div>
                        <div className="flex-row space-between">
                            <IonChip className="sizes">S</IonChip>
                            <IonChip className="sizes">M</IonChip>
                            <IonChip className="sizes">L</IonChip>
                            <IonChip className="sizes">XL</IonChip>
                        </div>
                        <button className="button">Add to cart</button>
                    </div>
                </div>
            </div>
      </IonPage>
    )
}
export default Details;