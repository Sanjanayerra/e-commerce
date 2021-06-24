import { IonPage, IonIcon, IonChip, IonLabel } from "@ionic/react";
import { search, notificationsOutline, optionsOutline, menu} from "ionicons/icons";
import "../Home/Home.scss";
import React, {useState} from "react";

const Home: React.FC = (props:any) => {

  const [categories, setCategories] = useState([
    {categories: "Jacket"},{categories: "T-Shirt"},{categories: "Dress"},{categories: "Jeans"}
  ])
  const [newArrivals, setNewArrivals] = useState([
    {newArrivals: "Jacket"},{newArrivals: "T-Shirt"},{newArrivals: "Dress"},{newArrivals: "Jeans"}
  ])
  const [newArrivals2, setNewArrivals2] = useState([
    {newArrivals2: "Jacket"},{newArrivals2: "T-shirt"},{newArrivals2: "Jeans"},{newArrivals2: "Dress"}
  ])

  return (
    <IonPage className="home">
      <div className="header">
        <div className="d-flex flex-row menu-icons">
          <IonIcon icon={menu} />
          <IonIcon icon={notificationsOutline} />
        </div>
        <div className="explore-txt">
          Explore
        </div>
        <div className="sub-text">
          Best outfit for your day
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
      </div>
      <div className="content">
        <div className="space-between">
          <span className="component-heading">Categories</span>
          <span className="component-heading">See All</span>
        </div>
        <div className="scrollable-cards flex-row">
        {
          categories.map((item:any) => {
                return(
          <IonChip>
            <IonLabel>{item.categories}</IonLabel>
          </IonChip>
          )
        })
        }
        </div>
        <div className="space-between">
          <span className="component-heading">New Arrivals</span>
          <span className="component-heading">See All</span>
        </div>
        <div className="scrollable-cards2">
          {
            newArrivals.map((item:any) => {
              return (
                <IonChip>
                  <IonLabel>{item.newArrivals}</IonLabel>
                </IonChip>
              )
            })
          }
        </div>
        <div className="space-between">
          <span className="component-heading">New Arrivals</span>
          <span className="component-heading">See All</span>
        </div>
        <div className="scrollable-cards2">
          {
            newArrivals2.map((item:any) => {
              return(
                <IonChip>
                  <IonLabel>{item.newArrivals2}</IonLabel>
                </IonChip>
              )
            })
          }
        </div>
      </div>
    </IonPage>
  );
};

export default Home;