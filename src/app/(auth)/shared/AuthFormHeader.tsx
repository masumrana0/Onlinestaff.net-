interface AuthFormHeaderProps {
    title: string;
    description: string; 
  }
  
  const AuthFormHeader = ({ title, description }: AuthFormHeaderProps) => {
    return (
      <div className="mb-6 space-y-1">
        <h1 className="text-3xl font-bold text-gray-700 ">
          {title}
        </h1>
        <p className="text-gray-500 text-lg">
          {description}
        </p>
      </div>
    );
  };
  
  export default AuthFormHeader;
  
