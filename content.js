// JavaScript code here
document.getElementById("image-upload").addEventListener("change", function (e) {
    const imagePreview = document.getElementById("image-preview");
    imagePreview.innerHTML = '';
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const img = document.createElement("img");
        img.src = reader.result;
        imagePreview.appendChild(img);
      }
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById("video-upload").addEventListener("change", function (e) {
    const videoPreview = document.getElementById("video-preview");
    videoPreview.innerHTML = '';
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const video = document.createElement("video");
        video.src = reader.result;
        video.controls = true;
        videoPreview.appendChild(video);
      }
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById("publish-btn").addEventListener("click", function () {
    const blogText = document.getElementById("blog-text").value;
    const imagePreview = document.getElementById("image-preview").innerHTML;
    const videoPreview = document.getElementById("video-preview").innerHTML;
  
    // Add logic to handle publishing the blog with the text, images, and videos.
    console.log("Blog Text:", blogText);
    console.log("Image Preview:", imagePreview);
    console.log("Video Preview:", videoPreview);
  });
  