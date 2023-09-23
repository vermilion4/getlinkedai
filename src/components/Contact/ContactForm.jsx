import { useFormik } from 'formik';
import { validationSchema } from '@/schema/validationSchema';
import axios from 'axios';
import instance from '@/utility/axios';
import Button from '@/components/Button';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      email: '',
      phone_number: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await instance.post('/hackathon/contact-form', values);
        toast.success('Thank you for reaching out');

        resetForm();
      } catch (error) {
        console.error('Error submitting the form', error);
        toast.error(
          'There was a problem sending your message, please try again'
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-col gap-[42px] mb-[31px]'>
        {/* Name */}
        <div className=''>
          <input
            type='text'
            name='first_name'
            id='name'
            className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full'
            placeholder='First Name'
            {...formik.getFieldProps('first_name')}
          />
          {formik.touched.first_name && formik.errors.first_name && (
            <div className='text-red-600 text-sm pt-2'>
              {formik.errors.first_name}
            </div>
          )}
        </div>

        {/* Email */}
        <div className=''>
          <input
            type='email'
            name='email'
            id='email'
            className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full'
            placeholder='Email'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div className='text-red-600 text-sm pt-2'>
              {formik.errors.email}
            </div>
          )}
        </div>

        {/* Phone */}
        <div className=''>
          <input
            type='text'
            name='phone_number'
            id='phone'
            className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full'
            placeholder='Phone Number'
            {...formik.getFieldProps('phone_number')}
          />
          {formik.touched.phone_number && formik.errors.phone_number && (
            <div className='text-red-600 text-sm pt-2'>
              {formik.errors.phone_number}
            </div>
          )}
        </div>

        {/* Message */}
        <div className=''>
          <textarea
            name='message'
            id='message'
            rows={5}
            className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full'
            placeholder='Message'
            {...formik.getFieldProps('message')}
          />
          {formik.touched.message && formik.errors.message && (
            <div className='text-red-600 text-sm pt-2'>
              {formik.errors.message}
            </div>
          )}
        </div>

        <div className='mx-auto w-max'>
          <Button
            text={formik.isSubmitting ? 'Loading...' : 'Submit'}
            type='submit'
            disabled={formik.isSubmitting}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
