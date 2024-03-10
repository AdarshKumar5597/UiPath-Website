export default async function handleImageUpload(event, type) {
  const images = Array.from(event.target.files);
  const formData = new FormData();
  for (const img of images) {
    formData.append("image", img);
  }
  console.log(process.env.REACT_APP_BACKEND_BASE_URL);
  const response = await fetch(process.env.REACT_APP_BACKEND_BASE_URL + type, {
    method: "POST",
    body: formData,
  });
}
