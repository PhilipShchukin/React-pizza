import React from "react";

import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Pagination from "../components/Pagination ";
import { SearchContext } from "../App";

import {setCategoryId} from '../redux/slices/filterSlice'

import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
    
    const dispatch = useDispatch()
    const {categoryId, sort} = useSelector((state) => state.filter)
    

    const {searchValue} = React.useContext(SearchContext)

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const [currentPage, setCurrentPage] = React.useState(1)



    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    React.useEffect(() => {
        setIsLoading(true)
        const sortBy = sort.sortProperty.replace('-', '')
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desk';
        const category = categoryId > 0 ? `category= ${categoryId}`: ''
        const search = searchValue  ? `&search=${searchValue}` : ''

        
        fetch(`https://628ce7a43df57e983ed86e96.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&search=${search}`,)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
            window.scrollTo(0,0)
    }, [categoryId,sort.sortProperty,searchValue,currentPage])



    const pizzas = items
    // .filter((obj) => {
    //     if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //         return true
    //     }
    //     return false    
    // })
    .map((obj) => (<PizzaBlock key={obj.id} {...obj} />))

    const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)


    return (
        <div class="container">
            <div class="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">

                { isLoading ? skeleton : pizzas }

            </div>
            <Pagination onChangePage={(number)=> setCurrentPage(number)} />
        </div>

    )
}

export default Home