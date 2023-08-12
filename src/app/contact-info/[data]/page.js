import React from 'react';

export const metadata = {
    title: "Contact More Info",
    description: "This is contact more info page",
  };

const MoreContactInfo = ({params}) => {
    const data = params.data
    
    return (
        <div className='my-36'>
           You are seeing dynamic data from <span className='bg-yellow-400 p-2'>{params.data}</span> route
        </div>
    );
};

export default MoreContactInfo;