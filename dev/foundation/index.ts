import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

// Create a GCP resource (Storage Bucket)
const bucket = new gcp.storage.Bucket("found-bucket", {
    location: "US"
});

// Export the DNS name of the bucket
// change
export const bucketName = bucket.url;
