import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser, selectAllUsers } from './userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { validateUserLoginForm } from '../utils/validateUserLoginForm';

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const currentUser = useSelector(selectCurrentUser);
    const existingUsers = useSelector(selectAllUsers);
    
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        const loggingUser = {
            loginTime: Date.now(),
            username: values.username,
            password: values.password
        };

       const matchingUser = existingUsers.find((user) => user.username === values.username)

        if (matchingUser) {console.log(matchingUser.username)}

        if (matchingUser && matchingUser.username === values.username && matchingUser.password === values.password) {
            dispatch(setCurrentUser(loggingUser));
            setLoginModalOpen(false);
        } else {
            alert('There was a problem logging in. Please check for typos, or contact an administrator if you should be added as staff.')
        }
    };

    return (
        <>
            <span className='navbar-text ms-auto'>
                {currentUser ? (
                    <div>
                        Welcome {currentUser.username}!
                    </div>
                ) : (
                    <Button outline onClick={() => setLoginModalOpen(true)} style={{ color: 'white', border: '1px solid white rounded', background: 'black'}}>
                        Staff Login
                    </Button>
                )}
            </span>
            <Modal isOpen={loginModalOpen}>
                <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
                <ModalBody>
                    <Formik initialValues={{username: '', password: ''}} onSubmit={handleLogin} validate={validateUserLoginForm}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Field id='username' name='username' placeholder='Username' className='form-control' />
                                <ErrorMessage name='username' >
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Field id='password' name='password' placeholder='Password' className='form-control' />
                                <ErrorMessage name='password' >
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type='submit' color='primary'>Login</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
};

export default UserLoginForm;