import React from "react";
import axios from "axios";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";

class UploadImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null, imagePreviewUrl: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    let data = this.state;
    console.log("handle uploading-", data);
    axios
      .post("http://localhost:5050/imgupload", data)
      .then(response => {
        alert("image added with success");
      })
      .then(() => window.location.reload(true))
      .catch(error => {
        console.log(error);
      });
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let selectedFile = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: selectedFile,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(selectedFile);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = <img src={imagePreviewUrl} />;
    } else {
      imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      //     <input name="file" type="file"
      //  class="file-upload" data-cloudinary-field="image_id"
      //  data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/>

      <div className="previewComponent">
        <CloudinaryContext cloudName="lanur">
          <div>
            <Image publicId="o9vv0q0kfyn5jbjst9gm" width="50" />
          </div>
        </CloudinaryContext>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={e => this.handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={e => this.handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>

        <div className="imgPreview">{imagePreview}</div>
      </div>
    );
  }
}

export default UploadImg;
