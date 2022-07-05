import DatePicker from 'react-datepicker';
import {Field} from 'formik';

const DatePickerField = (props) => {
    const {name, ...rest} = props;

    return (
        <>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const { setFieldValue } = form;
                        const { value } = field;

                        return <DatePicker
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val => setFieldValue(name, val)}
                            showTimeSelec
                        />
                    }
                }
            </Field>
        </>
    )
};

export default DatePickerField;