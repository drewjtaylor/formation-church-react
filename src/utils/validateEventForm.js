export const validateEventForm = (values) => {
    const {date, title} = values;
    const errors = {};
    
    if (date < (new Date())) {
        errors.date = 'Must be a future date';
    }


    if (!title) {
        errors.title = 'Required';
    }

    return errors
}