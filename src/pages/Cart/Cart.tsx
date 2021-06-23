import { IonContent, IonPage, IonIcon,} from '@ionic/react';
import { chevronBackSharp, addOutline, removeOutline } from 'ionicons/icons';
import '../Cart/Cart.scss';
import React from 'react';

const Cart: React.FC = () => {
    return (
      <IonPage className="home">
        <div className="cart-header">
          <div className="d-flex flex-row menu-icons">
            <IonIcon icon={chevronBackSharp} />
            <span className="heading">
              My Cart
            </span>
          </div>
          {/* <div className="search">
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
          </div> */}
        </div>
        <IonContent>
        <div className="cart-card d-flex flex-row card">
          <div>
            <img src="https://image.shutterstock.com/image-vector/tshirt-cartoon-vector-illustration-black-260nw-254808511.jpg" />
          </div>
          <div className="card-details flex-column space-between ">
            <div className="card-name">
              <span className="product-name">Kemejaan short shirt</span>
            </div>
            <div className="space-between flex-vertical-center">
              <span className="product-cost">
                &#8377;&nbsp;299
              </span>
              <span className="add-button">
                <button className="icon">
                  <IonIcon icon={addOutline} />
                </button>
                <span className="quantity">1</span>
                <button className="icon">
                  <IonIcon icon={removeOutline} />
                </button>
              </span>
            </div>
          </div>
        </div>
        </IonContent>
        <div className="total-price-card flex-row">
          <div>
            <span className="price-text">Total Price</span>
            <br />
            <span className="price">&#8377;&nbsp;299</span>
          </div>
          <div>
            <button className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      </IonPage>
    );
  }
  export default Cart;