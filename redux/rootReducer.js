export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'VALIDATE_ADDRESS':
            return payload;
        default:
            return state;
    }
}