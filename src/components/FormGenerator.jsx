import { useState } from 'react';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';
import Dropdown from '../atoms/Dropdown';
import Checkbox from '../atoms/Checkbox';
import RadioButton from '../atoms/RadioButton';


const FormGenerator = () => {
  const [formFields, setFormFields] = useState([]);

  const addFormField = (type) => {
    const newField = { id: Date.now(), type, label: `${type} Field`, value: '' };
    setFormFields([...formFields, newField]);
  };


  const saveConfig = ()=>{
    localStorage.setItem('form-fields', JSON.stringify(formFields));
    alert('Date Saved in local storage');
  }

  const getConfig = () => {
    if (localStorage.getItem('form-fields')) {
      setFormFields(JSON.parse(localStorage.getItem('form-fields')));
      alert('Date Loaded and saved in state');
    } else {
      alert('No Data Found');
    }
  };
  const removeFormField = (id) => {
    setFormFields(formFields.filter(field => field.id !== id));
  };

  const handleFieldChange = (id, value) => {
    setFormFields(formFields.map(field => {
      if (field.id === id) {
        return { ...field, value };
      }
      return field;
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div>
       <h1>Dynamic Form Generator</h1>
      <button type="button" onClick={() => addFormField('text')}>Add Input Field</button>
        <button type="button" onClick={() => addFormField('textarea')}>Add Textarea Field</button>
        <button type="button" onClick={() => addFormField('dropdown')}>Add Dropdown Field</button>
        <button type="button" onClick={() => addFormField('checkbox')}>Add Checkbox Field</button>
        <button type="button" onClick={() => addFormField('radio')}>Add Radio Button Field</button>
        <button type="button" onClick={saveConfig}>Save Config</button>
        <button type="button" onClick={getConfig}>Get Config</button>
     
      <form onSubmit={handleSubmit} className='form-container'>
        {formFields.map((field , index)=> {
          switch (field.type) {
            case 'text':
              return (
                <Input
                  key={field.id}
                  label={field.label}
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                />
              );
            case 'textarea':
              return (
                <Textarea
                  key={field.id}
                  label={field.label}
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                />
              );
            case 'dropdown':
              return (
                <Dropdown
                  key={field.id}
                  label={field.label}
                  options={['Option 1', 'Option 2', 'Option 3']}
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                />
              );
            case 'checkbox':
              return (
                <Checkbox
                  key={field.id}
                  label={field.label}
                  checked={field.value}
                  onChange={(e) => handleFieldChange(field.id, e.target.checked)}
                />
              );
            case 'radio':
              return (
                <div key={field.id}>
                  <RadioButton
                    label={field.label + " " +index+1}
                    value="Option 1"
                    checked={field.value}
                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                  />
                </div>
              );
            default:
              return null;
          }
        })}
      </form>
    </div>
  );
};

export default FormGenerator;
