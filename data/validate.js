 function isValidProduct(p) {
    if ((typeof p ) !== 'object' ){
        return false;
    }else if (p === null){
        return false;
    }

    let nameIsValid = (typeof p.name) === 'string'
    nameIsValid = nameIsValid && p.name !== ''

    let priceIsValid = (typeof p.price) !== 'string' 
    priceIsValid = priceIsValid && p.price !== ''
    

    let imageIsValid = (typeof p.image) === 'string'
    imageIsValid = imageIsValid && p.image !== ''

    let tagIsValid = (typeof p.tags) === 'string'
    tagIsValid = tagIsValid && p.tags !== ''

    return true
 }


 function isValidId(x) {
	// Giltigt id får inte vara NaN och ska vara >= 0
	let maybeId = Number(x)
	if( isNaN(maybeId) ) {
		return false
	}
	return maybeId >= 0
}

 export {isValidProduct, isValidId}