import { useState } from 'react'

function Gifts() {
    const gifts = [
        'CPU i9',
        'RAM 32GB RGB',
        'RGB Keyboard'
    ]
    const [gift, setGift] = useState()
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        console.log(gifts[index])
        setGift(gifts[index])
    }
  return (
    <div>
        <h1>{gift || 'Chưa có phần thưởng'}</h1>
        <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default Gifts;
