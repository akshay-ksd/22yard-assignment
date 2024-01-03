import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import colors from '../../constants/colors'
import { useIsFocused } from '@react-navigation/native'
import { getAllEmployee } from '../../../database/releamInstence'
import { SimpleRecycler, DataProvider } from 'react-native-simple-recyclerlistview';
import UserSingleContainer from './user-single-container/user-single-container'
import ScreenRatio from '../../constants/ScreenRatio'

interface propsType {
    selection: "single" | "multiple",
    close: () => void;
    departmentId: number;
    addTeamLead: (item: employeeType | employeeType[]) => void;
    members: any,
    teamMembers: any,
    type: any
}
const EmployeeListModel: FC<propsType> = (props) => {
    const isFocus = useIsFocused()
    const recyclerRef = useRef<SimpleRecycler>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // if(isFocus){
        loadData();
        // }
    }, [isFocus]);

    const loadData = async () => {
        let data: any = getAllEmployee();
        let filterByDep = data.filter((x: any) => x.department_id == props.departmentId)

        if (props?.type == "add") {
            filterByDep = filterByDep.map((x: any) => ({
                ...x,
                isSelected: props.members.some((r: any) => r?.item?._id.toString() === x._id.toString()),
            }));
        } else {
            // Concatenate data2 to data1 while filtering duplicates
            let teamMembersIds = props.teamMembers.map(member => member._id.toString());

            // Filter out entries with matching _id values from filterByDep array
            filterByDep = filterByDep.filter(entry => !teamMembersIds.includes(entry._id.toString()));

            // Print the result
        }


        if (filterByDep) {
            recyclerRef?.current?.loadDataFromApi(filterByDep);
        }
    };

    const selectEmployee = (item: employeeType, index: number) => {
        if (props.selection == "single") {
            props.addTeamLead(item)
            props.close()
        } else {
            const dataList = recyclerRef?.current?.state.dataList;
            const oldData: any = Object.assign([], dataList);
            oldData[index].item.isSelected = !oldData[index].item.isSelected;
            recyclerRef?.current?.setState({
                dataList: oldData,
                list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
                    recyclerRef?.current?.state.dataList
                ),
            });
        }
    }

    const addMembers = () => {
        const selectedMembers: any = recyclerRef?.current?.state.dataList.filter((x: any) => x.item.isSelected == true);
        props.addTeamLead(selectedMembers)
        props.close()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={props.close}>
                <Icons name={"close"} size={28} color={colors.black} />
            </TouchableOpacity>
            {loading ? (
                <View style={styles.center}>
                    <ActivityIndicator size={20} color={colors.black} />
                </View>
            ) : (
                <SimpleRecycler
                    ref={recyclerRef}
                    rowRenderer={(_type, data, index, _extendedState) => {
                        return <UserSingleContainer index={index} item={data?.item} onPress={selectEmployee} selection={props?.selection} />;
                    }}
                    height={ScreenRatio.height}
                    width={ScreenRatio.width}
                    emptyText="No Data Found"
                    emptyTextStyle={styles.emptyText}
                />
            )}
            {
                props.selection == "multiple" && (
                    <View style={styles.createButton}>
                        <TouchableOpacity style={styles.button} onPress={addMembers}>
                            <Text style={styles.bTitle}>Update Members</Text>
                        </TouchableOpacity>
                    </View>
                )
            }

        </View>
    )
}

export default EmployeeListModel