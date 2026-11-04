require("dotenv").config();
const { BlobServiceClient } = require("@azure/storage-blob");

async function main() {
  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      process.env.AZURE_STORAGE_CONNECTION_STRING
    );

    console.log("Connecting to Floci AZ...");

    //Creating Container
    const containerName = "documents";
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const result = await containerClient.createIfNotExists();

    if (result.succeeded) {
      console.log("Container created:", containerName)
    } else {
      console.log("The container already existed")
    }

  } catch (error) {
    console.error("Error: ", error.message)
  }
}

main();
