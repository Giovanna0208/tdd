class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Giovanna';
    const myerror = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });
    throw myerror;
} catch(err) {
    console.log('erro: ', err);
} finally {
    console.log('Keep going...')
}