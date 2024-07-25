import { Button, Image, SimpleGrid, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import axios from "axios";
import { useState } from "react";
import { getPresignedUrl } from "../api/upload";

const UploadPage = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = async () => {
    // NOTE - files 상태를 순회하면서 presigned URL을 요청하고, 해당 URL로 파일을 업로드합니다.

    files.forEach(async (file) => {
      const presignedUrl = await getPresignedUrl(file.name);

      const response = await axios.put(presignedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      console.log(response);
    });
  };

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  return (
    <section className="login-section">
      <div>
        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onDrop={(files) => setFiles((prevState) => [...prevState, ...files])}
        >
          <Text ta="center">Drop images here</Text>
        </Dropzone>

        <SimpleGrid
          cols={{ base: 1, sm: 4 }}
          mt={previews.length > 0 ? "xl" : 0}
        >
          {previews}
        </SimpleGrid>
      </div>
      <Button variant="filled" fullWidth onClick={handleUpload}>
        Upload
      </Button>
    </section>
  );
};

export default UploadPage;
