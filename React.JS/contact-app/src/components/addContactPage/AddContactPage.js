import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const AddContactPage = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/create-contact',
        {
          name: data.name,
          email: data.email,
          mobile: data.mobile,
        }
      );
      console.log(response);
      navigate('/contact');
    } catch (error) {
      setErrors(error.response.data.errors);
    } finally {
      reset();
    }
  };

  return (
    <section>
      <div>
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
                <p className="text-red-900 text-sm">- {error.msg}</p>
              ))}
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-400 py-1 rounded-md mt-3 text-white px-2 cursor-pointer hover:bg-blue-500"
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddContactPage;
