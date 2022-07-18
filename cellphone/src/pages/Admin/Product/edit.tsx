import { message } from 'antd';
import React, { useState } from 'react';
import { upload } from '../../../api/images';

const EditProduct: React.FC = () => {
  const [previewImage, setPreviewImage] = useState('')
  const handleChangeImage = (e: any) => {
    console.log(e.target.files)
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      uploadImage(reader.result)
    }
  }

  const uploadImage = async (base64Image: string) => {
    try {
      const data = await upload(base64Image)
      console.log(data)    
    } catch(err) {
      console.log(err)
      message.error("upload image fail")
    }
    
  }
  return (
    <>
      <input
        type="file"
        accept='image/png, image/jpg, image/jpeg' onChange={handleChangeImage} />
      <img src={previewImage} alt="" />
    </>
  );
};

export default EditProduct;