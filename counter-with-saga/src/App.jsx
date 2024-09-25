import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Counter from './components/Counter'
import DataComponent from './components/DataComponent'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <DataComponent/>
    </Provider>
  )
}

export default App