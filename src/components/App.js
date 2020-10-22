import React from 'react'
import Footer from './Footer'
import AddItem from '../containers/AddItem'
import VisibleTodoList from '../containers/VisibleItemList'

const App = () => (
  <div>
    <AddItem />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App