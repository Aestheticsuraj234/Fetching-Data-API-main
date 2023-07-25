/* import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
 */

export default function Data({ paginatePosts }) {
 
console.log(paginatePosts)
  /*   const a = useContext(noteContext) */
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 mt-32">
        {paginatePosts.map((source, id) => (
          <div key={id} className="mb-8">
            <div className="flex flex-col rounded-3xl bg-white m-4 h-full shadow-2xl">
              <img
                className="h-80 w-200 rounded-t-2xl transition duration-300 ease-in-out hover:scale-110"
                src={`${source.urlToImage
                  ? source.urlToImage
                  : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                  }`}
                target="_blank"
              />
              <div className="p-9">
                <h2 className="text-center font-bold pb-4 text-lg">
                  {`${source.author
                    ? source.author
                    : "Facebook"
                    }`}
                </h2>
                <p className=" text-gray-600 text-left">{`${source.title
                  ? source.title
                  : "It's no secret that most people who travel via plane hate their tiny, cramped seats. But airplane seating isn't just uncomfortable it might be unsafe for some. A new bill moving through Congress aims…"
                  }`}</p>

                <p className="text-gray-600 text-left">{`${source.description
                  ? source.description
                  : "It's no secret that most people who travel via plane hate their tiny, cramped seats. But airplane seating isn't just uncomfortable it might be unsafe for some. A new bill moving through Congress aims…"
                  }`}</p>
                <p className="text-gray-600 text-left">{`${source.content
                  ? source.content
                  : "It's no secret that st people who travel via plane hate their tiny, cramped seats. But airplane seating isn't just uncomfortable it  most people who travel via plane hate their tiny, cramped seats. But airplane seating isn't just uncomfortable it might be unsafe for some. A new bill moving through Congress aims…"
                  }`}</p>
                <p className="flex flex-row text-gray-900 font-bold justify-center mt-6">
                  {source.publishedAt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
