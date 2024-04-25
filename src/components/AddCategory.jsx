import { useState } from "react"

export const AddCategory = ({setCategory}) => {
    const [InputValue, setInputValue] = useState('one')

    const inputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(InputValue)
        setCategory(categories => [InputValue,...categories])
    }

    console.log(InputValue)
  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar gifs" value={InputValue}
        onChange={inputChange}
    />
    </form>

 )
}  
