import { useState } from "react";
import "./Post.css"

export default function Post() {
  const [Post, setPost] = useState({
    name: "",
    location: "",
    description: ""
  });
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setPost({ ...Post, [name]: value })
  }
  const storingdata = async (e) => {
    e.preventDefault()
    const { name, location, description } = Post;
    await fetch("/api/upload", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name, location, description
      })
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  return (<div className='centre'>
    <form method="post">
      <input type="file" name="file" id="file" placeholder='Upload image' value="" /><br />
      <input type="text" name="name" placeholder='name' value="" onChange={handleInputs} />
      <input type="text" name="location" placeholder='location' value="" onChange={handleInputs} />
      <br />
      <input type="text" name="decription" id="description" placeholder='description' onChange={handleInputs} /><br />
      <button onClick={storingdata}>Post</button>
    </form>
  </div>);
}
