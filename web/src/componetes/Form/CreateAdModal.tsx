import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react';
import { Input } from './input';
import { InputSelect } from './InputSelect';
import { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';

import * as Select from '@radix-ui/react-Select';
import { CaretDown } from 'phosphor-react';

interface Game {
  id: string;
  title: string;


}

export function CreateAdModal() {

  const [weekDays, setweekDays] = useState<string[]>([]);

  const [games, setgames] = useState<Game[]>([]);
  const [gameescolhido, setgameescolhido] = useState<string>();
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setgames(response.data);
      })

  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLInputElement);
    const data = Object.fromEntries(formData);

    if(!data.name){
      return;
    }
    try {
      await axios.post(`http://localhost:3333/games/${gameescolhido}/ads`,{
      
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
      
    })

    alert('Anúncio criado com sucesso!')
      
    } catch (error) {
      console.log(error)
      alert('Erro ao criar o anúncio!')
      
    }

    console.log(data);
    console.log(gameescolhido);
    console.log(useVoiceChannel);
    console.log(weekDays);


  }


  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed overflow-hidden' />
      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'> Publique um anúncio</Dialog.Title>
        <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='game' className='font-semibold'>Qual o game?</label>
            <Select.Root onValueChange={setgameescolhido}>
              <Select.Trigger className="bg-zinc-900 py-3 px-4 text-zinc-500 rounded text-sn overflow-hidden 	 inline-flex placeholder:text-zinc-500 ">
                <Select.Value className="w-px" placeholder="Selecione o game que deseja jogar" />
                <Select.Icon className="inset-y-0 relative  w-6 right-0 pl-20">
                  <CaretDown className="w-6 h-6 flex " />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content  className="bg-zinc-900 py-3 px-4 rounded shadow text-sn overflow-hidden text-zinc-500 ">
                  <Select.ScrollUpButton />
                  <Select.Viewport  className="p-1.5 ">
                    {games.map((game) => {
                      return (
                        <Select.Item 
                        key={game.id} value={game.id} 
                        className="hover:bg-violet-600  py-3 px-4 rounded hover:text-white"
                        >
                          <Select.ItemText>{game.title}</Select.ItemText>
                          <Select.ItemIndicator/>
                        </Select.Item>
                      )
                    })}
                    <Select.Separator />
                  </Select.Viewport>
                  <Select.ScrollDownButton />
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Seu nome(ou nickname)</label>
            <Input id='name' name='name' placeholder='Como te chama dentro do game' />
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='yarsPlaying'>Joga a Quantos Anos</label>
              <Input name='yarsPlaying' id='yarsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='discord'>Qual o seu discord</label>
              <Input name='discord' id='discord' type="text" placeholder='Usuario#0000' />
            </div>
          </div>
          <div className='flex  gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='weekDays'>Quando custuma jogar?</label>

              <ToggleGroup.Root
                type="multiple"
                className='grid grid-cols-4 gap-2'
                value={weekDays}
                onValueChange={setweekDays}
              >
                <ToggleGroup.Item value="0" title='Domingo' className={`w-10 h-10 rounded  ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}>D</ToggleGroup.Item>
                <ToggleGroup.Item value="1" title='Segunda' className={`w-10 h-10 rounded  ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                <ToggleGroup.Item value="2" title='Terça' className={`w-10 h-10 rounded  ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>T</ToggleGroup.Item>
                <ToggleGroup.Item value="3" title='Quarta' className={`w-10 h-10 rounded  ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                <ToggleGroup.Item value="4" title='Quinta' className={`w-10 h-10 rounded  ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                <ToggleGroup.Item value="5" title='Sexta' className={`w-10 h-10 rounded  ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                <ToggleGroup.Item value="6" title='Sabado' className={`w-10 h-10 rounded  ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
              </ToggleGroup.Root>


            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor='hourStart'>Qual horário do dia?</label>
              <div className='grid grid-cols-2 gap-2'>
                <Input name='hourStart' id='hourStart' type="time" placeholder='De' />
                <Input name='hourEnd' id='hourEnd' type="time" placeholder='Ate' />
              </div>
            </div>
          </div>
          <label className='mt-2 flex items-center gap-2 text-sm'>
            <Checkbox.Root 
            checked ={useVoiceChannel}
            className='w-6 h-6 rounded bg-zinc-900'
            onCheckedChange={(checked)=>{
              if (checked===true) {
                setUseVoiceChannel(true);
              }else{
                setUseVoiceChannel(false);

              }
            }}
            >
              <Checkbox.Indicator>
                <Check className='w-6 h-6 p-1 text-emerald-400' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Custumo me conectar ao chat de voz

          </label>
          <footer className='mt-4 flex justify-end gap-4'>
            <Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
            <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex item-center gap-3 hover:bg-violet-600'
              type="submit"><GameController size={24} /> Encontrar duo</button>

          </footer>
        </form>
        <Dialog.Close />
      </Dialog.Content>

    </Dialog.Portal>)
}