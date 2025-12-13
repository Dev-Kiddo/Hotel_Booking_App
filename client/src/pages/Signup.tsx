import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
  return (
    <>
      <section className="w-full max-w-5xl mx-auto ">
        <form>
          <div className="mb-10">
            <h2 className="text-3xl font-medium text-center">Sign up or create an account</h2>
          </div>

          <div className=" flex gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm">
                First Name{" "}
                <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
              />
            </div>

            <div className="w-full relative">
              <label className="flex w-full items-center mb-2 text-gray-600 text-sm ">
                Last Name{" "}
                <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border rounded border-gray-300 placeholder-gray-400 focus:outline-none "
              />
            </div>
          </div>

          <div className="relative mb-6">
            <label className="flex  items-center mb-2 text-gray-600 text-sm ">
              Email Address{" "}
              <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                  fill="#EF4444"
                />
              </svg>
            </label>
            <input
              type="text"
              className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
            />
          </div>

          <div className="flex gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex  items-center mb-2 text-gray-600 text-sm ">
                Password{" "}
                <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
              />
            </div>

            <div className="w-full relative">
              <label className="flex  items-center mb-2 text-gray-600 text-sm ">
                Confirm Password{" "}
                <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
              />
            </div>
          </div>

          <p className="text-sm mb-6">
            Already registered?{" "}
            <Link className="underline" to="/sign-up">
              Signin Here
            </Link>
          </p>

          <button className="bg-primary text-white font-medium py-2 px-4 border border-blue-900 rounded cursor-pointer  hover:bg-blue-700">Sign up</button>
        </form>
      </section>
    </>
  );
};

export default Signup;
