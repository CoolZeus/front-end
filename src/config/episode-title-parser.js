module.exports = (animename, episodenumber, specialtype) => {
    if (specialtype && specialtype !== "toplu") {
        return {
            title: `${specialtype.toUpperCase()} ${episodenumber}`, // `${specialtype.toUpperCase()} ${episodenumber} - ${animename}`
            slug: `${specialtype}${episodenumber}`
        }
    }
    else return {
        title: `${episodenumber}. Bölüm`, // `${episodenumber}. Bölüm - ${animename}`
        slug: `bolum${episodenumber}`
    }
}