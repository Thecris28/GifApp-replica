import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifApp = () => {

    const [Categories, setCategories] = useState(['kono suba', 'jujutsu', 'shingeki'])

    const addCategory = (newCategorie) => {
        setCategories([newCategorie, ...Categories])
    }


  return (
    <>
    <h1>Gifs App</h1>

    <AddCategory setCategory={setCategories}/>
    <ol>
        <button onClick={addCategory}>Agregar</button>
        {Categories.map(category => {
            return <li key={category}>
                {category}
            </li>
        })}
    </ol>

    </>
  )
}
