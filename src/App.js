import { StackNavigator, TabNavigator } from 'react-navigation'
import SearchPage from './page/Search'
import ReaderPage from './page/Reader'
import BookPage from './page/Book'
import HomePage from './page/Home'
import ViewerPage from './page/Viewer'
import { enableLogging } from 'mobx-logger'

const HomeTabBar = TabNavigator({
  BookInfo: { screen: HomePage },
  Search: { screen: SearchPage }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false
})

const Screen = StackNavigator({
  home: { screen: HomeTabBar },
  reader: { screen: ReaderPage },
  book: { screen: BookPage },
  viewer: {screen: ViewerPage}
}, {
  initialRouteName: 'home',
  headerMode: 'screen'
})
const config = {
  predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
  action: true,
  reaction: true,
  transaction: true,
  compute: true
}
enableLogging(config)

export default Screen
