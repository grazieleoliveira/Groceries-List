import React, {useState} from 'react';

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
      <S.Label>Categoria</S.Label>
      <S.ContainerPicker>
        <S.Touchable onPress={() => setShowList(!showList)}>
          <S.PlaceholderText>
            {itemSelect || 'Escolha Categoria'}
          </S.PlaceholderText>
          {/* <S.IconPicker name={showList ? 'angle-up' : 'angle-down'} /> */}
        </S.Touchable>

        {showList && (
          <S.List
            data={categories}
            extraData={categories}
            renderItem={renderItems}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </S.ContainerPicker>
    </S.Container>
  );
}
