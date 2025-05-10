import './App.css';
import ImportokWizard from '@importok/react';
import React from 'react';


function App() {
  const fields = {
    first_name: {
      label: 'First Name',
      transformers: 'capitalize|trim'
    },
    last_name: {
      label: 'Last Name',
      validators: 'required',
      transformers: 'capitalize|trim'
    },
    email: {
      label: 'Email',
      validators: 'email|required',
      transformers: 'lowercase|trim'
    },
    phone: {
      label: 'Phone',
      transformers: 'trim'
    },
    country: {
      label: 'Country',
      transformers: 'trim|as:countries',
      validators: 'in:countries',
      provider: 'countries'
    },
  };

  const saveRecord = async function (record, meta) {
    // Simulate a network request for 100ms
    await new Promise(resolve => setTimeout(resolve, 200));

    if (record.rowIndex % 5 === 0) {
      // Simulate a failure for every 5th record
      record.markAsRejected();
    }
  };

  return (
    <div className="App" style={{margin: '2rem'}}>
      <ImportokWizard
        title="ImportOK Example for React"
        fields={fields}
        sampleFile="/sample.csv"
        onRecordReady={saveRecord}
      />
    </div>
  );
}

export default App;
