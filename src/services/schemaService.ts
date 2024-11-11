import { SchemasList, SchemaDetails, Result } from "../types/schema"; 
import { mockSchemaDetailsFetch, mockSchemaListFetch } from "../data/schemaMockData";

async function getSchemaList(): Promise<Result<SchemasList>> {
    let errorMessage;
    try {
        const data = await mockSchemaListFetch();
        return { data };
    } catch (error) {
        errorMessage = error.message || 'An unexpected error occurred';
        return { errorMessage };
    }
}

async function getSchemaDetails(selectedType: string): Promise<Result<SchemaDetails>> {
    let errorMessage;
    try {
        const data = await mockSchemaDetailsFetch(selectedType);
        return { data };
    } catch (error) {
        errorMessage = error.message || 'An unexpected error occurred';
        return {errorMessage}
    }
}
  
export { getSchemaList, getSchemaDetails }