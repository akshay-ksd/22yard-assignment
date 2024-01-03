import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { FC, useCallback, useEffect, useState } from 'react'
import styles from './style'
import Header from '../../components/molecules/header'
import colors from '../../components/constants/colors'
import Icons from "react-native-vector-icons/Ionicons"
import EmployeeListModel from '../../components/template/employee-list-model'
import { addNewTeam, addTeamMembersData, getAllTeam, getAllTeamMembers, getAllEmployee, updateTeams } from '../../database/releamInstence';
import { useNavigation } from '@react-navigation/native';
import UserSingleContainer from '../employee-list/user-single-container/user-single-container'
import AddedMembers from './added-members'
const AddEditTemMembers: FC<any> = (props) => {
    const departmentId = props.route.params.departmentId;
    const type = props.route.params.type;
    const team: any = props.route.params.team;

    const [teamName, setTemName] = useState(type == "update" ? team?.name : "")
    const [empList, setEmpList] = useState(false);
    const [lead, setLead] = useState<any>(null);
    const [mode, setMode] = useState<"single" | "multiple">("single")
    const [members, setMembers] = useState<any>([])
    const [allTeam, setAllTeam] = useState<any>([])
    const [updated, setUpdated] = useState(false)
    const navigation = useNavigation();

    const [teamMembers, setTeamMembers] = useState<any>([])

    useEffect(() => {
        const data = getAllTeam();
        setAllTeam(data)

        if (type == "update") {
            let employee = getAllEmployee()
            let leadData = employee.find((x) => x._id.toString() == team?.lead_id);
            setLead(leadData)
        }
    }, [updated])

    useEffect(() => {
        if (type == "update") {
            setMode("multiple")
            let allMembers = getAllTeamMembers()
            let employee = getAllEmployee()
            let filterMembers: any = allMembers.filter((x: any) => x?.team_id.toString() === team?._id.toString());
            filterMembers = filterMembers.map((x: any) => ({
                ...x,
                ...employee.find((y) => y._id?.toString() === x.employee_id?.toString()) // Assuming '_id' and 'id' are the correct properties
            }));
            setTeamMembers(filterMembers)
        }
    }, [updated])

    const closeEmpList = () => {
        setEmpList(false)
    }

    const addTeamLead = () => {
        setMode("single")
        if (lead) {
            Alert.alert(
                'Remove Lead',
                'Are you sure you want to remove the lead?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Remove',
                        onPress: () => {
                            // Handle the removal action here
                            // You can add your setLead and setEmpList logic here
                            setLead(null)
                        },
                    },
                ],
                { cancelable: false }
            );
        } else {
            setEmpList(true)
        }

    }

    const loadTeamLead = (item: employeeType | employeeType[]) => {
        if (mode == "single") {
            setLead(item)
        } else {
            setMembers(item);
        }
    }

    const createTeam = () => {
        if (allTeam.find((x: any) => x?.name == teamName)) {
            Alert.alert("Team Name Already Exist")
            return
        }
        if (teamName == "") {
            Alert.alert("Team Name Is Empty")
            return
        }

        if (lead == null) {
            Alert.alert("Select Team Lead")
            return
        }
        const data = {
            name: teamName,
            department_id: departmentId,
            lead_id: lead?._id,
        }
        const teamData: any = addNewTeam(data);

        if (members?.length) {
            for (let i = 0; i < members.length; i++) {
                const data = {
                    team_id: teamData?._id,
                    employee_id: members[i]?.item?._id,
                }
                addTeamMembersData(data)
            }
        }
        navigation.goBack();
    }

    const addTeamMembers = () => {
        setMode("multiple");
        setEmpList(true)
    }

    const updatedData = useCallback(() => setUpdated((prv) => !prv), [updated])

    const updateTeam = () => {
        if (teamName == "") {
            Alert.alert("Team Name Is Empty")
            return
        }

        if (lead == null) {
            Alert.alert("Select Team Lead")
            return
        }

        const data = {
            _id: team?._id,
            name: teamName,
            department_id: departmentId,
            lead_id: lead?._id,
        }

        updateTeams(data);

        if (members?.length) {
            for (let i = 0; i < members.length; i++) {
                const data = {
                    team_id: team?._id,
                    employee_id: members[i]?.item?._id,
                }
                addTeamMembersData(data)
            }
        }

        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.teamNameView}>
                <TextInput placeholder='Enter Tem Name'
                    style={styles.input}
                    placeholderTextColor={colors.black}
                    value={teamName}
                    onChangeText={(t) => setTemName(t)}
                />
            </View>

            <View style={styles.teamNameView}>
                <TouchableOpacity style={styles.leadBox} onPress={addTeamLead}>
                    <Text style={styles.lead}>{lead ? lead?.name : "Select Team Lead"}</Text>
                    <Icons name={lead ? "close-circle-outline" : "chevron-down-circle-outline"} size={30} color={lead ? "red" : colors.blue} />
                </TouchableOpacity>
            </View>

            <View style={styles.teamNameView}>
                <TouchableOpacity style={styles.leadBox} onPress={addTeamMembers}>
                    <Text style={styles.lead}>{members.length ? `${members.length} members` : "Add Members"}</Text>
                    <Icons name={"add-circle-outline"} size={30} color={colors.blue} />
                </TouchableOpacity>
            </View>

            <View style={styles.createButton}>
                <TouchableOpacity style={styles.button} onPress={type == "update" ? updateTeam : createTeam}>
                    <Text style={styles.bTitle}>{type == "update" ? "Update" : "Create"}</Text>
                </TouchableOpacity>
            </View>

            <AddedMembers teamMembers={teamMembers} updatedData={updatedData} />

            {
                empList && (
                    <EmployeeListModel selection={mode} close={closeEmpList} departmentId={departmentId} addTeamLead={loadTeamLead} members={members} type={type} teamMembers={teamMembers} />
                )
            }
        </View>
    )
}

export default AddEditTemMembers