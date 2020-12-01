import React from 'react'

export default function CatList({catPics}){
    return (<ul>
        {catPics.map(catPic=> <img key={catPic.id} src={catPic.url} alt={catPic.id}></img>)}
    </ul>)
}
