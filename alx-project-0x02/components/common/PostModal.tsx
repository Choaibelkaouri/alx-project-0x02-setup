import React, { useState, FormEvent } from "react";
import { PostModalFormValues } from "@interfaces/index";
import Button from "./Button";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: PostModalFormValues) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formValues, setFormValues] = useState<PostModalFormValues>({
    title: "",
    content: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
    setFormValues({ title: "", content: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              value={formValues.title}
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              value={formValues.content}
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, content: e.target.value }))
              }
              className="w-full border rounded-md px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter content"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              label="Cancel"
              size="small"
              shape="rounded-md"
              type="button"
              onClick={onClose}
            />
            <Button
              label="Save"
              size="small"
              shape="rounded-md"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
