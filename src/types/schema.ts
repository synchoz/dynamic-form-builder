interface FieldSchema {
    type: string;
    required?: boolean;
    enumValues?: string[];
    value?: any;
}

interface SchemaDetails {
    type: string;
    scheme: {
      [key: string]: FieldSchema | SchemaGroup;
    };
}

interface SchemaGroup {
    [key: string]: FieldSchema | SchemaGroup;
}

type SchemasList = {
    type: string;
    display: string;
}[];

//Generic interface that can hold either the data( SchemaDetails/SchemaList/JSON response ) or an error message
interface Result<T> {
    data?: T;
    errorMessage?: string;
}

export { FieldSchema, SchemaDetails, SchemaGroup, SchemasList, Result}