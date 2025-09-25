import React from "react";
import Link from "next/link";

interface AuthRedirectProps {
  message: string; // The message to display
  linkText: string; // The text for the link
  href: string; // The target URL for the link
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({
  message,
  linkText,
  href,
}) => {
  return (
    <div className="mt-4 text-center text-sm text-gray-500">
      {message}{" "}
      <Link href={`${href}`} className="text-blue-600 hover:underline">
        {linkText}
      </Link>
    </div>
  );
};

export default AuthRedirect;
