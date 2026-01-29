import { test, expect } from '@playwright/test';

test('Verify Islamabad temperature with success response', async ({ request }) => {
  const apiKey = '20d092ca1fd5a8aadfcf04e743eef36b';
  const response = await request.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${apiKey}&units=metric`
  );

  console.log(await response.text());

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.main.temp).toBeDefined();

  console.log('Islamabad Temperature:', body.main.temp);
});
