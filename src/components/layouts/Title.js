import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-16">
      <h3 className="text-sm-plus uppercase font-medium tracking-wider text-designColor transition-colors duration-300 group-hover:text-designColorLight">
       {title}
      </h3>
      <h1 className="text-h2 md:text-h1 text-textPrimary font-extrabold capitalize tracking-tight">{des}</h1>
    </div>
  );
}

export default Title
