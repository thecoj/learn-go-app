/* const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="flex items-center justify-center h-full">
      {children}
    </div>
   );
}
 
export default AuthLayout; */
import React from 'react';

const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
      <img
        src="/background.svg"
        alt="Background Animation"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 flex flex-col w-full h-full md:flex-row">
        <div className="flex flex-col items-center justify-center w-full p-10 text-center md:items-start md:w-1/2 lg:w-1/3 md:p-20 lg:pl-40 md:text-left">
          <img src="/learngo.svg" alt="Logo" className="w-24 h-auto mx-auto mb-8 md:w-32 md:mx-0" />
          <h1 className="mb-4 text-2xl font-bold leading-tight md:text-4xl">
            Welcome to the learning
            platform that is earning you!
          </h1>
          <p className="text-sm md:text-lg">
            Discover courses made by people like you to share knowledge and make a living out of it.
          </p>
        </div>
        <div className="flex items-center justify-center w-full p-4 md:w-1/2 lg:w-2/3 md:p-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
