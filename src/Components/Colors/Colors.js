import React, { useEffect, useRef } from 'react'

const ColorsHere = () => {
 
    const colorUrl = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv"

    const promise = fetch(colorUrl)
    promise.then(response =>{
        let res = response.then(response.text())
        console.log(res)
    })

    return (
        <div>
            Colors here
        </div>
    )
}

export default ColorsHere;