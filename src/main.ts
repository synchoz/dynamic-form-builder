import { getSchemaList, getSchemaDetails } from "./services/schemaService";
import { convertStringToValidJSON, convertValueToDescription } from "./utils/formHandler";
import { SchemaDetails, SchemasList } from "./types/schema";
import { renderSchemaFields, createFieldSetWithLegend } from "./components/formRenderer";
import { hideError, showError } from "./components/errorHandler";
import { hideLoading, showLoading } from "./components/loadingHandler";
import { submitForm } from "./services/formService";


const form = document.querySelector<HTMLFormElement>("#newDynamicForm");
const resultDiv = document.querySelector<HTMLDivElement>("#resultList");
const select = document.querySelector<HTMLSelectElement>("#schemasListSele");
const formDiv = document.querySelector<HTMLDivElement>("#formDiv");
const appContainer = document.querySelector<HTMLDivElement>(".container");
const fetchListBtn = document.querySelector<HTMLButtonElement>("#fetchList");
const successMessageDiv = document.querySelector<HTMLDivElement>("#successMessage");
const submitDiv = document.querySelector<HTMLDivElement>(".submitDiv");

async function showSchemasList() {
    hideError(appContainer)
    showLoading(appContainer);
    const result = await getSchemaList();
    hideLoading(appContainer);
    if(result.errorMessage) {
        fetchListBtn.style.display = "block";
        showError(appContainer, result.errorMessage)
    } else if(result.data)
        fetchListBtn.style.display = "none";
        renderSchemaList(result.data);
}

function renderSchemaList(schemaList: SchemasList): void {
    schemaList.forEach(schema => {
        const option = document.createElement('option');
        option.innerText = schema?.display;
        option.value = schema?.type
        select.appendChild(option);
        resultDiv.style.display = "flex";
    });
}

/**
 * Generates a form based on the selected schema type.
 * Displays an error if no schema is selected.
 */
function createFormFromSchemaSelection(): void {
    const select = document.querySelector<HTMLSelectElement>('#schemasListSele');
    if (select) {
        const selectedType = select.value;
        if (selectedType) {
            fetchAndRenderSchemaDetails (selectedType);
        } else {
            showError(appContainer, 'Please select a schema type');
        }
    } else {
        showError(appContainer, 'Select element not found');
    }
}

/**
 * Fetches and renders form details for a given schema type.
 * @param selectedType - The type of schema selected by the user.
 */
async function fetchAndRenderSchemaDetails (selectedType) {
    hideError(appContainer);
    showLoading(appContainer);
    const result = await getSchemaDetails(selectedType);
    hideLoading(appContainer);
    if(result.errorMessage) {
        showError(appContainer, result.errorMessage)
    } else if(result.data) {
        renderForm(result.data);
    }
}

/**
 * Renders the form based on the schema details provided.
 * @param schemaDetails - The schema details used to generate the form fields.
 */
function renderForm(schemaDetails: SchemaDetails): void {
    if(!schemaDetails) {
        showError(appContainer, 'Invalid schema details provided');
        return;
    }

    convertStringToValidJSON(schemaDetails);
    const mainFieldSet = createFieldSetWithLegend(convertValueToDescription(schemaDetails.type), "fieldsetContainer");
    form.appendChild(mainFieldSet);

    renderSchemaFields(schemaDetails.scheme, "", mainFieldSet);
    showForm(schemaDetails.type);
}

/**
 * Displays the form container and hides the app container.
 * @param formType - The type of form to display.
 */
function showForm(formType: string): void {
    formDiv.style.display = "block";
    appContainer.style.display = "none";
    form.setAttribute("data-type", form.getAttribute("data-type") || formType);
}

// Event listener for form submission
if (form) {
    form.addEventListener("submit", async (event: Event) => {
        event.preventDefault();
        submitDiv.style.display = "none";
        showLoading(form);
        const result = await submitForm(form);
        hideLoading(form);
        if(result.errorMessage) {
            submitDiv.style.display = "flex";
            showError(form, `${result.errorMessage} try to resubmit`)
        }
        if(result.data) {
            formDiv.style.display = "none";
            successMessageDiv.style.display = "block";
        }
    });
}

export {showSchemasList, createFormFromSchemaSelection}
