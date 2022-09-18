import * as Select from '@radix-ui/react-Select';
import { CaretDown } from 'phosphor-react';
import { useState, useEffect } from 'react';

interface Game {
  id: string;
  title: string;
 

}

export function InputSelect(){

  

    const [games, setgames] = useState<Game[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3333/games')
        .then(response => response.json())
        .then(data => {
          setgames(data);
        })
  
    }, []);


  return(
    <Select.Root>
    <Select.Trigger className="bg-zinc-900 py-3 px-4 text-zinc-500 rounded text-sn 	 inline-flex placeholder:text-zinc-500 ">
      <Select.Value className="w-px"  placeholder="Selecione o game que deseja jogar"/>
      <Select.Icon className="inset-y-0 relative  w-6 right-0 pl-20">
        <CaretDown className="w-6 h-6 flex "/>
        </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="bg-zinc-900 py-3 px-4 rounded shadow text-sn text-zinc-500 ">
        <Select.ScrollUpButton />
        <Select.Viewport className="p-1.5 ">
{games.map((game) =>{
  return(
    <Select.Item key={game.id} value={game.id} className="hover:bg-violet-600  py-3 px-4 rounded hover:text-white">
            <Select.ItemText>{game.title}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
  )
})}
          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
  )
}