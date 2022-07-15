/* Return image if valid path or character */
const TranslationsImage = ({path, character}) => {
    /*
        Check if valid path
        ei. starts with 'img/' and ends with either '.png' or 'jpg'
    */
    if (!/^[img/]+[.png, .jpg]*/.test(path))    
        throw new Error("TranslationImage: invalid path: " + path)

    // isolate file name
    let filename = path.replace("img/", "")
        .replace(".png", "")
        .replace(".jpg", "")

    // if empty or " " return nothing
    if (filename.length === 0 || filename === " ") 
        return null

    else if (/[^a-zA-Z]/.test(filename))    // skip non-letters
        return null

    else if (/\d/.test(filename))           // print numbers as is
        return character

    return <img src={path} alt={character} />
}

export default TranslationsImage