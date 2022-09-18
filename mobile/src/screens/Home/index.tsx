import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect, useState } from 'react';  
import { View, Image, FlatList } from 'react-native';

import { SafeAreaView} from 'react-native-safe-area-context';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Backgrount } from '../../componetes/Backgrount';

import { GameCard, GameCardProps } from '../../componetes/GameCard';

import { Heading } from '../../componetes/Heading';

import { styles } from './styles';


export function Home() {

  const [games, setgames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl}:GameCardProps){

    navigation.navigate('game', {id, title, bannerUrl});

  }

  useEffect(()=>{
    fetch('http://192.168.100.7:3333/games')
    .then(response=>response.json())
    .then(data => {
      setgames(data);
    })

  },[]);
  return (
    <Backgrount>
    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title="Encontre seu Duo!"
        subtitle="Selecione o game que deseja jogar ..."

      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard

            data={item}
            onPress={()=> handleOpenGame(item)}

          />

        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}

      />


    </SafeAreaView>
    </Backgrount>
  );
}