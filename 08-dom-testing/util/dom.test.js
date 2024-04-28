import fs from 'fs';
import path from 'path';

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { showError } from './dom';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmDocContent);
});

describe('dom.js showError() tests', () => {
    it('should not contain an error paragraph initially', () => {
        const errorElement = document.getElementById('errors');
        const errorParagraph = errorElement.firstElementChild;

        expect(errorParagraph).toBeNull();
    });

    it('should add an error paragraph to the id="errors" element', () => {
        const testErrorMessage = 'errorText';
        showError(testErrorMessage);

        const errorElement = document.getElementById('errors');
        const errorParagraph = errorElement.firstElementChild;

        expect(errorParagraph).not.toBeNull();
    });

    it('should add an error paragraph to the id="errors" element', () => {
        const testErrorMessage = 'errorText';
        showError(testErrorMessage);

        const errorElement = document.getElementById('errors');
        const errorParagraph = errorElement.firstElementChild;

        expect(errorParagraph.textContent).toBe(testErrorMessage);
    });
});
