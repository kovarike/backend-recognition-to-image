import { Router, request, response } from 'express';
import multer from 'multer';
import prisma from '../db/database';
import { extractNumberFromImage } from '../model/ocr';

const router = Router();
const upload = multer({ dest: 'uploads/' }); 

router.post('/process-image', upload.single('image'), async (req, res) => {
  try {
    console.log('Request received:', req.file);
    const file = req.file;
    if (!file) {
      res.status(400).json({ error: 'Nenhuma imagem enviada.' });
      return;
    }

    // Extrai o número da imagem
    const bibNumber = await extractNumberFromImage(file.path);
    console.log(bibNumber)

    if (!bibNumber) {
      res.status(400).json({ error: 'Não foi possível identificar um número na imagem.' });
      return;
    }

    // Busca o participante no banco de dados
    const participant = await prisma.participant.findUnique({
      where: { bibNumber },
    });

    if (!participant) {
      res.status(404).json({ error: 'Participante não encontrado.' });
      return;
    }

    // Retorna os dados do participante
    res.json({
      id: participant.id,
      name: participant.name,
      bibNumber: participant.bibNumber,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar a imagem.' });
  }
});

export default router;