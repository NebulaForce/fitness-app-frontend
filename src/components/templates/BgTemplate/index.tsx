import { FC } from 'react';

export interface BgTemplateProps {
  bgImage: string;
  children: any;
}

const BgTemplate: FC<BgTemplateProps> = ({bgImage, children}) => {

  return (
    <div
        className="relative w-full h-[100vh] max-h-custom bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-30 backdrop-blur-sm"></div>
        <div className='relative z-10 flex flex-col md:flex-row justify-center items-center w-full h-full gap-10'>{children}</div>
      </div>
  );
};

export default BgTemplate;