import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PreviewDoc() {
  const location = useLocation();
  const [fileUrl, setFileUrl] = React.useState(null);
  const [error, setError] = React.useState(null);

  const fetchFile = async () => {
    const queryParams = new URLSearchParams(location.search);
    const url_file = queryParams.get("file"); // Captura o parâmetro "file" da URL
    const filename = url_file.split("\\").pop();

    try {
      const response = await axios({
        url: "http://localhost:3001/previewDocument",
        method: "GET",
        params: {
          _filenameContrato: url_file,
        },
        responseType: "blob", // Recebe o arquivo como blob
      });

      // Verifica o tipo de arquivo para pré-visualização
      const fileType = response.data.type;

      if (fileType === "application/pdf" || fileType.startsWith("image/")) {
        // Cria uma URL temporária para pré-visualização
        const previewUrl = URL.createObjectURL(response.data);
        setFileUrl(previewUrl);
      } else {
        setError("O arquivo não é um PDF ou uma imagem suportada.");
      }
    } catch (error) {
      console.error("Erro ao buscar o arquivo: ", error);
    }
  };

  React.useEffect(() => {
    fetchFile();
  }, [location.search]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : fileUrl ? (
        <iframe
          src={fileUrl}
          title="Document Preview"
          style={{ width: "100%", border: "none", height: "99.3vh" }}
        ></iframe>
      ) : (
        <p>Carregando o arquivo...</p>
      )}
    </div>
  );
}
export default PreviewDoc;
