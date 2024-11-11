import { FieldSchema, SchemaGroup } from "../types/schema";

/**
 * Parses JSON strings within a schema object, modifying the object in place
 * It iterates through each key in the object, converting any JSON strings to objects
 * @param obj - The schema object containing JSON strings
 */
function convertStringToValidJSON(obj: any) {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        try {
          obj[key] = JSON.parse(obj[key]);
        } catch (error) {
          console.warn(`Could not parse field ${key}:`, error);
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        convertStringToValidJSON(obj[key]);  
      }
    }
}

/**
 * Converts a camelCase or PascalCase key to a human-readable label
 * Example: "officerURL" -> "Officer URL"
 * @param key - The original key string
 * @returns The converted label string
 */
function convertKeyToLabel(key: string) : string{
    return key
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space before each uppercase letter following a lowercase letter
    .replace(/^./, str => str.toUpperCase());
}

/**
 * Converts an underscore-separated value to a human-readable description
 * Example: "RELATED_ACTIVITY" -> "Related Activity"
 * @param value - The original string value
 * @returns The formatted description string
 */
function convertValueToDescription(value: string) : string{
    let splitVal = value.toLowerCase().split('_');
    return splitVal.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


function isFieldSchema(obj: any): obj is FieldSchema {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        (obj.required === undefined || typeof obj.required === 'boolean') &&
        (obj.enumValues === undefined || Array.isArray(obj.enumValues)) &&
        (obj.value === undefined || typeof obj.value !== 'undefined')
    );
}

function isSchemaGroup(obj: any): obj is SchemaGroup {
    if (typeof obj !== 'object' || obj === null) return false;

    //this will make sure that key object inside is schemagroup or fieldschema
    return Object.values(obj).every(
        value => isFieldSchema(value) || isSchemaGroup(value)
    );
}

/**
 * Serializes the form data into a structured object suitable for submission
 * Nested fields are represented as nested objects
 * @param form - The form element to serialize
 * @returns The serialized form data
 */
function serializeForm(form: HTMLFormElement) : FormSubmission {
    const formData = new FormData(form);
    const result = {
        type: form.getAttribute("data-type") ?? '',
        form: {}
    }

    formData.forEach((value, key) => {
        const keys = key.split('.');
        let currentLevel = result.form;

        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];

            if(i === keys.length - 1) {
                currentLevel[k] = value;
            } else {
                if(!currentLevel[k]) {
                    currentLevel[k] = {};
                }
                currentLevel = currentLevel[k];
            }
        }
    });
    return result;
}

export {convertStringToValidJSON, convertKeyToLabel, isFieldSchema, convertValueToDescription, serializeForm, isSchemaGroup};