import Realm from 'realm';
class Employee extends Realm.Object {
    public static schema: Realm.ObjectSchema = {
        name: 'employee',
        primaryKey: '_id', // Specify a primary key for the Invoice model
        properties: {
            name: 'string',
            _id: 'objectId',
            phone_number: 'int',
            email_id: 'string',
            department_id: 'int',
            isCeo: { type: 'bool', default: false },
        },
    };
}

class Team extends Realm.Object {
    public static schema: Realm.ObjectSchema = {
        name: 'team',
        primaryKey: '_id', // Specify a primary key for the Invoice model
        properties: {
            name: 'string',
            _id: 'objectId',
            department_id: 'int',
            lead_id: 'objectId',
        },
    };
}

class TeamMember extends Realm.Object {
    public static schema: Realm.ObjectSchema = {
        name: 'team_member',
        properties: {
            team_id: 'objectId',
            employee_id: 'objectId',
        },
    };
}

export { Employee,Team,TeamMember };