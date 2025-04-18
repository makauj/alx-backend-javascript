import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((values) => {
    const outPut = [];
    values.forEach((value) => {
      if (value.status === 'fulfilled') {
        outPut.push({ status: value.status, value: value.value });
      } else {
        result.push({ status: value.status, value: `$(value.reason)` });
      }
    });
    return outPut;
  });
}
