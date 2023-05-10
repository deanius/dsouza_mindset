import Link from "next/link";
import React from "react";

type ButtonProps = {
  name: string | any;
  location: string | any;
};

const Button = ({ name, location }: ButtonProps) => {
  return (
    <button>
      <Link href={location}>{name}</Link>
    </button>
  );
};

export default Button;
