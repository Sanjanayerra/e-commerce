import { IonPage, IonContent, IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';
import '../SearchFilter/SearchFilter.scss';
import React, {useState} from 'react';

const SearchFilter: React.FC = () => {

    const [ gender, setGender ] = useState([
        { gender: "Male" },{ gender: "Women" }, { gender: "Kids" }
    ])
    const [ brand, setBrand ] = useState([
        { brand: "Nikah" }, { brand: "Adinda" }, { brand: "Poebah" }, { brand: "Batako" }, { brand: "Ardila" }, { brand: "Kompak" }
    ])
    const [ model, setModel ] = useState([
        { model: "DA D1" }, { model: "UPC B1" }, { model: "SMP A1" }
    ])

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
                        {
                            gender.map((item:any) => {
                                return (
                                    <div className="items">{item.gender}</div>
                                )
                            })
                        }
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
                    <div className="scroll">
                        {
                            brand.map((item:any) => {
                                return(
                                    <div className="brand">{item.brand}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="filter-div">
                    <div className="label-heading">Model</div>
                    <div className="flex-row">
                        {
                            model.map((item:any) => {
                                return (
                                    <div className="items">{item.model}</div>
                                )
                            })
                        }
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