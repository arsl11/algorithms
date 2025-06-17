const {getHashByData, fetchData} = require('./utils');

// 6. Асинхронное получение данных
module.exports = async function(urls, retryCount) {
    const results = []

    for (let i = 0; i < urls.length; i++) {
        let count = 0
        while(count < retryCount) {
            try {
                const response = await fetchData(urls[i])
                const hashByData = await new Promise(resolve => getHashByData(response.data, resolve))

                if(hashByData === response.hashSum) {
                    results.push(response.data)
                    break;
                }
                else {
                    count++
                }
            }
            catch(error) {
                count++
            }
        }
    }

    return results
}
