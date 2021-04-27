module.exports = (fn) => {
    return(req,res,next,) => {
        // console.log(arr)
        fn(req,res,next).catch(next)
    }
    }