import {useState} from 'react';

import {Form, Segment, Button} from 'semantic-ui-react';

export default function AddTagForm({handleAddTag}) {
    const [title, setTitle] = useState('');

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleAddTag(title);
    }

    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    className='form-control'
                    name='title'
                    value={title}
                    placeholder='Add Tag'
                    onChange={handleChange}
                    required
                />
                <Button type='submit' className='btn'>
                    Save
                </Button>
            </Form>
        </Segment>
    )
} 