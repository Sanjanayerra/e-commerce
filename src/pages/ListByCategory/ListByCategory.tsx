import { IonPage, IonIcon } from '@ionic/react';
import { search, optionsOutline, chevronBackSharp, star, shirtOutline } from 'ionicons/icons';
import '../ListByCategory/ListByCategory.scss';
import React from 'react';

const ListByCategory: React.FC = () => {
    return (
        <IonPage className="home">
            <div className="cart-header">
                <div className="d-flex flex-row menu-icons">
                    <IonIcon icon={chevronBackSharp} />
                    <span className="heading">
                        Shirts
                    </span>
                </div>
                <div className="search">
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
                <div className="flex-row">
                    <div className="category-card-details flex-column d-flex card">
                        <div className="item-card">
                            <div className="flex-horizontal-center">
                                <IonIcon className="image" icon={shirtOutline} />
                                {/* <img className="image" src="https://image.shutterstock.com/image-vector/tshirt-cartoon-vector-illustration-black-260nw-254808511.jpg" /> */}
                            </div>
                            <div className="product-name">
                                Dikaosan T-Shirt
                            </div>
                            <div className="product-description">
                                15.6/Corei7/8GB/SSD
                            </div>
                            <div className="product-prize space-between">
                                &#8377;&nbsp;299
                                <span className="product-rating">
                                <IonIcon icon={star} />5.0
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="category-card-details flex-column d-flex card">
                        <div className="item-card">
                            <div className="flex-horizontal-center">
                                <IonIcon className="image" icon={shirtOutline} />
                                {/* <img className="image" src="https://image.shutterstock.com/image-vector/tshirt-cartoon-vector-illustration-black-260nw-254808511.jpg" /> */}
                            </div>
                            <div className="product-name">
                                Dikaosan T-Shirt
                            </div>
                            <div className="product-description">
                                15.6/Corei7/8GB/SSD
                            </div>
                            <div className="product-prize space-between">
                                &#8377;&nbsp;299
                                <span className="product-rating">
                                <IonIcon icon={star} />5.0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IonPage>
    )
}
export default ListByCategory;