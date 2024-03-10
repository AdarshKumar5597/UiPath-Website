export default async function handleImageUpload(image) {
  const images = Array.from(image);
  const formData = new FormData();
  for (const img of images) {
    formData.append("image", img);
  }
  console.log(process.env.REACT_APP_BACKEND_BASE_URL);
  const response = await fetch(
    process.env.REACT_APP_BACKEND_BASE_URL + "upload",
    {
      method: "POST",
      body: formData,
    }
  ).then((data) => {
    return data.json();
  });
  return response;
}
