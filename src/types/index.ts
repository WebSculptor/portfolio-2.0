type NavLinks = {
  name: string;
  path: string;
  icon?: any;
};

type HeadingProps = {
  title: string;
  subtitle: string;
  description?: string;
  path?: string;
  btnText?: string;
};

type ReviewProps = {
  id: number;
  ratings: number;
  review: string;
  name: string;
  createdAt: string;
  imgUrl: string;
};

type HeroTypes = {
  title: string;
  description?: string;
};

type ContactProps = {
  icon?: any;
  name: string;
  value: string;
  path: string;
};

type ProjectsProps = {
  name: string;
  shortDescription: string;
  image?: any;
  url: string;
  underConstruction: boolean;
};

type AboutProps = {
  title: string;
  description: string;
  image?: any;
};
