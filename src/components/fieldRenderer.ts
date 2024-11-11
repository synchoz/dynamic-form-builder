import { FieldSchema } from "../types/schema";
import { convertKeyToLabel, convertValueToDescription } from "../utils/formHandler";
import { showError } from "./errorHandler";

function createStringField(schema: FieldSchema): HTMLElement {
    const input = document.createElement('input');
    input.type = "text";
    if (schema.value) input.value = schema.value;
    input.required = schema.required || false;
    return input;
}

function createBooleanField(schema: FieldSchema): HTMLElement {
    const input = document.createElement('input');
    input.type = "checkbox";
    input.checked = schema.value || false;
    input.required = schema.required || false;
    return input;
}

function createDateField(schema: FieldSchema): HTMLElement {
    const input = document.createElement('input');
    input.type = "date";
    input.required = schema.required || false;
    return input;
}

function createEnumField(schema: FieldSchema): HTMLElement {
    const select = document.createElement('select');
    schema.enumValues.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = convertValueToDescription(value);
        select.appendChild(option);
    });
    select.required = schema.required || false;
    return select;
}

//This mapping is going to help building the form elements
const schemaMappings: Record<string, (schema: FieldSchema) => HTMLElement> = {
    'String': createStringField ,
    'Enum': createEnumField ,
    'Date':  createDateField,
    'Boolean': createBooleanField
};
function renderField (parent: HTMLElement, obj: FieldSchema, key: string, fullPath: string): void {
    try {
        const fieldCreated = schemaMappings[obj.type](obj);
        if (fieldCreated) {
            fieldCreated.setAttribute("name", fullPath)
            const div = document.createElement('div');
            div.className = "fieldContainer";
            const label = document.createElement('label');
            label.textContent = convertKeyToLabel(key);
            if(obj.required) {
                const span = document.createElement('span');
                span.className = "required";
                span.textContent = "*";
                label.appendChild(span);
            }
            div.appendChild(label);
            div.appendChild(fieldCreated);
            parent.appendChild(div);
        }
    } catch (error) {
        showError(parent, `There was a problem rendering a field :${error}`);
    }
}

export { renderField }