import { Result } from "../types/schema";
import { serializeForm } from "../utils/formHandler";

async function submitForm(form: HTMLFormElement): Promise<Result<any>> {
    try {
        const payload = JSON.stringify(serializeForm(form), null, 2);
        
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log('Response:', data.json);
        return { data };
    } catch (error) {
        return { errorMessage: error.message };
    }
}

export { submitForm }