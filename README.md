
# Dynamic Schema-Based Form Builder

## Task Objective
This project dynamically generates a form based on a schema fetched from a server or provided as mock data. The form allows users to select a schema type, populate the form fields, and submit the data.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Technical Choices](#technical-choices)
- [Assumptions Made](#assumptions)
- [Example Schema Configurations](#example-schema-configurations)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/synchoz/dynamic-form-builder
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
   cd dynamic-form-builder
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Technical Choices

1. **Component-Based Structure**  
   Code organization into components like `formRenderer`, `errorHandler`, and `loadingHandler` promotes modularity, maintainability, and ease of extension.

2. **Promises for Asynchronous Data Fetching**  
   Asynchronous functions for fetching the schema list and details prevent blocking, with error handling and loading states to improve the user experience.

3. **Mock Data for Schema Details**  
   Mock data simulates API responses for different schema types, facilitating development and testing without a backend server while maintaining a consistent structure.

4. **CSS Flexbox for Responsive Design**  
   Flexbox and media queries ensure that forms adapt to various screen sizes, providing a user-friendly interface on any device.

5. **Error and Loading State Management**  
   Components for managing errors and loading states offer consistent user feedback, enhancing UI responsiveness during asynchronous actions.

6. **Serialization and Nested Structure Handling**  
   `serializeForm` supports dynamic form serialization, handling single fields and deeply nested schema groups for flexible and adaptable submissions.

## Assumptions
- **Schema Formatting**: Based on the structure of `schemasList`, we assume `display` values like "Officer" and "Education" represent the correct field titles.
- **Field Labeling**: For camelCase fields like `startDate`, field names are split by capital letters for a user-friendly format (e.g., "Start Date").
- **Mock Data**: As this is a frontend-only project, mock data is used for schema list and details to simulate a server response.

## Example Schema Configurations

### Officer Schema

```json
{
  "type": "OFFICER",
  "scheme": {
    "officerURL": "{\"type\":\"String\",\"required\":true}",
    "name": { "full": "{\"type\":\"String\"}" },
    "employment": {
      "jobTitle": "{\"type\":\"String\"}",
      "company": "{\"type\":\"String\"}",
      "startDate": "{\"type\":\"Date\"}",
      "relationType": "{\"type\":\"Enum\",\"enumValues\":[\"OTHER_ACTIVITY\",\"RELATED\",\"TOP_EXECUTIVE\",\"ADVISORY_BOARD\",\"EMPLOYEE\",\"BOARD\",\"INVESTOR\",\"OWNER\"]}",
      "status": "{\"type\":\"Enum\",\"enumValues\":[\"Active\",\"InActive\"]}",
      "endDate": "{\"type\":\"Date\"}",
      "isMainEmployment": "{\"type\":\"Boolean\",\"value\":false}"
    }
  }
}
```

### Education Schema

```json
{
  "type": "EDUCATION",
  "scheme": {
    "institution": "{\"type\":\"String\",\"required\":true}",
    "degreeType": "{\"type\":\"String\"}",
    "startDate": "{\"type\":\"Date\"}",
    "endDate": "{\"type\":\"Date\"}",
    "verificationStatus": "{\"type\":\"Enum\",\"enumValues\":[\"COULDNT_VERIFY\",\"NOT_VERIFIED\",\"VERIFIED\",\"PENDING\",\"NOT_CHECKED\"]}"
  }
}
```

### Property Schema

```json
{
  "type": "PROPERTY",
  "scheme": {
    "propertyID": "{\"type\":\"String\",\"required\":true}",
    "owner": {
      "name": "{\"type\":\"String\"}",
      "contactInfo": {
        "phone": "{\"type\":\"String\"}",
        "email": "{\"type\":\"String\"}"
      },
      "address": {
        "street": "{\"type\":\"String\"}",
        "city": "{\"type\":\"String\"}",
        "zipCode": "{\"type\":\"String\"}"
      }
    },
    "propertyDetails": {
      "type": "{\"type\":\"Enum\",\"enumValues\":[\"RESIDENTIAL\",\"COMMERCIAL\",\"INDUSTRIAL\"]}",
      "size": "{\"type\":\"Number\"}",
      "value": "{\"type\":\"Number\"}",
      "history": {
        "lastSaleDate": "{\"type\":\"Date\"}",
        "previousOwners": {
          "name": "{\"type\":\"String\"}",
          "saleDate": "{\"type\":\"Date\"}"
        }
      }
    },
    "isMortgaged": "{\"type\":\"Boolean\"}"
  }
}
```

### Arrest Record Schema

```json
{
  "type": "ARREST_RECORD",
  "scheme": {
    "recordID": "{\"type\":\"String\",\"required\":true}",
    "individual": {
      "name": "{\"type\":\"String\"}",
      "alias": "{\"type\":\"String\"}",
      "identification": {
        "ssn": "{\"type\":\"String\"}",
        "licenseNumber": "{\"type\":\"String\"}"
      }
    },
    "incident": {
      "date": "{\"type\":\"Date\"}",
      "location": {
        "city": "{\"type\":\"String\"}",
        "street": "{\"type\":\"String\"}"
      },
      "officersInvolved": {
        "primaryOfficer": {
          "officerID": "{\"type\":\"String\"}",
          "name": "{\"type\":\"String\"}"
        },
        "assistingOfficers": {
          "officerID": "{\"type\":\"String\"}",
          "name": "{\"type\":\"String\"}"
        }
      },
      "charges": {
        "chargeCode": "{\"type\":\"String\"}",
        "description": "{\"type\":\"String\"}",
        "severity": "{\"type\":\"Enum\",\"enumValues\":[\"MISDEMEANOR\",\"FELONY\",\"INFRACTION\"]}"
      }
    }
  }
}
```

### Note
I intentionally included some invalid data in the Property Type configuration to test how the application handles such cases.

For more complex schemas, this project’s recursive functions allow for deeper nested structures and dynamically generated fields. Each schema type is configured to render a specific form layout based on the structure defined here.

## Author
This project was developed by Dima Varo.

## License
This project is licensed under the MIT License.