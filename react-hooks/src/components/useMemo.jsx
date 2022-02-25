import { useMemo, useRef, useState } from "react";

function UseMemo(){
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const refName = useRef()

    const handleSumit = () => {
        setProducts([...products, {
            name, price: +price
        }])

        setName('')
        setPrice('')
        refName.current.focus()
    }

    const handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            handleSumit()
        }
    }

    const total = useMemo(() => {
        const result = products.reduce((result, product) => {
            console.log('Tính lại...')
            return result + product.price
        }, 0)

        return result
    }, [products])

    return(
        <div>
            <input 
                ref={refName}
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <input
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
            />
            <br/>
            <button onClick={handleSumit}>ADD</button>
            <h1>Total: {total}</h1>
            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>
                            {product.name} - {product.price}
                        </li>
                    ))  
                }
            </ul>
        </div>
    )
}

export default UseMemo