import React, {useState} from 'react'

const Manual = () => {
    
    const [count, updateCount] = useState(0)

    return (
        <div>
            <div>
                {count}
            </div>
            <div>
                <button onClick={()=>updateCount(count+1)}>
                    Increment
                </button>
                <button onClick={()=>updateCount(count-1)}>
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Manual