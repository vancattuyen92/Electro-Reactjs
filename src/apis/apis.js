
export const fetchProducts =  async() => {
    const res = await fetch(`https://cms-resource-api.herokuapp.com/api/product`, {
        method: 'GET'
    })
    const data = await res.json()
    return data
}