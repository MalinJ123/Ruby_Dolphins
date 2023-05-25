 function isValidProduct(p) {
    if ((typeof p ) !== 'object' ){
        return false;
    }else if (p === null){
        return false;
    }

    let nameIsValid = (typeof p.name) === 'string'
    nameIsValid = nameIsValid && f.name !== ''

    let priceIsValid = (typeof p.price) !== 'string' 
    priceIsValid = priceIsValid && f.price !== ''

    let imageIsValid = (typeof p.image) === 'string'
    imageIsValid = imageIsValid && f.image !== ''

    let tagIsValid = (typeof p.tags) === 'string'
    tagIsValid = tagIsValid && f.tags !== ''


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