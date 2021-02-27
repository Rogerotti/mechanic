import axios from 'axios';

interface ILoginDTO {
  token: string;
}

export const loginRequest = async (username: string, password: string): Promise<ILoginDTO> => {
  const url = 'www.test.com'; // TODO
  return await axios
    .post<ILoginDTO[]>(url, {
      username,
      password,
    })
    .then((_res) => {
      return { token: 'test' };
    })
    .catch((exception) => {
      console.error('login', exception);
      return { token: 'test' };
    });
};
