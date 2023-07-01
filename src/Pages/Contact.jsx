import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/PageTitle/PageTitle';
import { toast } from 'react-hot-toast';
import ContactBoxs from '../components/ContactBoxs/ContactBoxs';
import ContactForm from '../components/ContactForm/ContactForm';

const notify = (str) => toast.success(str);
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const contact = form.number.value;
        const subject = form.subject.value;
        const contactInfo = {name, email, message, contact, subject};
        fetch('http://localhost:5000/contact',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.message){
                notify(data.message);
                form.reset();
            }
        })
        .catch(error => console.log(error.message));
    }
    return (
        <main>
            <Helmet>
                <title>Contact Me | Mahdi Hasan</title>
            </Helmet>
            <PageTitle image='https://i.ibb.co/sCdzYrw/Untitled-design-1-removebg-preview.png' title='Contact Me'></PageTitle>
            <ContactBoxs></ContactBoxs> 
            <ContactForm handleSubmit={handleSubmit}></ContactForm>
        </main>
    );
};

export default Contact;