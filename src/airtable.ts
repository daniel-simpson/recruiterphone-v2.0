import Airtable from "airtable";

export type AirtableContact = {
  id: string;
  fields: {
    Name: string;
    Phone: string;
    Recruiter: boolean;
    // Opportunity: string[];
    // Business: string[];
    "Opportunity Name": string;
    "Opportunity Business": string;
    "Opportunity Statuses": string[];
  };
};

export const getContactByPhoneNumber = async (
  phoneNumber: string
): Promise<AirtableContact | undefined> => {
  if (process.env.AIRTABLE_BASE_ID == null) {
    throw new Error("No AIRTABLE_BASE_ID set, exiting...");
  }

  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  const contactRecords = await base("Contacts")
    .select({
      maxRecords: 1,
      filterByFormula: `{Phone} = '${phoneNumber}'`,
    })
    .all();

  const contacts = contactRecords.map((r) => r as AirtableContact);

  if (contacts.length > 0) {
    return contacts[0];
  }

  return undefined;
};
