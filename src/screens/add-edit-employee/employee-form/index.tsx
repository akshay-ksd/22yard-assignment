import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import styles from './styles';
import DepartmentList from '../../../components/organization/department-list';
import { addNewEmployee, updateEmployee } from '../../../database/releamInstence';
import { useNavigation } from '@react-navigation/native';
const departmentData: any = [
  { id: 1, name: "CEO" },
  { id: 2, name: "Staff/HR" },
  { id: 3, name: "Engineering" },
  { id: 4, name: "Design" }
]
const EmployeeForm: FC<any> = ({ type, data }) => {
  const [name, setName] = useState<string>(type == "add" ? "" : data?.name);
  const [email, setEmail] = useState<string>(type == "add" ? "" : data?.email_id);
  const [phone, setPhone] = useState<string>(type == "add" ? "" : data?.phone_number.toString());
  const [department, setDepartment] = useState<string>(type == "add" ? "Select Department" : departmentData.find((x: any) => x.id == data?.department_id)?.name);
  const [depId, setDepId] = useState<any>(data?.department_id)

  const navigation = useNavigation()


  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePhoneChange = (text: string) => {
    setPhone(text);
  };

  const isEmailValid = (email: string) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneValid = (phone: string) => {
    // Regular expression for basic phone number validation (numeric, 10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = () => {
    if (!isEmailValid(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!isPhoneValid(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
      return;
    }

    if (department == "Select Department") {
      Alert.alert('Select Department', 'Please select department.');
      return;
    }

    // Your logic to submit the form data
    const data = {
      name: name,
      phone_number: parseInt(phone),
      email_id: email,
      department_id: parseInt(depId),
    }
    addNewEmployee(data)
    navigation.goBack()
  };

  const selectDepartment = (d: string, id: number | undefined) => {
    setDepartment(d);
    setDepId(id)
  };

  const updateData = () => {
    const emp = {
      _id:data?._id,
      name: name,
      phone_number: parseInt(phone),
      email_id: email,
      department_id: parseInt(depId),
    }
    updateEmployee(emp)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text>Employee Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={handleNameChange}
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={phone}
        onChangeText={handlePhoneChange}
        keyboardType="numeric"
        placeholderTextColor="gray"
      />
      <DepartmentList dep={department} selectDepartment={selectDepartment} />
      <TouchableOpacity style={styles.button} onPress={type == "add" ?handleSubmit:updateData}>
        <Text style={styles.title}>{type == "add" ? "Create" : "Update"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmployeeForm;
