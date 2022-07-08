import {Button, Label, Col, FormGroup} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { validateEventForm } from '../utils/validateContactForm';

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values, null, 2));
        resetForm();
    };

    return <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNum: '',
                    email: '',
                    canEmail: false,
                    canCall: false,
                    canText: false
                }}

                onSubmit={handleSubmit}
                validate={validateEventForm}
            >

                <Form>
                    <FormGroup row>
                        <Label htmlFor='firstName' md='2'>First Name</Label>
                        <Col md='4'>
                            <Field
                                name='firstName'
                                placeholder='First Name'
                                className='form-control' />
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor='lastName' md='2'>Last Name</Label>
                        <Col md='4'>
                            <Field
                                name='lastName'
                                placeholder='Last Name'
                                className='form-control' />
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor='phoneNum' md='2'>Phone</Label>
                        <Col md='4'>
                            <Field
                                name='phoneNum'
                                placeholder='Phone'
                                className='form-control' />
                            <ErrorMessage name='phoneNum'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor='email' md='2'>Email</Label>
                        <Col md='4'>
                            <Field
                                name='email'
                                placeholder='Email'
                                className='form-control' />
                            <ErrorMessage name='email'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={{offset: 2 }}>
                            <Field type='checkbox' name='canEmail' className='me-2'/>
                            <Label htmlFor='canEmail'>I would like to receive emails</Label>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={{offset: 2 }}>
                            <Field type='checkbox' name='canText' className='me-2'/>
                            <Label htmlFor='canText'>I would like to receive text messages</Label>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={{offset: 2 }}>
                            <Field type='checkbox' name='canCall' className='me-2'/>
                            <Label htmlFor='canCall'>I would like to receive phone calls</Label>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>

    </Formik>
};

export default ContactForm;