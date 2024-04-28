import { describe, it, expect } from 'vitest';
import { extractPostData } from './posts';

describe('posts.js savePost() test', () => {
    it('', () => {});
});

describe('posts.js extractPostData() test', () => {
    it('should extract title and content from formData', () => {
        const testTitle = 'testTitle';
        const testContent = 'testContent';
        const testFormData = {
            title: testTitle,
            content: testContent,
            get(value) {
                return this[value];
            },
        };

        const data = extractPostData(testFormData);
        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    });
});
