import { test, request, expect } from '@playwright/test';
import  postAPIRequest from '../../test-data/api_request/POST_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create post API Request', async ({ request }) => {

    // Create POST API Request
    const response = await request.post('/booking', { data: postAPIRequest})
    
    // Print Response
    const jsonPostAPIResponse = await response.json();
    console.log("POST API Response is: " + JSON.stringify(jsonPostAPIResponse,null,2));

    //Assertions
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(response.headers()['content-type']).toContain('application/json; charset=utf-8');

    // Validate Response Body
    expect(jsonPostAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPostAPIResponse.booking).toHaveProperty('lastname');
    expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // validate API response body
    expect(jsonPostAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPostAPIResponse.booking.firstname).toBe('Jim');
    expect(jsonPostAPIResponse.booking.lastname).toBe('Brown');

    expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe('2018-01-01');
    expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe('2019-01-01');
});