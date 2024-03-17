import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-slate-400 max-w-5xl mx-auto py-7 flex items-center justify-center flex-col">
        <h3 className="text-2xl dark:text-white">Share on social media</h3>
        <ul className="flex mt-4  text-small text-slate-600 items-center justify-center flex-wrap gap-4 cursor-pointer dark:text-slate-500">
          <li className=" hover:text-indigo-600">Facebook</li>
          <li className=" hover:text-indigo-600">Twitter</li>
          <li className=" hover:text-indigo-600">Instagram</li>
          <li className=" hover:text-indigo-600">Pintrest</li>
          <li className=" hover:text-indigo-600">Tubmlr</li>
        </ul>
      </footer>
    </>
  );
}
