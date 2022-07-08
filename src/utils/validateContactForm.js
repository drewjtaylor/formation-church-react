export const validateEventForm = (values) => {
    const {firstName, lastName, phoneNum, email} = values;
    const errors = {};

    if (!firstName) {
        errors.firstName = 'Required';
    } else if (firstName.length < 2) {
        errors.firstName = 'Must be at least 2 character.s';
    }

    if (!lastName) {
        errors.lastName = 'Required';
    } else if (lastName.length < 2) {
        errors.lastName = 'Must be at least 2 character.s';
    }

    // Found an overly complicated regex on stack overflow to cover a ridiculously large variety of international phone numbers and formatting for parenthesis and dashes
    const regPhone = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/i;

    if (!regPhone.test(phoneNum)) {
        errors.phoneNum = 'You must enter a valid phone number'
    }

    // Regex taken from https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regEmail.test(email)) {
        errors.email = 'Please enter a valid email address'
    }

    return errors;
}