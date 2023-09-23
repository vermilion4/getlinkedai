import { useFormik } from 'formik';
import { registrationSchema } from '@/schema/registrationSchema';
import instance from '@/utility/axios';
import Button from '@/components/Button';
import { toast } from 'react-toastify';

const RegisterForm = ({ setShowSuccess }) => {
  const formik = useFormik({
    initialValues: {
      team_name: '',
      email: '',
      phone_number: '',
      group_size: 0,
      project_topic: '',
      category: 0,
      privacy_poclicy_accepted: false,
    },
    validationSchema: registrationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await instance.post('/hackathon/registration', values);

        setShowSuccess(true);
        resetForm();
      } catch (error) {
        console.error('Error submitting the form', error);
        toast.error(
          'There was a problem with your registration, please try again'
        );
        setShowSuccess(false);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-col gap-[42px] mb-[31px]'>
        {/* Team Name and Phone Number */}
        <div className='flex flex-col md:flex-row gap-8 md:items-center'>
          <div className='space-y-[11px] md:basis-[50%]'>
            <label htmlFor='name'>Team&apos;s Name</label>
            <input
              type='text'
              name='team_name'
              id='name'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[17px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white placeholder:opacity-25 w-full text-sm'
              placeholder='Enter the name of your group'
              {...formik.getFieldProps('team_name')}
            />
            {formik.touched.team_name && formik.errors.team_name && (
              <div className='text-red-600 text-sm pt-2'>
                {formik.errors.team_name}
              </div>
            )}
          </div>
          <div className='space-y-[11px] md:basis-[50%]'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              name='phone_number'
              id='phone'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[17px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white placeholder:opacity-25 w-full text-sm'
              placeholder='Enter your phone number'
              {...formik.getFieldProps('phone_number')}
            />
            {formik.touched.phone_number && formik.errors.phone_number && (
              <div className='text-red-600 text-sm pt-2'>
                {formik.errors.phone_number}
              </div>
            )}
          </div>
        </div>

        {/* Email and Project Topic */}
        <div className='flex flex-col md:flex-row gap-8 md:items-center'>
          <div className='space-y-[11px] basis-[50%]'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[17px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white placeholder:opacity-25 w-full text-sm'
              placeholder='Enter your email address'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className='text-red-600 text-sm pt-2'>
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className='space-y-[11px] basis-[50%]'>
            <label htmlFor='project_topic'>Project Topic</label>
            <input
              type='text'
              name='project_topic'
              id='phone'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[17px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white placeholder:opacity-25 w-full text-sm'
              placeholder='What is your group project topic'
              {...formik.getFieldProps('project_topic')}
            />
            {formik.touched.project_topic && formik.errors.project_topic && (
              <div className='text-red-600 text-sm pt-2'>
                {formik.errors.project_topic}
              </div>
            )}
          </div>
        </div>

        {/* Category and Group Size Dropdown */}
        <div className='flex gap-8 items-center'>
          <div className='space-y-[11px] basis-[50%]'>
            <label htmlFor='category'>Category</label>
            <select
              name='category'
              id='category'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-4 py-[13px] placeholder-white w-full text-sm bg-secondary'
              {...formik.getFieldProps('category')}>
              <option value=''>Select your category</option>
              <option value='1'>DevOPS</option>
              <option value='2'>Software Engineering</option>
              <option value='3'>Designer</option>
            </select>
            {formik.touched.category && formik.errors.category && (
              <div className='text-red-600 text-sm'>
                {formik.errors.category}
              </div>
            )}
          </div>

          <div className='space-y-[11px] basis-[50%]'>
            <label htmlFor='group_size'>Group Size</label>
            <select
              name='group_size'
              id='group_size'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-4 py-[13px] placeholder-white w-full text-sm bg-secondary'
              {...formik.getFieldProps('group_size')}>
              <option value=''>Select</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
            </select>
            {formik.touched.group_size && formik.errors.group_size && (
              <div className='text-red-600 text-sm'>
                {formik.errors.group_size}
              </div>
            )}
          </div>
        </div>

        <p className='text-xs italic text-[#ff26b9]'>
          Please review your registration details before submitting
        </p>

        <div className='flex gap-4 items-center -mt-5'>
          <input
            type='checkbox'
            name='privacy_policy_accepted'
            id='privacy_policy_accepted'
            className='w-4 h-4'
            required
            {...formik.getFieldProps('privacy_policy_accepted')}
          />
          <span className='text-xs'>
            I agreed with the event terms and conditions and privacy policy
          </span>
        </div>

        <div className='mx-auto w-full'>
          <Button
            text={formik.isSubmitting ? 'Loading...' : 'Register Now'}
            type='submit'
            disabled={formik.isSubmitting}
            full
          />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
