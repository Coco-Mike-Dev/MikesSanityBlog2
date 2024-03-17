import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { client } from "../lib/client";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import Newsletter from "../Components/Newsletter";
import Profile from "../Components/Profile";
import Footer from "../Components/Footer";
import Erro from "./Erro";

export default function Blogpost() {
  const [blogpost, setBlogpost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        slug,
        body,
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        },
        alt,
      },
       "name" : author -> name,
    } `
      )
      .then((data) => {
        setBlogpost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    document.title = `Reading | ${blogpost.title}`;
  }, [blogpost.title]);

  return (
    <>
      {blogpost ? (
        <section>
          {blogpost.mainImage && (
            <img
              src={blogpost.mainImage.asset.url}
              alt="Main Image"
              className="h-96 object-cover  w-full  mb-10  max-w-5xl mx-auto"
            />
          )}

          <div className="max-w-5xl mx-auto bg-slate-300 h-full p-7 rounded-xl mb-10">
            {" "}
            <h1 className="mb-2 text-3xl"> {blogpost.title}</h1>
            {blogpost.publishedAt && (
              <p className="text-sm mb-5">
                By {blogpost.name} &middot;
                {format(new Date(blogpost.publishedAt), "dd MMMM yyyy")}
              </p>
            )}
            <PortableText value={blogpost.body} />
          </div>
          <div className="max-w-5xl mx-auto px-5 mb-20 flex items-end justify-end mt-20">
            <Link
              to="/blog"
              className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 "
            >
              Read More Blog Post
            </Link>
          </div>

          <Newsletter />
          <Profile />
          <Footer />
        </section>
      ) : (
        <Erro />
      )}
    </>
  );
}
