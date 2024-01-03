import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './style'
import UserSingleContainer from '../user-single-container/user-single-container'
import Button from '../../../components/molecules/button/button'
import { useNavigation } from '@react-navigation/native'
import { getAllEmployee } from '../../../database/releamInstence';
import { SimpleRecycler } from 'react-native-simple-recyclerlistview';
import colors from '../../../components/constants/colors'
import ScreenRatio from '../../../components/constants/ScreenRatio';
import { useIsFocused } from '@react-navigation/native'

const List = () => {
  const navigation: any = useNavigation()
  const recyclerRef = useRef<SimpleRecycler>(null);
  const [loading, setLoading] = useState(false);
  const isFocus = useIsFocused()

  useEffect(() => {
    // if(isFocus){
    loadData();
    // }
  }, [isFocus]);

  const loadData = async () => {
    let data: any = getAllEmployee();

    if (data) {

      recyclerRef?.current?.loadDataFromApi(data);

    }
  };
  const addEditEmployee = () => {
    navigation.navigate("AddEditEmployee", { type: "add" })
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size={20} color={colors.black} />
        </View>
      ) : (
        <SimpleRecycler
          ref={recyclerRef}
          rowRenderer={(_type, data, index, _extendedState) => {
            return <UserSingleContainer index={index} item={data?.item} />;
          }}
          height={ScreenRatio.height}
          width={ScreenRatio.width}
          emptyText="No Data Found"
          emptyTextStyle={styles.emptyText}
        />
      )}
      <Button type={"add"} onPress={addEditEmployee} />
    </View>
  )
}

export default List