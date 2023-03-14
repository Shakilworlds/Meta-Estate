import React from "react";
import Image from "next/image";
import { blogData } from "@/pages/data/Data";
import Button from "../Button/ButtonFill2";
import { HiArrowLongRight } from "react-icons/hi2";

const Blog = () => {
  return (
    <div className="container py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blogData, i) => {
          return (
            <div key={i}>
              {/* Image */}
                <Image
                  src={blogData.img}
                  alt={Image}
                  width={429}
                  height={350}
                />
                {/* Content */}
              <div className="p-6 shadow-4xl rounded-b-xl">

                {/* Author */}
              <div className="flex justify-between pb-4  border-b-[1px] border-primary/20">
                <p className="font-inter font-normal text-sm text-peragraph">{blogData.date}</p>
                <p className="font-inter font-normal text-sm text-peragraph">{blogData.author}</p>
                <p className="font-inter font-normal text-sm text-peragraph">{blogData.read}</p>
              </div>

              {/* Title Text*/}
              <h3 className="font-FTMilky font-black text-2xl leading-8 text-black py-4">{blogData.title}</h3>
              <p className="font-inter font-normal text-base text-peragraph">{blogData.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="pt-10 flex justify-center">
        <Button>
          Explore Now{" "}
          <span className="text-2xl">
            <HiArrowLongRight />
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default Blog;
