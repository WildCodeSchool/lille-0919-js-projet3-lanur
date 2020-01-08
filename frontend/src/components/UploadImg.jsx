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
    this.state = {
      file: null,
      imagePreviewUrl: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = new FormData();
    data.append("monfichier", this.state.file);
    axios
      .post("http://localhost:5050/imgupload", data)
      .then(response => {
        console.log(response.data);
        alert("image added with success");
      })
      .then(() => window.location.reload(true))
      .catch(error => {
        console.log(error);
      });
  }

  handleImageChange(e) {
    e.preventDefault();
    console.log(e.target.files);
    console.log("----------------------");

    let reader = new FileReader();
    let selectedFile = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: selectedFile,
        imagePreviewUrl: reader.result
      });
      console.log(this.state.file);
    };
    console.log(e.target.files[0]);
    console.log("----------------------");

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
      // code to use to call an image from cloudinary:
      // <CloudinaryContext cloudName="lanur">
      //           <div>
      //             <Image publicId="o9vv0q0kfyn5jbjst9gm" width="50" />
      //           </div>
      //         </CloudinaryContext>

      <div className="previewComponent">
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
