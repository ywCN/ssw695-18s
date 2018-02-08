import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const AddProject = () => {
    return (
        <div>
            <div>AddProject</div>
            <Button
                animated
                as={Link}
                to="/myportfolio"
                onClick={() => console.log('add clicked')}
            >
                <Button.Content visible>Add</Button.Content>
                <Button.Content hidden>
                    <Icon name="right arrow" />
                </Button.Content>
            </Button>
        </div>
        // TODO: add saveProject action callback
    );
};

export default AddProject;
