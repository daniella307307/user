import {useContext, useState} from 'react'
import { ThemeStyles } from '../App'
import Header from '../components/Header'
import CategoryComponent from '../components/CategoryComponent'

interface CategoriesProps {
    category: string
}

const Categories = () => {
    const theme: any = useContext(ThemeStyles)
    const [category, setCategory] = useState<CategoriesProps["category"]>("Select Category")

  return (
    <div className={`${theme.font} flex flex-col`}>
        <Header title="Categories" entity="Virgo Fidelis"/>

        <div className={`h-[100%] p-[1.4%]`}>
            <CategoryComponent category={category} setCategory={setCategory}/>
        </div>
    </div>
  )
}

export default Categories