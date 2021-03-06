import React from "react"

function Categories({value, onClickCategory}){

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  // const onClickCategory = (index) => {
  //   setActiveIndex(index)
  // }
    return(
      <div class="categories">
      <ul>
         {categories.map((categoryName, i ) => (
          <li key={i}
          onClick={() => onClickCategory(i)} className = {value === i ? 'active': ''} >
          {categoryName}
          </li>
        ))}   
      </ul>
    </div>
    )
}
export default Categories