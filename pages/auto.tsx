import React, {useState, useEffect} from 'react'

const Auto = () => {

    const [count, updateCount] = useState(0)
    
    useEffect( () => {
        const interval = setInterval(() => {
            updateCount(count+1)
        }, 3000)
    },)

    return (
        <div>
            {count}
        </div>
    )

}

export default Auto