'use client';

import { useState } from 'react';
import { setupMetaPixel } from './analytics';

export default function ContactForm() {
  const [result, setResult] = useState('');

  const apiUrl = process.env.NEXT_PUBLIC_WEB3_API_URL;
  const accessKey = process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY;

  if (!apiUrl || !accessKey) {
    throw new Error(
      'Web3Forms API URL or Access Key is not defined in environment variables.',
    );
  }

  const fbq = setupMetaPixel();

  const onSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();

    try {
      setResult('Sending....');
      const formData = new FormData(event.target);

      formData.append('access_key', accessKey);

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        fbq?.('track', 'Contact');
        event.target.reset();
        setTimeout(() => {
          setResult('');
        }, 5000);
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResult('An error occurred while submitting the form.');
    }
  };

  return (
    <>
      <p>{result}</p>
      <form
        onSubmit={onSubmit}
        action='#'
        method='post'
        className='section__content-cta'>
        <div className='group-wrapper'>
          <div className='group-input '>
            <input
              type='text'
              name='contact-name'
              id='contactName'
              placeholder='Name'
            />
          </div>
          <div className='group-input '>
            <input
              type='email'
              name='contact-email'
              id='contactEmail'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='group-input drt'>
          <select className='subject'>
            <option data-display='Subject'>Subject</option>
            <option value='1'>Account</option>
            <option value='2'>Service</option>
            <option value='3'>Pricing</option>
            <option value='4'>Support</option>
          </select>
        </div>
        <div className='group-input'>
          <textarea
            name='contact-message'
            id='contactMessage'
            placeholder='Message'></textarea>
        </div>
        <div className='form-cta justify-content-start'>
          <button type='submit' className='btn btn--primary'>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}
