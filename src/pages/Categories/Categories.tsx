import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { chevronBackSharp, shirt } from 'ionicons/icons';
import '../Categories/Categories.scss';
import React from 'react';

const Categories: React.FC = (props:any) => {

    return (
      <IonPage className="categories header">
        {/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab> */}
        <div className="back-page-header page-margins">
            <div className="cart-header">
                <div className="d-flex flex-row menu-icons">
                    <IonIcon icon={chevronBackSharp} />
                    <span className="heading">
                        Categories
                    </span>
                </div>
            </div>
        </div>
        <IonContent>
        <div className="category-card d-flex flex-row card">
            <div>
                <IonIcon className="category-icon" icon={shirt}></IonIcon>
            {/* <img src="https://image.shutterstock.com/image-vector/tshirt-cartoon-vector-illustration-black-260nw-254808511.jpg" /> */}
            </div>
          <div className="category-details flex-column">
            <div className="category-name">Category Name</div>
            <div className="category-description">small description</div>
          </div>
        </div>
        <div className="category-card d-flex flex-row card">
            <div>
                <IonIcon className="category-icon" icon={shirt}></IonIcon>
            {/* <img src="https://image.shutterstock.com/image-vector/tshirt-cartoon-vector-illustration-black-260nw-254808511.jpg" /> */}
            </div>
          <div className="category-details flex-column">
            <div className="category-name">Category Name</div>
            <div className="category-description">small description</div>
          </div>
        </div>
        <div className="category-card d-flex flex-row card">
            <div>
                <IonIcon className="category-icon" icon={shirt}></IonIcon>
            {/* <img src="https://image.shutterstock.com/image-vector/tshirt-cartoon-vector-illustration-black-260nw-254808511.jpg" /> */}
            </div>
          <div className="category-details flex-column">
            <div className="category-name">Category Name</div>
            <div className="category-description">small description</div>
          </div>
        </div>
        <div className="category-card d-flex flex-row card">
            <div>
                <IonIcon className="category-icon" icon={shirt}></IonIcon>
            {/* <img src="https://image.shutterstock.com/image-vector/tshirt-cartoon-vector-illustration-black-260nw-254808511.jpg" /> */}
            </div>
          <div className="category-details flex-column">
            <div className="category-name">Category Name</div>
            <div className="category-description">small description</div>
          </div>
        </div>
        <div className="category-card d-flex flex-row card">
            <div>
                <IonIcon className="category-icon" icon={shirt}></IonIcon>
            {/* <img src="https://image.shutterstock.com/image-vector/tshirt-cartoon-vector-illustration-black-260nw-254808511.jpg" /> */}
            </div>
          <div className="category-details flex-column">
            <div className="category-name">Category Name</div>
            <div className="category-description">small description</div>
          </div>
        </div>
        <div className="category-card d-flex flex-row card">
            <div>
                <IonIcon className="category-icon" icon={shirt}></IonIcon>
            {/* <img src="https://image.shutterstock.com/image-vector/tshirt-cartoon-vector-illustration-black-260nw-254808511.jpg" /> */}
            </div>
          <div className="category-details flex-column">
            <div className="category-name">Category Name</div>
            <div className="category-description">small description</div>
          </div>
        </div>
        </IonContent>
      </IonPage>
    );
  }
  export default Categories;