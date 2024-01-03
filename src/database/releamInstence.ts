import Realm from 'realm';
import { Employee, Team, TeamMember } from './schema';
import { Alert } from 'react-native';

interface Schema {
    invoiceDate: Date,
    refNumber: string,
    entryType: string,
    text: string,
    description: string,
    symbol: string,
    amount: number,
}

const getRealmInstance = (): Realm => {
    return new Realm({ schema: [Employee, Team, TeamMember] });
};

const addNewEmployee = (employee: any) => {
    employee._id = new Realm.BSON.ObjectId()
    const realm = getRealmInstance();
    try {
        realm.write(() => {
            realm.create('employee', employee);
        });
    } catch (error) {
        console.error('Error saving invoice to Realm:', error);
    } finally {
        // realm.close();
    }
};

const updateEmployee = (updatedTeamData: any) => {
    const realm = getRealmInstance();

    try {
        realm.write(() => { 
            const team = realm.objects('employee').filtered('_id = $0', updatedTeamData._id)[0];

            if (team) {
                // Update properties of the team object
                team.name = updatedTeamData.name;
                team.phone_number = updatedTeamData.phone_number;
                team.email_id = updatedTeamData.email_id;
                team.department_id = updatedTeamData.department_id;
               
                // Add more properties as needed

                // You can also update the entire team object if needed
                // realm.create('team', updatedTeamData, true /* update */);
            } else {
                console.error('Team not found for updating');
            }
        });
    } catch (error) {
        console.error('Error updating team in Realm:', error);
    } finally {
        // realm.close();
    }
};

const getAllEmployee = (): any[] => {
    const realm = getRealmInstance();
    const allInvoices = realm.objects<any>('employee');

    // Convert the sorted Realm Results to an array
    const invoicesArray = Array.from(allInvoices);

    return invoicesArray;
};

const addNewTeam = (team: any) => {
    let teamData
    team._id = new Realm.BSON.ObjectId()
    const realm = getRealmInstance();

    try {
        realm.write(() => {
            teamData = realm.create('team', team);
        });
    } catch (error) {
        console.error('Error saving invoice to Realm:', error);
    } finally {
        // realm.close();
    }

    return teamData
};

const updateTeams = (updatedTeamData: any) => {
    const realm = getRealmInstance();

    try {
        realm.write(() => {
            const team = realm.objects('team').filtered('_id = $0', updatedTeamData._id)[0];

            if (team) {
                // Update properties of the team object
                team.name = updatedTeamData.name;
                team.lead_id = updatedTeamData.lead_id;
                // Add more properties as needed

                // You can also update the entire team object if needed
                // realm.create('team', updatedTeamData, true /* update */);
            } else {
                console.error('Team not found for updating');
            }
        });
    } catch (error) {
        console.error('Error updating team in Realm:', error);
    } finally {
        // realm.close();
    }
};

const getAllTeam = (): any[] => {
    const realm = getRealmInstance();
    const team = realm.objects<any>('team');

    // Convert the sorted Realm Results to an array
    const teamList = Array.from(team);

    return teamList;
};

const addTeamMembersData = (teamMembers: any) => {

    let teamData
    const realm = getRealmInstance();
    const teamMemberToDelete = realm.objects('team_member').filtered('employee_id == $0 AND team_id == $1', teamMembers?.employee_id, teamMembers?.team_id)[0];
    if(teamMemberToDelete||teamMemberToDelete){
        Alert.alert("This Employee is already added to this team")
        return false
    }else{
        try {
            realm.write(() => {
                teamData = realm.create('team_member', teamMembers);
            });
        } catch (error) {
            console.error('Error saving invoice to Realm:', error);
        } finally {
            // realm.close();
        }
        return teamData
    }
};

const getAllTeamMembers = (): any[] => {
    const realm = getRealmInstance();
    const team_member = realm.objects<any>('team_member');

    // Convert the sorted Realm Results to an array
    const teamList = Array.from(team_member);

    return teamList;
};

const deleteTeamMemberData = (teamMemberId: any,team_id:any) => {
    const realm = getRealmInstance();
    try {
        realm.write(() => {
            const teamMemberToDelete = realm.objects('team_member').filtered('employee_id == $0 AND team_id == $1', teamMemberId, team_id)[0];
            
            if (teamMemberToDelete) {
                realm.delete(teamMemberToDelete);
                console.log('Team member deleted successfully.');
            } else {
                console.error('Team member not found for deletion.');
            }
        });
    } catch (error) {
        console.error('Error deleting team member from Realm:', error);
    } finally {
        // realm.close(); // Uncomment if you want to close the realm after the operation
    }
    
};


export { addNewEmployee, getAllEmployee, addNewTeam, getAllTeam, addTeamMembersData, getAllTeamMembers, deleteTeamMemberData, updateTeams,updateEmployee }

