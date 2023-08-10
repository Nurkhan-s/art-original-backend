export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParams = {
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
};

export type CreateUserPostParams = {
  title: string;
  description: string;
};

export interface PictureDto {
  name: string;
  author: string;
  year: string;
  type: string;
  size: string;
  id: number;
  images: string[];
}

export type CreatePictureParams = {
  name: string;
  author: string;
  year: number;
  type: string;
  size: string;
  images: string[];
};

export type EditPictureParams = {
  name: string;
  author: string;
  year: number;
  type: string;
  size: string;
  images: string[];
};
