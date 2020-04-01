import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
 
import PeoplePage from './src/pages/PeoplePage';
import PeopleDatailPage from './src/pages/PeopleDatailPage';
 
const AppNavigator = createStackNavigator(
  
  {
    Main: {
      screen: PeoplePage
    },
    PeopleDatailPage: {
      screen: PeopleDatailPage,
      navigationOptions: ({ navigation }) => {
          const name = navigation.state.params.elem.name.first
          return(
            {
                title: name,
                headerTitleStyle: {
                  color: 'white',
                  fontSize: 25,
                  alignItems: 'center',
                  flexDirection: 'row'
                }
            }
          )
      }
    }
  },

  {
    defaultNavigationOptions: {
        title: 'Contatos',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#c5c5c5'
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            flexGrow: 1,
            textAlign: 'center'
        }
    }
  }
)
 
const AppContainer = createAppContainer(AppNavigator);
 
export default AppContainer;