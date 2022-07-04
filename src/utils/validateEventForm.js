export const validateEventForm = (values) => {
    const {date, title} = values;
    const errors = {};
    
    if (!date) {
        errors.date = 'Required';
    }


    if (!title) {
        errors.title = 'Required';
    }

    return errors
}