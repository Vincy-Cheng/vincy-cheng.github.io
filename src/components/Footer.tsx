import Link from 'next/link';
import React from 'react';
import { BrandLinkedin, BrandGithub } from 'tabler-icons-react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="dark:text-secondary-50 text-secondary-900 p-2 flex space-x-1 justify-end">
      <Link
        href={'https://www.linkedin.com/in/wing-lam-cheng-ab00a323a/'}
        className="flex items-center space-x-1"
      >
        <BrandLinkedin className=" text-secondary-50 fill-[#2461A6] scale-125" />
        <span>Linkedin</span>
      </Link>
      <Link
        href={'https://github.com/Vincy-Cheng'}
        className="flex items-center space-x-1"
      >
        <BrandGithub className="dark:text-secondary-50 text-secondary-900 dark:fill-secondary-50 fill-secondary-900" />
        <span>GitHub</span>
      </Link>
    </div>
  );
};

export default Footer;
