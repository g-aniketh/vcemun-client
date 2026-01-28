import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  paymentScreenshot: f({ image: { maxFileSize: "5MB", maxFileCount: 1 } })
    // No auth / extra metadata needed for now
    .middleware(() => ({}))
    .onUploadComplete(({ file }) => {
      console.log("Upload complete for paymentScreenshot:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

