import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
const navigationItems = ['Home', 'Profile', 'Project', 'Settings', "Logout"];
function App() {
  return (
    <>
      <Header title = "Student Dashboard" subtitle="Welcome to React Practice" />
      <Sidebar navigationItems={navigationItems} />
      <MainContent />
    </>
  )
}

export default App;