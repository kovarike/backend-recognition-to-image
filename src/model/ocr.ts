import { createWorker } from 'tesseract.js';
import lan from './languages';

export const extractNumberFromImage = async (imagePath: string): Promise<string> => {
  // Criação do worker de forma assíncrona
  const worker = await createWorker();

  // Carregar os recursos necessários
  await worker.load();
  // const langPath = 'https://tesseract.projectnaptha.com/tessdata/'
  // await worker.reinitialize({
  //   langPath: langPath, // Caminho para os arquivos de idioma
  //   lang: 'por', // Idioma a ser utilizado
  // });
  // Define a whitelist de caracteres permitidos (apenas números)
  await worker.setParameters({
    tessedit_char_whitelist: '0123456789', // Apenas números
  });

  // Realiza o OCR e obtém os dados
  const { data } = await worker.recognize(imagePath);

  // Finaliza o worker
  await worker.terminate();

  // Remove todos os caracteres não numéricos
  const extractedText = data.text.replace(/\D/g, '');
  return extractedText;
};
