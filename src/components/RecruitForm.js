import React from 'react';
import { useForm } from 'react-hook-form';

const RecruitForm = ({ match  }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  const textInput = "my-4 px-4 py-2 w-2/3 mx-auto rounded-lg text-2xl"
  return (
    <form action="https://formspree.io/f/mqknkvvj" method="POST" className="overflow-scroll">
      
      <input className={textInput} type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input className={textInput} type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input className={textInput} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input className={textInput} type="text" placeholder="City / State / Province" {...register("City / State / Province", {required: true, maxLength: 12})} />
      <input className={textInput} type="text" placeholder="Last Level Of Play" {...register("Last Level Of Play", {required: true})} />
      <input className={textInput} type="datetime" placeholder="Date Of Birth" {...register("Date Of Birth", {required: true})} />
      <select className="
      form-select appearance-none
      block
      w-2/3
      mx-auto
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
        <option value="Considering Applying">  Considering Applying</option>
        <option value=" ED1"> ED1</option>
        <option value=" ED2"> ED2</option>
        <option value=" RD"> RD</option>
        <option value=" Accepted, Considering Enrolling"> Accepted, Considering Enrolling</option>
        <option value=" Accepted Will Enroll"> Accepted Will Enroll</option>
        <option value=" Enrolled"> Enrolled</option>
      </select>
      <select className="
      form-select appearance-none
      block
      w-2/3
      mx-auto
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-4
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
        <option value="  Fall 2022">  Fall 2022</option>
        <option value=" Fall 2023"> Fall 2023</option>
        <option value=" Fall 2024"> Fall 2024</option>
        <option value=" Already Enrolled"> Already Enrolled</option>
      </select>
      <textarea placeholder="Tell us a bit about yourself..." className="form-control
        block
        w-2/3
        mx-auto
        mt-6
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" {...register("Tell Us About Yourself", {})} />
    <br></br>
      <input className={"bg-red-400 mb-12 hover:bg-red-600 duration-500 text-white rounded-lg px-3 cursor-pointer font-light text-4xl"} type="submit" />
    </form>
  );
}
export default RecruitForm;