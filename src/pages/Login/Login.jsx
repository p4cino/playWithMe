import React, {useContext} from 'react';
import {FormControl, FormErrorMessage, Flex, Input, Button, Text, Box} from "@chakra-ui/core";
import {useHistory} from "react-router-dom";

import styles from './Login.module.scss';
import {Formik, Field} from "formik";
import Heading from "../../components/Heading/Heading";
import API from "../../api";
import {AppContext} from "../../App";


function Login() {
    const context = useContext(AppContext);
    let history = useHistory();

    // useEffect(() => {
    //     console.log(context.userID, "userEffect");
    // }, [context.userID]);

    const getData = async (value) => {
        await API.post(`profile/login`, {
            login: value
        })
            .then(response => {
                if (response.data.id !== 0) {
                    localStorage.setItem('myID', response.data.id);
                    context.setUserID(response.data.id);
                    history.replace("/");
                }
            })
            .catch(error => {
                console.log('Woops', error);
            });
    };

    function validateName(value) {
        let error;
        if (!value) {
            error = "E-mail is required 😱";
        } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))) {
            error = "Invalid E-mail 😱";
        }
        return error;
    }

    function validatePassword(value) {
        let error;
        if (!value) {
            error = "Password is required";
        }
        return error;
    }

    return (
        <div className={styles.wrapper}>
            <Formik
                initialValues={{login: "natalia.zawada@hycom.pl", currentPassword: "1234"}}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                        getData(values.login);
                    }, 500);
                }}
            >
                {props => (
                    <Flex size="100%" align="center" justify="center">
                        <Box width="200px" my="80px">
                            <Heading style={{width: "100%", textAlign: "center"}}>
                                Sign In
                            </Heading>
                            <form onSubmit={props.handleSubmit}>
                                <Field name="login" validate={validateName}>
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.login && form.touched.login}>
                                            <Input backgroundColor="#F5F5F5" border="none" {...field} id="login"
                                                   placeholder="Email"/>
                                            <FormErrorMessage>{form.errors.login}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="currentPassword" validate={validatePassword}>
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.currentPassword && form.touched.currentPassword}>
                                            <Input backgroundColor="#F5F5F5" border="none" my="16px" {...field}
                                                   id="currentPassword" type="password" placeholder="Password"/>
                                            <FormErrorMessage>{form.errors.currentPassword}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Button
                                    mt={4}
                                    backgroundColor="#6335CC"
                                    color="#fff"
                                    isLoading={props.isSubmitting}
                                    type="submit"
                                    width="100%"
                                    borderRadius="8px"
                                >
                                    <Text>Sign in</Text>
                                </Button>
                            </form>
                        </Box>
                    </Flex>
                )}
            </Formik>
        </div>
    );
}

export default Login;
