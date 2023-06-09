import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function create(newNote) {
    return sendRequest(BASE_URL, 'POST', newNote);
}