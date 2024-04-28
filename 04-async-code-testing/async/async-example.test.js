import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {
    const testUserEmail = 'user@test.com';
    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined();
            // expect(token).toBe(2);
            done();
        } catch (err) {
            done(err);
        }
    });
});

it('should generate a token value when using the promise based approach', () => {
    const testUserEmail = 'user@test.com';
    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
    // expect(generateTokenPromise(testUserEmail)).resolves.toEqual(2);
});

it('should generate a token value when using the async/await based approach', async () => {
    const testUserEmail = 'user@test.com';
    const token = await generateTokenPromise(testUserEmail);
    // expect(token).toBe(2);
    expect(token).toBeDefined();
});
