import React from "react";
import { TagGroup, Tag } from "rsuite";
export default function Article({
  imgUrl,
  title,
  content,
  tags,
  setActiveSample,
  id,
}) {
  function randomColorPicker() {
    let rnd = Math.floor(Math.random() * 6);
    
    switch (rnd) {
      case 0:
       
      return "red";
      case 1:
        return "orange";
      case 2:
        return "yellow";
      case 3:
        return "green";
      case 4:
        return "cyan";
      case 5:
        return "blue";
      case 6:
        return "violet";
    }
  }
  
  return (
    <div
      onClick={() => {
        setActiveSample(id);
      }}
      className="mb-3 flex lg:flex-row flex-col border border-solid border-e-gray-50 rounded cursor-pointer transition-all hover:bg-gray-200 hover:text-black"
    >
      <img src={imgUrl} className="lg:w-80 w-full " />

      <div className="p-2 flex flex-col gap-2">
        <label className="text-xl font-bold underline">{title}</label>
        <small className="mb-2 mt-2">{content}</small>
        <TagGroup style={{marginBottom:'2px'}}> 
          {tags.map((tag) => (
            <Tag color={randomColorPicker()}>{tag}</Tag>
          ))}
        </TagGroup>
      </div>
    </div>
  );
}
