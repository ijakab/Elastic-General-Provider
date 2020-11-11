module.exports = async (promise, verbose) => {
    const e = new Error();
    try {
        return await promise
    } catch (err) {
        if(verbose) console.error('%o', err)
        e.data = err.data
        e.message = err.message
        throw e
    }
}
