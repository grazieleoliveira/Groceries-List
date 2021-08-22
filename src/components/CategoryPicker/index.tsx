import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../global/styles/theme';

import * as S from './styles';

export function CategoryPicker({itemSelect, setItem, categories}) {
  const [showList, setShowList] = useState(false);

  const selectItem = (item) => {
    setItem(item);
    setShowList(false);
  };

  const renderItems = ({item}) => {
    return (
      <S.Touchable onPress={() => selectItem(item)}>
        <S.ContainerList>
          <S.TitleItem>{item.name}</S.TitleItem>
        </S.ContainerList>
      </S.Touchable>
    );
  };

  return (
    <S.Container>
      <S.ContainerPicker>
        <S.Touchable activeOpacity={0.7} onPress={() => setShowList(!showList)}>
          {!itemSelect && (
            <S.PlaceholderText>Select Category</S.PlaceholderText>
          )}
          {itemSelect && <S.ItemText>{itemSelect}</S.ItemText>}
          <Icon
            style={{paddingRight: 16}}
            name={showList ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={30}
            color={theme.colors.secondary30}
          />
        </S.Touchable>
      </S.ContainerPicker>
      {showList && (
        <S.List
          data={categories}
          extraData={categories}
          renderItem={renderItems}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </S.Container>
  );
}
