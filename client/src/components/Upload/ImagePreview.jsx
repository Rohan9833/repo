import React, { useMemo } from "react";
import {
  Image as ImageIcon,
  CheckCircle,
} from "lucide-react";

const ImagePreview = ({
  file,
  title,
}) => {
  const imageUrl = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  if (!file) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">

        <h2 className="text-xl font-semibold text-slate-900 mb-5">
          {title}
        </h2>

        <div className="min-h-[340px] rounded-2xl bg-slate-50 flex flex-col items-center justify-center text-center">

          <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center">

            <ImageIcon
              size={42}
              className="text-slate-500"
            />

          </div>

          <h3 className="mt-6 text-xl font-semibold text-slate-700">
            Preview
          </h3>

          <p className="mt-2 text-slate-500 max-w-xs">
            The selected image will appear here.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">

        <div>

          <h2 className="text-lg font-semibold text-slate-900">
            {title}
          </h2>

          <p className="text-sm text-slate-500">
            Uploaded successfully
          </p>

        </div>

        <CheckCircle
          size={24}
          className="text-green-600"
        />

      </div>

      {/* Image */}

      <div className="bg-slate-50 flex items-center justify-center p-4">

        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[340px] object-contain rounded-xl"
        />

      </div>

      {/* Footer */}

      <div className="px-6 py-4 border-t border-slate-200">

        <p className="text-sm text-slate-500">
          File Name
        </p>

        <p className="font-medium text-slate-800 break-all">
          {file.name}
        </p>

      </div>

    </div>
  );
};

export default ImagePreview;