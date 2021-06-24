import { IonContent, IonPage, IonIcon, } from '@ionic/react';
import { chevronBackSharp, addOutline, removeOutline } from 'ionicons/icons';
import '../Cart/Cart.scss';
import React, { useState } from 'react';

const Cart: React.FC = () => {

  const [cartItems, setCartItems] = useState([
    { productName: "Kemejaan short shirt", cost: "299" },
    { productName: "Kemejaan short shirt", cost: "299" }
  ])
  return (
    <IonPage>
      <div className="header">
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
          {
            cartItems.map((item: any) => {
              return (
                <div className="cart-card">
                  <div className="card-details flex-row">
                    <div className="product-Image">
                      <img src="assets/icon/shirt.png" />
                    </div>
                    <div className="flex-column width">
                      <div className="card-name">
                        <span className="product-name">{item.productName}</span>
                      </div>
                      <div className="space-between flex-vertical-center">
                        <span className="product-cost">
                          &#8377;&nbsp;{item.cost}
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
                </div>
              )
            })
          }
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