import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const AddProject = () => {
    return (
        <div>
            <div>AddProject</div>
            <div>
                <Button
                    as={Link}
                    animated
                    to="/myportfolio"
                    onClick={() => console.log('add clicked')}
                    className="waves-effect waves-light btn"
                >
                    <Button.Content visible>Add</Button.Content>
                    <Button.Content hidden>
                        <Icon name="right arrow" />
                    </Button.Content>
                </Button>
            </div>
        </div>
        // TODO: add saveProject action callback
    );
};

export default AddProject;
