import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clearDatabase() {
  // Limpar todos os participantes
  await prisma.participant.deleteMany({});
  console.log('All participants have been deleted.');

  // Aqui, você pode adicionar outras tabelas que deseja limpar, por exemplo:
  // await prisma.anotherTable.deleteMany({});
}

async function main() {
  // Limpar o banco de dados antes de criar os participantes
  await clearDatabase();

  // Criação de participantes de exemplo
  const participants = await prisma.participant.createMany({
    data: [
      {
        name: 'John Doe',
        bibNumber: '3000',
      },
      {
        name: 'Jane Smith',
        bibNumber: '11',
      },
      {
        name: 'Bob Johnson',
        bibNumber: '5555',
      },
    ],
  });

  console.log('Participants seeded:', participants);
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
