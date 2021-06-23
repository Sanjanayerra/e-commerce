import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cartOutline, ellipse, heart, heartOutline, home, homeOutline, personOutline, square, triangle, triangleOutline } from 'ionicons/icons';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Categories from "./pages/Categories/Categories"
import Profile from './pages/Profile/Profile';
import Details from './pages/Details/Details';
import GetStarted from './pages/GetStarted/GetStarted';
import Success from './pages/Success/Success';
import SearchFilter from './pages/SearchFilter/SearchFilter'
import Payment from './pages/Payment/Payment';
import ListByCategory from './pages/ListByCategory/ListByCategory';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
          <Route path="/GetStarted">
            <GetStarted />
          </Route>
          <Route path="/Success">
            <Success />
          </Route>
          <Route path="/SearchFilter">
            <SearchFilter />
          </Route>
          <Route path="/Payment">
            <Payment />
          </Route>
          <Route path="/ListByCategory">
            <ListByCategory />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            {/* <IonLabel>Home</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="cart" href="/cart">
            <IonIcon icon={cartOutline} />
            {/* <IonLabel>Tab 2</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="signUp" href="/signUp">
            <IonIcon icon={heartOutline} />
            {/* <IonLabel>Tab 3</IonLabel> */}
          </IonTabButton>
          {/* <IonTabButton tab="login" href="/login">
            <IonIcon icon={personOutline} />
          </IonTabButton>
          <IonTabButton tab="categories" href="/categories">
            <IonIcon icon={personOutline} />
          </IonTabButton>
          <IonTabButton tab="details" href="/details">
            <IonIcon icon={triangle} />
          </IonTabButton>
          <IonTabButton tab="getStarted" href="/getStarted">
            <IonIcon icon={triangleOutline} />
          </IonTabButton>
          <IonTabButton tab="success" href="/success">
            <IonIcon icon={triangleOutline} />
          </IonTabButton>
          <IonTabButton tab="searchfilter" href="searchfilter">
            <IonIcon icon={triangleOutline} />
          </IonTabButton>
           <IonTabButton tab="payment" href="payment">
            <IonIcon icon={triangleOutline} />
          </IonTabButton> */}
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personOutline} />
          </IonTabButton>
          <IonTabButton tab="listbycategory" href="/listbycategory">
            <IonIcon icon={triangleOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
