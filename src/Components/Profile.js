import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow-lg my-20 md:items-center">
        <article>
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile pictute"
            className="h-72 md:object-cover"
          ></img>
        </article>
        <article className="p-4 md:p-0 md:pr-8">
          <h3 className="text-2xl mb-4">Michael Njenga</h3>
          <p>
            Is a fronf-end developer in Raect and C# based in Nairobi, Kenya.
          </p>

          <ul className="flex items-center justify-start gap-4 mt-8">
            <li className="text-4xl text-white bg-slate-600 rounded-full cursor-pointer ">
              <FaFacebook />
            </li>
            <li className="text-2xl text-slate-600 border border-slate-600 rounded-full  p-1 cursor-pointer">
              <FaTwitter />
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
