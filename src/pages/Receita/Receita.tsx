import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { CardProps } from "../../Types/CardTipos";
import { BuscarReceitas } from "../../Services/Services";
import Header from "../../components/Header/Header";

export default function Receita() {
  const voltar = useNavigate();
  const { link } = useParams();
  const [receita, setReceita] = useState<CardProps | null>(null);

  useEffect(() => {
    document.title = `Receita | ${receita?.nome}`;
  });

  useEffect(() => {
    BuscarReceitas().then((data) => {
      const encontrado = data.find((p: CardProps) => p.link === link);
      setReceita(encontrado || null);
    });
  }, [link]);

  const formatarTempo = (tempo: string | undefined): string => {
    return tempo ? tempo.replace("min", " minutos").replace("h", " hora(s)") : "";
  };

  return (
    <>
      <Header titulo='Sabores do Front' />
      <Link
        to=''
        onClick={(e) => {
          e.preventDefault();
          voltar(-1);
        }}>
        <img src='/icons/chevron-left-branco.svg' className='absolute left-10 top-7 z-20 h-8' />
      </Link>
      <div className='relative h-96 flex items-center justify-center'>
        <div className='absolute inset-0 bg-black opacity-30 z-10' />
        <img src={receita?.src} className='w-full h-96 object-cover z-0' />
      </div>
      <div className='flex flex-col px-3 gap-12 py-12'>
        <div className='px-10 flex justify-between'>
          <h1 className='text-6xl text-[#1F2937] font-bold'>{receita?.nome}</h1>
          <div className='flex items-center gap-2.5'>
            <img src='/icons/clock-amarelo.svg' className='h-7 mt-1' />
            <h3 className='text-[#F59E0B] text-4xl font-semibold text-end'>{formatarTempo(receita?.tempo)}</h3>
          </div>
        </div>
        <section className='px-10'>
          <div className='px-2.5 flex flex-col gap-3'>
            <h2 className='font-semibold italic text-5xl text-[#4B5563]'>Ingredientes</h2>
            <ul className='px-5 text-[#6B7280] text-2xl font-medium italic'>
              {receita?.ingredientes?.map((ingrediente) => (
                <li className='list-disc'>{ingrediente}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className='px-10'>
          <div className='px-2.5 flex flex-col gap-3'>
            <h2 className='font-semibold italic text-5xl text-[#4B5563]'>Modo de Preparo</h2>
            <ul className='px-5 text-[#6B7280] text-2xl font-medium italic'>
              {receita?.modoPreparo?.map((etapa) => (
                <li className='list-disc'>{etapa}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
