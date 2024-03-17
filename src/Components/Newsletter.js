import React from "react";

export default function Newsletter() {
  return (
    <>
      <section className="py-20 px-20 bg-gradient-to-r from-indigo-600 to-slate-800">
        <div className="max-w-4xl  wx-auto grid grid-cols-1  gap-8 text-center md:text-left md:grid-cols-2 md:place-items-center">
          <article>
            <h2 className="text-white mb-4 text-3xl lg:text-4xl">
              Sign up to our Newsletter
            </h2>
            <p className="text-slate-100 ">
              Receive the latest updates. No spam, unsubscribe anytime!
            </p>
          </article>
          <article>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                required
                className="w-full py-2 px-4 rounded shadow mb-4 bg-transparent border border-slate-200 placeholder-slate-300 text-slate-300 tracking-wide"
              ></input>
              <button
                type="submit"
                className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}
