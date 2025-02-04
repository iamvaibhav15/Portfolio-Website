import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bvrrvmyb", userInfo);
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-white-900 py-12 rounded-xl">
        <h1 className="text-3xl font-bold  mb-2 ">Contact Me</h1>
        <span className="text-gray-300 block ">Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-800 text-white w-96 px-8 py-6 rounded-xl shadow-lg"
          >
            <h1 className="text-xl font-semibold mb-4 text-green-400 text-center">Send Your Message</h1>
            
            <div className="flex flex-col mb-4">
              <label className="block text-gray-300">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border-none bg-gray-700 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && <span className="text-red-400 text-sm">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-300">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border-none bg-gray-700 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-400 text-sm">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-300">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border-none bg-gray-700 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                id="message"
                name="message"
                placeholder="Enter your query"
              />
              {errors.message && <span className="text-red-400 text-sm">This field is required</span>}
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white rounded-xl px-4 py-2 w-full font-semibold hover:bg-green-600 duration-300 transition"
            >
              Send
            </button>
          </form>
        </div>
        <br/><br/>
      <hr/>
      </div>

    </>
  );
}

export default Contact;