import { useState } from 'react';
import DatePicker from 'react-datepicker';
import {useSelector, useDispatch} from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { validateEventForm } from '../../utils/validateEventForm';
import { Button, Label, FormGroup } from 'reactstrap';
import {addEvent} from './eventSlice';

const AddEventForm = () => {
    const [eventDate, seteventDate] = useState (new Date())

    const dispatch = useDispatch();

    const handleEventSubmit = (values) => {
        const newEvent = {
            date: values.date,
            title: values.title,
            description: values.description
        };

        console.log(values);

        dispatch(addEvent(newEvent));
    }

    return (
        <>
            <p>This is the add event form</p>
            <Formik initialValues={{}} onSubmit={handleEventSubmit} validate={validateEventForm}>
                <Form>
                    <FormGroup>
                        <Label htmlFor='date'>Date/Time</Label>
                        <DatePicker id='date' name='date' showTimeInput selected={eventDate} onChange={(date) => seteventDate(date)} />
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