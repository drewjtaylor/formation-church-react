
import DatePickerField from './DatePickerField';
import { useDispatch } from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
// import { validateEventForm } from '../../utils/validateEventForm';
import { Button, Label, FormGroup } from 'reactstrap';
import {addEvent} from './eventSlice';

const AddEventForm = () => {
    const dispatch = useDispatch();

    const handleEventSubmit = (values) => {
        const newEvent = {
            date: values.date,
            description: values.description,
            title: values.title
        };

        console.log(values);

        dispatch(addEvent(newEvent));
    }

    return (
        <>
            <Formik initialValues={{}} onSubmit={handleEventSubmit} >
                <Form>
                    <FormGroup>
                        <Label htmlFor='date'>Date:</Label>
                        <DatePickerField name='date' label='Click here to enter a date' className='form-control'/>
                        <ErrorMessage name='date' >
                                {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='title'>Title</Label>
                        <Field id='title' name='title' placeholder='Give your event a title' className='form-control'></Field>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description'>Description</Label>
                        <Field id='description' name='description' placeholder='List any details, things to bring, etc.' className='form-control'></Field>
                    </FormGroup>
                    <Button type='submit' color='primary'>Add event to calendar</Button>
                </Form>
            </Formik>
            
            
            
        </>
    )
};

export default AddEventForm;