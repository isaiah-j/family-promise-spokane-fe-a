import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { axiosWithAuth } from '../../../api/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import NoteIcon from '@material-ui/icons/Note';
import PeopleIcon from '@material-ui/icons/People';
import InfoIcon from '@material-ui/icons/Info';
import { tableIcons } from '../../../utils/tableIcons';
import FlagIcon from '@material-ui/icons/Flag';

const Guests = () => {
  const [state, setState] = useState({
    columns: [
      { title: 'First', field: 'first_name', type: 'hidden' },
      { title: 'Last ', field: 'last_name' },
      { title: 'DOB', field: 'dob', type: 'date' },
    ],
    data: [
      {
        first_name: 'Richter',
        last_name: 'Belmont',
        dob: new Date(),
        flag_level: 1,
      },
      {
        first_name: 'Trevor',
        last_name: 'Belmont',
        dob: new Date(),
        flag_level: 2,
      },
      {
        first_name: 'Simon',
        last_name: 'Belmont',
        dob: new Date(),
        flag_level: 3,
      },
    ],
  });

  const history = useHistory();

  return (
    <div className="guest-table-container">
      <div className="guest-table">
        <MaterialTable
          options={{
            exportButton: true,
            rowStyle: rowData => ({
              backgroundColor:
                rowData.flag_level == 2
                  ? 'rgba(255, 255, 0, 0.419)'
                  : rowData.flag_level == 3
                  ? 'rgba(255, 0, 0, 0.418)'
                  : 'white',
            }),
          }}
          icons={tableIcons}
          title="Guests"
          columns={state.columns}
          data={state.data}
          actions={[
            {
              icon: PeopleIcon,
              tooltip: 'Family Members',
              onClick: (event, rowData) => {
                // Do save operation
                history.push(`/family/${rowData.fam_id}/members`);
              },
            },
            {
              icon: NoteIcon,
              tooltip: 'Notes',
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: FlagIcon,
              tooltip: 'Flag Guest',
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: InfoIcon,
              tooltip: 'More Info',
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
          ]}
          editable={
            {
              // onRowRedirect: (newData) =>
              //     new Promise((resolve) => {
              //         setTimeout(() => {
              //             resolve();
              //             setState((prevState) => {
              //                 const data = [...prevState.data];
              //                 data.push(newData);
              //                 return { ...prevState, data };
              //             });
              //         }, 600);
              //     }),
            }
          }
        />
      </div>
    </div>
  );
};

export default Guests;
