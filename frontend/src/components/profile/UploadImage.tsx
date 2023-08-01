import { useState } from "react";
import imgUpload from "../../assets/icons/icon-upload-image.svg";

const UploadImage = ({ onImageSelect }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    onImageSelect(selectedImage);

    const imageURL = URL.createObjectURL(selectedImage);
    setImagePreview(imageURL);
  };

  return (
    <section className="m-auto mb-5 flex h-auto w-[92%] flex-col gap-4 rounded-xl bg-[#FAFAFA] p-5 sm:w-[92%] md:h-[233px] md:w-[92%] md:flex-row md:items-center md:justify-between">
      <h1 className="whitespace-nowrap leading-[150%] text-[#737373]">
        Profile Picture
      </h1>
      <label
        className="flex h-[193px] w-[193px] shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-[#EFEBFF] bg-cover bg-center bg-no-repeat font-semibold leading-[150%] text-[#633CFF]"
        htmlFor="inputFile"
        style={
          {
            // backgroundImage: `url(${imgUpload})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "contain",
            // width: "200px",
            // height: "200px",
            // display: "block",
            // margin: "auto",
          }
        }
      >
        <input
          id="inputFile"
          type="file"
          onChange={handleImage}
          accept="image/png, image/jpeg"
          name="profileAvatar"
          className="hidden"
        />
        {/* <img src={imgUpload} className="w-10 object-contain" /> */}
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Profile Preview"
            className="h-48 w-48 rounded-xl object-contain"
          />
        ) : (
          <img
            src={imgUpload}
            alt="Upload Icon"
            className="w-10 object-contain"
          />
        )}
        {imagePreview ? "" : "+ Upload Image"}
      </label>
      <p
        className="w-[215px] text-xs leading-[150%] text-[#737373]"
        // ref={"messageRef"}
      >
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </section>
  );
};

export default UploadImage;
