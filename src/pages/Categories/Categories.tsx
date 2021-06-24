import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { chevronBackSharp, shirt } from 'ionicons/icons';
import '../Categories/Categories.scss';
import React, {useState} from 'react';

const Categories: React.FC = (props:any) => {

  const [ categories, setcategories] = useState([
    // { categoryName: "Category Name", categoryDescription: "small description" },
    // { categoryName: "Category Name", categoryDescription: "small description" },
    // { categoryName: "Category Name", categoryDescription: "small description" },
    // { categoryName: "Category Name", categoryDescription: "small description" },
    { categoryName: "Category Name", categoryDescription: "small description" }
  ])
    return (
      <IonPage className="categories">
        {/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab> */}
        <div className="back-page-header page-margins">
                <div className="d-flex flex-row menu-icons">
                    <IonIcon icon={chevronBackSharp} />
                    <span className="heading">
                        Categories
                    </span>
                </div>
        </div>
        {
          categories.map((item:any) => {
            return (
              <div className="category-card d-flex flex-row card">
            <div>
                <IonIcon className="category-icon" icon={shirt}></IonIcon>
            </div>
          <div className="category-details flex-column">
            <div className="category-name">{item.categoryName}</div>
            <div className="category-description">{item.categoryDescription}</div>
          </div>
        </div>
            )
          })
        }
        
      </IonPage>
    );
  }
  export default Categories;