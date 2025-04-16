import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  let response = [];

  try {
    response = { photo, user };
  } catch (error) {
    response = { photo: null, user: null };
  }

  return response;
}
