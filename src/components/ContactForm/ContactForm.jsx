import React from 'react';

const ContactForm = ({handleSubmit}) => {
    return (
        <div className='mb-6'>
            <p className='text-center mb-1 uppercase text-slate-500 font-bold text-sm tracking-wider'>Have question contact me?</p>
            <h2 style={{ background: 'linear-gradient(to right, blue, #9638F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className='uppercase md:capitalize text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 w-4/6 mx-auto'>Love to hear from you, get in touch</h2>
            <form  data-aos="zoom-in-right" data-aos-duration="800" onSubmit={handleSubmit} className='w-10/12 mx-auto'>
                <input className='bg-slate-900 focus:bg-slate-900 border-none focus:outline-none text-slate-400 w-full py-3 px-4 rounded-full mb-3' type="text" name='name' placeholder='Your Name*' required />
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
                    <input className='bg-slate-900 focus:bg-slate-900 border-none focus:outline-none text-slate-400 w-full py-3 px-4 rounded-full mb-3' type="email" name="email" id="email" placeholder='Your Email*' required />
                    <input className='bg-slate-900 focus:bg-slate-900 border-none focus:outline-none text-slate-400 w-full py-3 px-4 rounded-full mb-3' type="text" name="number" id="number" placeholder='Phone Number*' required />
                </div>
                <input className='bg-slate-900 focus:bg-slate-900 border-none focus:outline-none text-slate-400 w-full py-3 px-4 rounded-full mb-3' type="text" name="subject" id="subject" placeholder='Subject*' required />
                <textarea className='bg-slate-900 focus:bg-slate-900 border-none focus:outline-none text-slate-400 w-full py-3 px-4 rounded-3xl mb-3' name="message" id="message" rows="3" placeholder='Message*' required></textarea>
                <button type='submit' className='border border-transparent transition-all duration-300 text-white uppercase font-semibold text-center py-3 px-6 rounded-full bg-gradient-to-r from-blue-800 to-purple-800 text-sm hover:bg-none hover:border hover:border-white'>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;