import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  if (!photo || !user) {
    throw new Error('null');
  }
  
  return {
    photo: photo || null,
    user: user || null,
  };
}
