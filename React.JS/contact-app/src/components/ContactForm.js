import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { instanceContact } from '../lib/axios';

const ContactForm = ({ type, paramsId }) => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const getContactDetail = async () => {
    try {
      const response = await instanceContact.get(`/contact/${paramsId}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      if (error.response.data.message === 'Contact not found')
        return navigate('/contact');
    }
  };

  const getDefaultValue = async () => {
    if (type === 'Edit') {
      return await getContactDetail();
    } else {
      return { name: '', mobile: '', email: '' };
    }
  };

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: async () => await getDefaultValue(),
  });

  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
    const { name, email, mobile } = data;
    try {
      if (type === 'Edit') {
        await instanceContact.put(`/update-contact/${paramsId}`, {
          name,
          email,
          mobile,
        });
      } else {
        await instanceContact.post('/create-contact', {
          name,
          email,
          mobile,
        });
      }
      navigate('/contact');
      reset();
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Name<span className="text-red-500 text-lg">*</span>
      </label>
      <div className="mb-3">
        <input
          type="text"
          placeholder="your name"
          id="name"
          className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
          {...register('name', { required: true })}
        />
      </div>
      <label
        htmlFor="mobile"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Mobile Phone number
        <span className="text-red-500 text-lg">*</span>
      </label>
      <div className="mb-3">
        <input
          type="text"
          placeholder="your number"
          id="mobile"
          className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
          {...register('mobile', { required: true })}
        />
      </div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Email
      </label>
      <div>
        <input
          placeholder="your email"
          id="email"
          className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
          {...register('email')}
        />
      </div>
      {errors.length > 0 && (
        <div className="bg-red-100 mt-3 rounded-xl p-2">
          {errors.map((error) => (
            <p className="text-red-900 text-sm" key={error.msg}>
              - {error.msg}
            </p>
          ))}
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-700 duration-300 py-1 rounded-md mt-3 text-white px-2 cursor-pointer hover:bg-blue-800"
        disabled={isSubmitting}
      >
        {type === 'Edit' ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default ContactForm;
