interface departmentType {
    id: number;
    name: string;
}

interface employeeType {
    name: string,
    _id: objectId,
    phone_number: int,
    email_id: string,
    department_id: int,
    isCeo: bool
}