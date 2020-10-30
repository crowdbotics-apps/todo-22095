import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings165229Navigator from '../features/Settings165229/navigator';
import Settings165221Navigator from '../features/Settings165221/navigator';
import UserProfile165219Navigator from '../features/UserProfile165219/navigator';
import ArticleList1164834Navigator from '../features/ArticleList1164834/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings165229: { screen: Settings165229Navigator },
Settings165221: { screen: Settings165221Navigator },
UserProfile165219: { screen: UserProfile165219Navigator },
ArticleList1164834: { screen: ArticleList1164834Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
