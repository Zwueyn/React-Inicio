import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import './App.css'

export function App () {
    const { fact, getFactAndUpdateState } = useCatFact()
    const { imageURL } = useCatImage({ fact })

    const handleClick = async () => {
        getFactAndUpdateState()
    }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Get New Fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Image extracted using the first 3 words for ${fact}`} />}
    </main>
  )
}