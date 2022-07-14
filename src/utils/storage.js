export const storageSave = (key, value) => {
    if (!key || typeof key !== 'string') throw new Error("storageSave: Invalid or no storage key provided!")
    else if (!value) throw new Error("storageSave: No value provided for" + key)

    sessionStorage.setItem(key, JSON.stringify(value))
}

//Store user when logged in
export const storageRead = key => {
    
    const data = sessionStorage.getItem(key)

    if (data) {
        return JSON.parse(data)
    }

    return null
}

export const storageDelete = key => {
    sessionStorage.removeItem(key)
}