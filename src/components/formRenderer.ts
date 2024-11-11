import { isFieldSchema, isSchemaGroup } from '../utils/formHandler';
import { renderField } from './fieldRenderer';
import { convertKeyToLabel } from '../utils/formHandler';
import { SchemaGroup } from '../types/schema';

/**
 * Recursively renders schema fields in a parent container
 * @param obj - The schema object
 * @param parentKey - The key of the parent field (for nested fields)
 * @param parentContainer - The HTML element to render fields into
 */

function renderSchemaFields(obj: any, parentKey: string, parentContainer: HTMLElement) {
    for (const key in obj) {
        const fullPath = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];

        if (isFieldSchema(value)) {
            renderField(parentContainer, value, key, fullPath);
        } else if (isSchemaGroup(value)) {
            renderGroup(parentContainer, value, convertKeyToLabel(key), fullPath);
        }
    }
}

/**
 * Renders a group of schema fields in a fieldset
 * @param parent - The parent HTML element
 * @param obj - The SchemaGroup object
 * @param groupLabel - Label for the fieldset legend
 * @param fullPath - The full path for nested keys which will be used for submit payload
 */
function renderGroup(parent: HTMLElement, obj: SchemaGroup, groupLabel: string, fullPath: string): void {
    const groupFieldSet = createFieldSetWithLegend(groupLabel, "fieldsetContainer");
    renderSchemaFields(obj, fullPath, groupFieldSet);
    parent.appendChild(groupFieldSet);
}

function createFieldSetWithLegend(labelText: string, className: string): HTMLFieldSetElement {
    const fieldSet = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = labelText;
    fieldSet.appendChild(legend);
    fieldSet.className = className;
    return fieldSet;
}

export { renderSchemaFields, renderGroup, createFieldSetWithLegend }