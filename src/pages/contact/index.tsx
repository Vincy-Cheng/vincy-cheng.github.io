import Link from 'next/link';
import React from 'react';
import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react';
import MenuIcon2 from '../../components/nav/OpenCloseIcon';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="space-y-2 text-lg">
      <Link
        href={'https://github.com/Vincy-Cheng'}
        className="flex items-center space-x-1 underline-offset-2 hover:underline hover:decoration-primary-500"
      >
        <BrandGithub className="dark:text-secondary-50 text-secondary-900 dark:fill-secondary-50 fill-secondary-900" />
        <span className="dark:text-secondary-50 text-secondary-900">
          GitHub - Vincy-Cheng
        </span>
      </Link>
      <Link
        href={'https://www.linkedin.com/in/wing-lam-cheng-ab00a323a/'}
        className="flex items-center space-x-1 underline-offset-2 hover:underline hover:decoration-primary-500"
      >
        <BrandLinkedin className=" text-secondary-50 fill-[#2461A6] scale-125" />
        <span className="dark:text-secondary-50 text-secondary-900">
          Linkedin - Wing Lam Cheng
        </span>
      </Link>
      <div className="flex items-center space-x-1 dark:text-secondary-50 text-secondary-900">
        <Mail />
        <span>Email - vincy.c.work23@gmail.com</span>
      </div>

      {/* <MenuIcon2></MenuIcon2> */}
    </div>
  );
};

export default Contact;
