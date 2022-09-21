import { useState } from 'react';

const DogPics = () => {
  const [image, setImage] = useState('');

  const fetchDogImage = async () => {
    const URL = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(URL);
    const json = await response.json();
    const imageUrl = json.message;
    setImage(imageUrl);
  };

  return (
    <div className="dog-pics">
      <img src={image} alt="dog-picture" aria-hidden />
      <button onClick={fetchDogImage}>🐶</button>
    </div>
  );
};

export default DogPics;
