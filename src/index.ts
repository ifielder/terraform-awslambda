import cuid from 'cuid';

export const handler = async (event: any) => {
  console.log(cuid());
  console.log(JSON.stringify(event));

  [1, 2, 3].forEach((item) => console.log(item, 'in for each loop'));
  [1, 2, 3].map((item) => console.log(item, 'in map loop'));

  return 'success';
};
