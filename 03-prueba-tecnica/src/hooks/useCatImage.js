import { useState, useEffect } from 'react'
const Cat_Prefix_Image_URL = 'https://cataas.com'


export function useCatImage({ fact }) {
    const [imageURL, setImageURL] = useState()
    
    useEffect(() => {
        if (!fact) return

        const first_word = fact.split(' ', 3).join('+')

        fetch(`https://cataas.com/cat/says/${first_word}?&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `/cat/${_id}/says/${first_word}?`
                setImageURL(url)
            })
    },[fact])

    if (`${Cat_Prefix_Image_URL}${imageURL}` === 'https://cataas.comundefined') return ({imageURL: ''})
    return ({imageURL: `${Cat_Prefix_Image_URL}${imageURL}`})
}