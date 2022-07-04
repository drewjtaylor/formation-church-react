export const validateEventForm = (values) => {
    const {date, title, time} = values;
    const errors = {};
    
    if (!date) {
        errors.date = 'Required';
    }

    if (!time) {
        errors.time = 'Required';
    }

    if (!title) {
        errors.title = 'Required';
    }

    return errors
}