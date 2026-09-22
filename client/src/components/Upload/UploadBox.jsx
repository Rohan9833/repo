import React, { useRef } from "react";
import {
    CloudUpload,
    Image,
    CheckCircle,
} from "lucide-react";

const UploadBox = ({
    title,
    image,
    onImageSelect,
}) => {
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        onImageSelect(file);
    };

    return (
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">

            {/* Title */}

            <h2 className="text-xl font-semibold text-slate-900 mb-5">
                {title}
            </h2>

            {/* Upload Area */}

            <div
                onClick={() => inputRef.current.click()}
                className="
          group
          border-2
          border-dashed
          border-slate-300
          rounded-2xl
          cursor-pointer
          transition-all
          duration-300
          hover:border-blue-500
          hover:bg-blue-50
          min-h-[340px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
        "
            >

                {!image ? (
                    <>

                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition">

                            <CloudUpload
                                size={42}
                                className="text-blue-600"
                            />

                        </div>

                        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                            Upload Image
                        </h3>

                        <p className="mt-3 text-slate-500 max-w-xs">
                            Drag & drop your image here
                            <br />
                            or click to browse files.
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm text-slate-600">

                            <Image size={16} />

                            JPG • PNG • JPEG

                        </div>

                    </>
                ) : (
                    <>

                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">

                            <CheckCircle
                                size={42}
                                className="text-green-600"
                            />

                        </div>

                        <h3 className="mt-5 text-xl font-semibold text-green-700">
                            Image Uploaded
                        </h3>

                        <p className="mt-2 text-slate-600 break-all max-w-sm">
                            {image.name}
                        </p>

                        <button
                            type="button"
                            className="mt-6 text-blue-600 font-medium hover:text-blue-700"
                        >
                            Click to replace image
                        </button>

                    </>
                )}

                <input
                    ref={inputRef}
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                />

            </div>

        </div>
    );
};

export default UploadBox;