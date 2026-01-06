import { useState } from "react";
import axios from "axios";

function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/register", form);
    alert("Registered Successfully");
  };

  return (
    <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md sm:p-8"
    >
        <h2 className="text-center text-2xl font-semibold text-gray-800">
            Registration
        </h2>

        <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-800
                placeholder-gray-400 focus:border-blue-600 focus:outline-none
                focus:ring-2 focus:ring-blue-500"
        />

        <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-800
                placeholder-gray-400 focus:border-blue-600 focus:outline-none
                focus:ring-2 focus:ring-blue-500"
        />

        <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-800
                    placeholder-gray-400 focus:border-blue-600 focus:outline-none
                    focus:ring-2 focus:ring-blue-500"
        />

        <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold
                text-white transition hover:bg-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:ring-offset-2"
        >
            Register
        </button>
    </form>

  );
}

export default Registration;
