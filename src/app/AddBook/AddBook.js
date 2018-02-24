import React, { Component } from 'react';
import { GridCell } from 'rmwc/Grid';
import {
    Card,
    CardAction,
    CardActions,
    CardActionButtons
  } from 'rmwc/Card';
  import { TextField } from 'rmwc/TextField';

class AddBook extends Component {
    handleClick() {
        this.props.onAddClick({
            title: this.titleInput.value,
            author: this.authorInput.value
          });
        this.titleInput.value = '';
        this.authorInput.value = '';
    }
    
    render() {
        return(
            <GridCell span="3">
                <Card style={{width: '21rem'}}>
                    <div style={{padding: '0 1rem 1rem 1rem'}}>
                        <TextField label="Title" inputRef={(input) => this.titleInput = input} />
                        <TextField label="Author" inputRef={(input) => this.authorInput = input} />
                    </div>
                    <CardActions>
                        <CardActionButtons>
                        <CardAction onClick={this.handleClick.bind(this)}>Add</CardAction>
                        </CardActionButtons>
                    </CardActions>
                </Card>
            </GridCell>
        );
    }
}

export default AddBook;