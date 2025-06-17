const {getHashByData, fetchData} = require('./utils');

// 6. Асинхронное получение данных
module.exports = async function(urls, retryCount) {
    const urlPromises = urls.map(async (url) => {
        // -1 чтобы учитывать первую попытку, которая не входит в retryCount
        let count = -1
        while(count < retryCount) {
            try {
                const response = await fetchData(url)
                const hashByData = await new Promise(resolve => getHashByData(response.data, resolve))

                if(hashByData === response.hashSum) {
                    return response.data
                }
                else {
                    count++
                }
            }
            catch(error) {
                count++
            }
        }
        return null
    })

    const resolvedUrls = await Promise.all(urlPromises)
    return resolvedUrls.filter(Boolean)
}
