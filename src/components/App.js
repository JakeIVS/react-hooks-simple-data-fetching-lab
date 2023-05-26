import React, { useState, useEffect } from "react"

// create your App component here
function App() {
    const [image, setImage] = useState(null)
    useEffect(()=>
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r=>r.json())
        .then(data=>setImage(data))
    ,[])
    return(
        <>
        {(image) ? <img src={image.message} alt='A Random Dog' /> : <p>Loading...</p>}
        </>
    )
}

export default App