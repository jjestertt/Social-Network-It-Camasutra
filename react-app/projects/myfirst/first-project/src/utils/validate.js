export const requiredForm = (value) => {
    if(value) return undefined;
    return 'Required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length <= maxLength) return undefined;
    console.log(`Sorry Max length is ${maxLength}`);
    return `Sorry Max length is ${maxLength}`;
}