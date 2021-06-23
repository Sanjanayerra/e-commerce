import { IonPage, IonContent, IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';
import '../SearchFilter/SearchFilter.scss';
import React from 'react';

const SearchFilter: React.FC = () => {
    
    return ( 
        <IonPage>
            <div className="filter-header">
                <div className="d-flex flex-row menu-icons space-between">
                    <span className="heading">
                        Filter
                    </span>
                    <span className="close-btn"><IonIcon icon={close}></IonIcon></span>
                </div>
            </div>
            <IonContent>
                <div className="filter-div">
                    <div className="label-heading">Gender</div>
                    <div className="flex-row">
                        <div className="items">Man</div>
                        <div className="items">Woman</div>
                        <div className="items">Kids</div>
                    </div>
                </div>
                <div className="filter-div">
                    <div className="label-heading">Price</div>
                    <div>
                        <section className="range-slider">
                            <span className="rangeValues"></span>
                            <input value="5" min="0" max="15" step="0.5" type="range" />
                            <input value="10" min="0" max="15" step="0.5" type="range" />
                        </section>
                    </div>
                </div>
                <div className="filter-div">
                    <div className="label-heading">Brand</div>
                    <div className="flex-row">
                        <div className="items">Nikah</div>
                        <div className="items">Adinda</div>
                        <div className="items">Poebah</div>
                        <div className="items">Batako</div>
                    </div>
                    <div className="flex-row">
                        <div className="items">Ardila</div>
                        <div className="items">Kompak</div>
                    </div>
                </div>
                <div className="filter-div">
                    <div className="label-heading">Model</div>
                    <div className="flex-row">
                        <div className="items">DA D1</div>
                        <div className="items">UPC B1</div>
                        <div className="items">SMP A1</div>
                    </div>
                </div>
                <div className="button-div">
                    <button className="button">Apply Filter</button>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default SearchFilter;