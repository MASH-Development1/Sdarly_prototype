import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { useState, useRef } from "react";
import { Product } from "../page";
import { v4 as uuidv4 } from "uuid";

type AddProductOverlayProps = {
  onSubmit: (product: Product) => void;
};

export default function AddProductOverlay({
  onSubmit,
}: AddProductOverlayProps) {
  const [image, setImage] = useState<File | null>(null);
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const [open, setOpen] = useState(false); // Manage modal open/close internally
  const inputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setImage(null);
    setPdfFiles([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handlePdfDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const pdfs = files.filter((file) => file.type === "application/pdf");
    setPdfFiles((prev) => [...prev, ...pdfs]);
  };

  const handlePdfSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const pdfs = files.filter((file) => file.type === "application/pdf");
    setPdfFiles((prev) => [...prev, ...pdfs]);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  const handleSubmit = () => {
    if (!image) return alert("Please upload a product image");

    const newProduct: Product = {
      id: uuidv4(),
      imageUrl: URL.createObjectURL(image),
      productName: "New Product",
      size: "8 1/2 x 11",
      weight: 60,
      finish: "Uncoated Smooth",
      color: "White",
      status: "Pending",
    };

    onSubmit(newProduct);
    resetForm();
    setOpen(false); // Close dialog
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="fixed bottom-4 right-4 flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-md shadow hover:bg-blue-100"
          onClick={resetForm}
        >
          <div className="bg-blue-700 text-white rounded p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <span className="text-sm font-medium">Add Product</span>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md w-full rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Upload Product Picture, Certificates & Specs
          </DialogTitle>
        </DialogHeader>

        <div>
          <label className="block text-sm font-medium mb-1">
            Upload Picture
          </label>
          <input type="file" accept="image/*" onChange={handleImageSelect} />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="mt-3 w-24 h-24 object-cover rounded border"
            />
          )}
        </div>

        <div>
          <label className="block mt-6 text-sm font-medium mb-1">
            Upload Certificates & Product Details
          </label>
          <div
            onDrop={handlePdfDrop}
            onDragOver={(e) => e.preventDefault()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-sm text-gray-500 relative"
          >
            <p>Choose a file or drag & drop it here</p>
            <p className="text-xs mt-1 text-gray-400">PDF only</p>
            <input
              type="file"
              accept="application/pdf"
              multiple
              onChange={handlePdfSelect}
              ref={inputRef}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          <div className="mt-4 space-y-2">
            {pdfFiles.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-gray-100 rounded px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold text-xs">PDF</span>
                  <span className="truncate max-w-[150px]">{file.name}</span>
                </div>
                <span className="text-sm text-blue-600 animate-pulse">
                  Done
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </DialogContent>
    </Dialog>
  );
}
