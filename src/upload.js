require("dotenv").config();

const { BlobServiceClient } = require("@azure/storage-blob");
const path = require("path");

async function main() {
  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient("documents");

    const filePath = path.join(__dirname, "../uploads/test.txt");

    const blobName = "test.txt";
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const result = await blockBlobClient.uploadFile(filePath)

    console.log("File upload with success!");
    console.log("Name :", blobName);
    console.log("ETag :", result.etag);

  } catch (e) {
    console.error("Error while upload :", error.message);
  }
}

main();
