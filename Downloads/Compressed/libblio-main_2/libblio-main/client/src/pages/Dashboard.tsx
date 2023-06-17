import {useContext} from 'react'
import { ThemeStyles } from '../App'
import Header from '../components/Header'

const Dashboard = () => {
    const theme: any = useContext(ThemeStyles)
    
  return (
    <div className={`${theme.font} flex flex-col`}>
      <Header title="Dashboard" entity="Virgo Fidelis"/>
    </div>
  )
}

export default Dashboard