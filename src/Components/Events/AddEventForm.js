import { useState } from 'react';
import DatePicker from 'react-datepicker';


const AddEventForm = () => {
    const [startDate, setStartDate] = useState (new Date())

    return (
        <>
            <p>This is the add event form</p>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </>
    )
};

export default AddEventForm;