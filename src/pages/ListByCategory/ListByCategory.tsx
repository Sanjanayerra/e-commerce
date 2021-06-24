import { IonPage, IonIcon, IonContent } from '@ionic/react';
import { search, optionsOutline, chevronBackSharp, star, shirtOutline } from 'ionicons/icons';
import '../ListByCategory/ListByCategory.scss';
import React, { useState } from 'react';

const ListByCategory: React.FC = () => {

    const [ listCategory, setListCategory ] = useState([
        { productName: "Dikaosan T-Shirt", productDescription: "15.6/Corei7/8GB/SSD", productCost: "499", productRating: "5.0" },
        { productName: "Dikaosan T-Shirt", productDescription: "15.6/Corei7/8GB/SSD", productCost: "499", productRating: "5.0" },
        { productName: "Dikaosan T-Shirt", productDescription: "15.6/Corei7/8GB/SSD", productCost: "499", productRating: "5.0" },
        { productName: "Dikaosan T-Shirt", productDescription: "15.6/Corei7/8GB/SSD", productCost: "499", productRating: "5.0" },
        { productName: "Dikaosan T-Shirt", productDescription: "15.6/Corei7/8GB/SSD", productCost: "499", productRating: "5.0" }
    ])
    return (
        <IonPage>
            <div className="header">
                <div className="d-flex flex-row menu-icons">
                    <IonIcon icon={chevronBackSharp} />
                    <span className="heading">
                        Shirts
                    </span>
                </div>
            </div>
            <IonContent>
                <div className="padding">
                    <div className="home search">
                        <div className="search-box">
                            <div className="input-icon-wrap">
                            <span className="input-icon">
                                <IonIcon icon={search} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search for your book"
                                className="input-with-icon"
                                id="form-name"
                            />
                            </div>
                        </div>
                        <span className="options-menu">
                            <IonIcon icon={optionsOutline} />
                        </span>
                    </div>
                    <div className="flex-row card-row">
                        {
                            listCategory.map((item:any) => {
                                return (
                                    <div className="category-card-details flex-column d-flex card">
                                        <div className="item-card">
                                            <div className="flex-horizontal-center">
                                                <IonIcon className="image" icon={shirtOutline} />
                                            </div>
                                            <div className="product-name">
                                                {item.productName}
                                            </div>
                                            <div className="product-description">
                                                {item.productDescription}
                                            </div>
                                            <div className="product-prize space-between">
                                                &#8377;&nbsp;{item.productCost}
                                                <span className="product-rating">
                                                <IonIcon icon={star} />{item.productRating}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default ListByCategory;