import React from "react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { client } from "../lib/client";
import { Link } from "react-router-dom";
import Newsletter from "../Components/Newsletter";
import Profile from "../Components/Profile";
import Footer from "../Components/Footer";

export default function Blog() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
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
    } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      {!stories ? (
        <h2>Loading</h2>
      ) : (
        <>
          {" "}
          {stories[0] && (
            <section className="max-w-5xl mx-auto my-20 px-5">
              <article className="relative">
                {stories[0].mainImage && (
                  <div className="main-content ">
                    {" "}
                    <img
                      src={stories[0].mainImage.asset.url}
                      alt={stories[0].mainImage.alt}
                      className="h-96 w-full object-cover  rounded-2xl overflow-hidden ;"
                    />
                  </div>
                )}
                <div className="absolute bottom-8 left-8 items-center justify-center">
                  <h1 className="text-5xl mb-10 md:text-7xl  text-white capitalize">
                    All Blogposts
                  </h1>
                </div>
              </article>
            </section>
          )}
        </>
      )}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-5">
        {stories.map((story) => (
          <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
            <article className=" bg-white mb-10 rounded-xl overflow-hidden hover:bg-slate-300">
              {story && (
                <img
                  src={story.mainImage.asset.url}
                  alt={story.mainImage.alt}
                  loading="lazy"
                  className="md:h-64 w-full object-cover"
                />
              )}

              <div className="p-4">
                <p className="text-sm">
                  By {story.name} &middot;
                  {format(new Date(story.publishedAt), "dd MMMM yyyy")}
                </p>
                <h1 className="text-xl mb-2 ">{story.title}</h1>
                <p className="text-sm leading-relaxed">
                  {`${story.body[0].children[0].text.substring(0, 200)}....`}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>
      <div className="max-w-5xl mx-auto px-5 mb-20 flex items-end justify-end">
        <Link
          to="/"
          className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 "
        >
          Home Page
        </Link>
      </div>
      <Newsletter />
      <Profile />
      <Footer />
    </>
  );
}
