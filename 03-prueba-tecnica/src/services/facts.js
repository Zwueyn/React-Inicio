const Cat_Endpoint_Random_Fact = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(Cat_Endpoint_Random_Fact)
    const data = await res.json()
    const { fact } = data
    return (fact)
}