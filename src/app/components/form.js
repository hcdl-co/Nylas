"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const notify = () => toast("✅ Email Sent Successfully");
  const emailError = () =>
    toast("❌ Oops, something went wrong with your email");
  const sending = () => toast("⏳ We are sending your email...");

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    comment: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    sending();
    console.log(formData);
    try {
      setIsLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        notify();
      } else {
        emailError();
      }
    } catch (error) {
      console.error("Error sending email", error);
    } finally {
      setFormData({
        email: "",
        name: "",
        phone: "",
        comment: "",
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex min-h-full justify-center flex-col px-6 py-12 lg:px-8">
        <div className="bg-white w-full mx-auto lg:w-6/12 border-gray-300 shadow-lg shadow-indigo-600/10 border rounded-lg">

        <div className= "sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Contact us 💬
          </h2>
        </div>

        <div className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <form
            className="space-y-6"
            action=""
            onSubmit={handleSubmit}
            method="POST"
            >
            <div>
              <label
                htmlFor="email"
                className="block text-md font-semibold leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  type="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  autoComplete="email"
                  required
                  placeholder="johnsmith@gmail.com"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1 xl:flex-row">
              <div className="flex-col">

              <label
                htmlFor="name"
                className="block text-md font-semibold leading-6 text-gray-900"
                >
                Full Name
              </label>
              <div className="mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="John Smith"
                  />
              </div>
                  </div>
                  <div className="flex-col">

              <label
                htmlFor="phone-number"
                className="block text-md font-semibold leading-6 text-gray-900"
                >
                Phone Number
              </label>
              <div className="mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="(555) 987-6543"
                  />
                  </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="comment"
                className="block text-md font-semibold leading-6 text-gray-900"
                >
                Add your question
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="comment"
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  id="comment"
                  placeholder="I'm looking to change my healthcare plan"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member already?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
              Sign up for free today!
            </a>
          </p>
                </div>
        </div>
      </div>
    </>
  );
}
