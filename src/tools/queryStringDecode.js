const queryStringDecode = (url)=> {
    const [ pageKey, keysValsFrag ] = url.split('/').at(-1).split('?')
    const [keysValues, fragment] = keysValsFrag.split('#')
    if (pageKey && keysValues) {
        const data = {}
        data[pageKey] = {} 
        keysValues.split('&').forEach(keyvalue => {
            const [key, value] = keyvalue.split('=')
            data[pageKey][key] = value.replace(/\+/g, ' ')
        });
    fragment && (data[pageKey].fragment = fragment)
    return data[pageKey]
    }
    return
}
export default queryStringDecode