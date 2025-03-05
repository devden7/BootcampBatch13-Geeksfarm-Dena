import { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormField = () => {
  const [valueInput, setValueInput] = useState(null);
  const [isPreferred, setIsPreferred] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setValueInput(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
  };

  const resetHandler = () => {
    setValueInput(null);
    reset();
  };
  return (
    <div className="mx-auto max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-3">
      <h3 className="text-center text-lg font-semibold mt-3">Employee Form </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-3 flex flex-col gap-3"
      >
        <div className="flex justify-between items-center">
          <label htmlFor="firstName">
            First Name<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            {...register('firstName', { required: true })}
            id="firstName"
            className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-700  w-3/4 p-2.5"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="lastName">
            Last Name<span className="text-red-500 text-lg">*</span>
          </label>

          <input
            {...register('lastName', { required: true })}
            id="lastName"
            className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-700 w-3/4 p-2.5"
          />
        </div>
        <div className="flex justify-between items-center">
          <p>Employed</p>
          <div className="w-3/4">
            <input {...register('isEmployed')} type="checkbox" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="education">
            Education<span className="text-red-500 text-lg">*</span>
          </label>

          <select
            {...register('education', { required: true })}
            id="education"
            className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-700 w-3/4 p-2.5"
          >
            <option value=""></option>
            <option value="High School">High School</option>
            <option value="Bachelor Degree">Bachelor Degree</option>
          </select>
        </div>
        <div className="flex justify-between  items-start">
          <p>Expertise</p>
          <div className="flex flex-col w-3/4">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="HTML"
                id="html"
                {...register('expertise')}
              />
              <label htmlFor="html">HTML</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="CSS"
                id="css"
                {...register('expertise')}
              />
              <label htmlFor="css">CSS</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="JAVASCRIPT"
                id="js"
                {...register('expertise')}
              />
              <label htmlFor="js">JAVASCRIPT</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="NODEJS"
                id="nodejs"
                {...register('expertise')}
              />
              <label htmlFor="nodejs">NODEJS</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="REACTJS"
                id="reactjs"
                {...register('expertise')}
              />
              <label htmlFor="reactjs">REACTJS</label>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>Preferred</p>
          <div className="flex gap-2 items-center w-3/4">
            <input
              {...register('isPreferred')}
              type="radio"
              id="frontend"
              value={isPreferred ? 'Front End' : false}
              checked={isPreferred}
              onClick={() => setIsPreferred((prev) => !prev)}
            />
            <label htmlFor="frontend">Front End</label>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <p>Technology</p>
          <div className="flex flex-col w-3/4">
            <div className="flex gap-2 items-center">
              <input
                {...register('technology')}
                type="radio"
                id="backend"
                value="Back End"
              />
              <label htmlFor="backend">Back End</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                {...register('technology')}
                type="radio"
                id="fullstack"
                value="Full Stack"
              />
              <label htmlFor="fullstack">Full Stack</label>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>Notes</p>
          <textarea
            {...register('notes')}
            className="w-3/4 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-700 p-2.5"
          />
        </div>
        <div className="flex gap-2 justify-center">
          <button
            type="submit"
            className="bg-blue-700 py-1 px-3 text-white cursor-pointer hover:bg-blue-800 duration-300 rounded-full"
          >
            Submit
          </button>
          <button
            onClick={() => resetHandler()}
            type="reset"
            className=" py-1 px-3 bg-gray-100 cursor-pointer hover:bg-gray-300 duration-300 rounded-full"
          >
            Reset
          </button>
        </div>
      </form>
      {valueInput !== null && (
        <div className=" p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm  max-w-full mt-3">
          <pre>{valueInput}</pre>
        </div>
      )}
    </div>
  );
};

export default FormField;
