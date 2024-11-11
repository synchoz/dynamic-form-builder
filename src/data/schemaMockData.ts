import { SchemasList, SchemaDetails } from "../types/schema";

const dataSchemaList: SchemasList = [
  { type: "OFFICER", display: "Officer" },
  { type: "EDUCATION", display: "Education" },
  { type: "PROPERTY", display: "Property" },
  { type: "ARREST_RECORD", display: "Arrest Record" }
];

const schemaDetailsMap: { [key: string]: any } = {
    OFFICER: {
      type: "OFFICER",
      scheme: {
        officerURL: "{\"type\":\"String\",\"required\":true}",
        name: { full: "{\"type\":\"String\"}" },
        employment: {
          jobTitle: "{\"type\":\"String\"}",
          company: "{\"type\":\"String\"}",
          startDate: "{\"type\":\"Date\"}",
          relationType: "{\"type\":\"Enum\",\"enumValues\":[\"OTHER_ACTIVITY\",\"RELATED\",\"TOP_EXECUTIVE\",\"ADVISORY_BOARD\",\"EMPLOYEE\",\"BOARD\",\"INVESTOR\",\"OWNER\"]}",
          status: "{\"type\":\"Enum\",\"enumValues\":[\"Active\",\"InActive\"]}",
          endDate: "{\"type\":\"Date\"}",
          isMainEmployment: "{\"type\":\"Boolean\",\"value\":false}"
        }
      }
    },
    EDUCATION: {
      type: "EDUCATION",
      scheme: {
        institution: "{\"type\":\"String\",\"required\":true}",
        degreeType: "{\"type\":\"String\"}",
        startDate: "{\"type\":\"Date\"}",
        endDate: "{\"type\":\"Date\"}",
        verificationStatus: "{\"type\":\"Enum\",\"enumValues\":[\"COULDNT_VERIFY\",\"NOT_VERIFIED\",\"VERIFIED\",\"PENDING\",\"NOT_CHECKED\"]}"
      }
    },
    PROPERTY: {
      type: "PROPERTY",
      scheme: {
        propertyID: "{\"type\":\"String\",\"required\":true}",
        owner: {
          name: "{\"type\":\"String\"}",
          contactInfo: {
            phone: "{\"type\":\"String\"}",
            email: "{\"type\":\"String\"}"
          },
          address: {
            street: "{\"type\":\"String\"}",
            city: "{\"type\":\"String\"}",
            zipCode: "{\"type\":\"String\"}"
          }
        },
        propertyDetails: {
          type: "{\"type\":\"Enum\",\"enumValues\":[\"RESIDENTIAL\",\"COMMERCIAL\",\"INDUSTRIAL\"]}",
          size: "{\"type\":\"Number\"}",
          value: "{\"type\":\"Number\"}",
          history: {
            lastSaleDate: "{\"type\":\"Date\"}",
            previousOwners: {
              name: "{\"type\":\"String\"}",
              saleDate: "{\"type\":\"Date\"}"
            }
          }
        },
        isMortgaged: "{\"type\":\"Boolean\"}"
      }
    },
    ARREST_RECORD: {
      type: "ARREST_RECORD",
      scheme: {
        recordID: "{\"type\":\"String\",\"required\":true}",
        individual: {
          name: "{\"type\":\"String\"}",
          alias: "{\"type\":\"String\"}",
          identification: {
            ssn: "{\"type\":\"String\"}",
            licenseNumber: "{\"type\":\"String\"}"
          }
        },
        incident: {
          date: "{\"type\":\"Date\"}",
          location: {
            city: "{\"type\":\"String\"}",
            street: "{\"type\":\"String\"}"
          },
          officersInvolved: {
            primaryOfficer: {
              officerID: "{\"type\":\"String\"}",
              name: "{\"type\":\"String\"}"
            },
            assistingOfficers: 
              {
                officerID: "{\"type\":\"String\"}",
                name: "{\"type\":\"String\"}"
              }
          },
          charges: 
            {
              chargeCode: "{\"type\":\"String\"}",
              description: "{\"type\":\"String\"}",
              severity: "{\"type\":\"Enum\",\"enumValues\":[\"MISDEMEANOR\",\"FELONY\",\"INFRACTION\"]}"
            }
        }
      }
    }
};

function mockSchemaListFetch(): Promise<SchemasList> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataSchemaList);
      }, 1000);
    });
}

function mockSchemaDetailsFetch(selectedType: string): Promise<SchemaDetails> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(schemaDetailsMap[selectedType]);
      }, 1000);
    });

}

export {mockSchemaDetailsFetch, mockSchemaListFetch}