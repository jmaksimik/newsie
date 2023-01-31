import {useState} from 'react';

import {Form, Segment, Button} from 'semantic-ui-react';

export default function AddTagForm() {
    const [title, setTitle] = useState('');

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
} 