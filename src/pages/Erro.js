import React from "react";
import { Link } from "react-router-dom";
import "../icon/b.svg";

export default function Erro() {
  return (
    <>
      <section className="flex flex-col  items-center justify-center text-center h-screen object-center px-5 ">
        <img
          src="https://www.svgrepo.com/show/130286/server.svg"
          alt="Broken-Link"
          className="h-20 mb-10"
        />
        <article className="mx-w-3xy mx-auto">
          <h1 className="text-3xl mb-8 ">
            Ooops!!! Seems like you clicked on a link that dose not exist
          </h1>
          <Link to="/">Back to Homepage</Link>
        </article>
      </section>
    </>
  );
}
