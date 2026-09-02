import { test, expect } from '@playwright/test';

test('User Backend API', async ({request}) => {
  const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/register',{
    data:{
      "fullname": "Tehreem12345",
      "email": "tehreem123456@gmail.com",
      "username": "tehreem012345",
      "password": "Tehreem123$$"
    }
  });

  console.log(await response.json());
  expect(response.status()).toBe(201);
});

test('User Backend API', async ({request}) => {
  const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',{
    data:{
      "username": "tehreem012345",
      "email": "tehreem123456@gmail.com",
      "password": "Tehreem123$$"
    }
  });

  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('get User API Test', async ({ request }) => {
  const tokenResponse = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',
    {
      data: {
        "username": "tehreem0123",
        "email": "tehreem12345@gmail.com",
        "password": "Tehreem123$"
      }
    }
  );

  const tokenData = await tokenResponse.json();
  const token = tokenData.token;

  const getResponse = await request.get(
    `https://api-testing-postman.vercel.app/api/v1/users/current-user`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  console.log('Status:', getResponse.status());
  console.log('Response:', await getResponse.json());
  expect(getResponse.status()).toBe(200);
});

test('Update User API Test', async ({ request }) => {
  const tokenResponse = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/login',
    {
      data: {
        username: 'tehreem012345',
        email: 'tehreem123456@gmail.com',
        password: 'Tehreem123$$'
      }
    }
  );

  const tokenData = await tokenResponse.json();
  const token = tokenData.token;

  const updateResponse = await request.put(
    'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
    {
      headers: {
        Authorization: `Bearer ${token}`
      },

      data: {
        fullname: 'tehreem01',
        email: 'tehreem12345678@gmail.com',
        username: 'tehreem01234567'
      }
    }
  );

  console.log('Status:', updateResponse.status());
  console.log('Response:', await updateResponse.json());

  expect(updateResponse.status()).toBe(200);
});

test('Delete User API Test', async ({ request }) => {
  const tokenResponse = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/login',
    {
      data: {
        "username": "tehreem0123",
        "email": "tehreem12345@gmail.com",
        "password": "Tehreem123$"
      }
    }
  );

  const tokenData = await tokenResponse.json();
  const token = tokenData.token;

  const deleteResponse = await request.delete(
    `https://api-testing-postman.vercel.app/api/v1/users/delete-account`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  console.log('Status:', deleteResponse.status());
  console.log('Response:', await deleteResponse.json());
  expect(deleteResponse.status()).toBe(200);
});
