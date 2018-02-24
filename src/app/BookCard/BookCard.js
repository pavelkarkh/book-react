import React, { Component } from 'react';
import { GridCell } from 'rmwc/Grid';
import {
    Card,
    CardAction,
    CardActions,
    CardActionButtons
  } from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { TextField } from 'rmwc/TextField';

class BookCard extends Component {
    
    state = {
        editCard: false
    }

    handleEditClick(){
        
        if(this.state.editCard) {
            this.props.onEditBookClick({
                id: this.props.book.id,
                title: this.titleInput.value,
                author: this.authorInput.value
            });
        }

        this.setState({ editCard: !this.state.editCard});
    }

    handleRemoveClick() {
        this.props.onRemoveBookClick(this.props.book.id);
    }

    render(){
        
        let cardView = (
            <Card style={{width: '21rem'}}>
            <div style={{padding: '0 1rem 1rem 1rem'}}>
                <Typography use="title" tag="h2">{this.props.book.title}</Typography>
                <Typography
                use="subheading1"
                tag="h3"
                theme="text-secondary-on-background"
                style={{marginTop: '-1rem'}}
                >
                by {this.props.book.author}
                </Typography>
            </div>
            <CardActions>
                <CardActionButtons>
                <CardAction onClick={this.handleEditClick.bind(this)}>Edit</CardAction>
                <CardAction onClick={this.handleRemoveClick.bind(this)}>Remove</CardAction>
                </CardActionButtons>
            </CardActions>
            </Card>
        );

        if (this.state.editCard) {
            cardView = (
                <Card style={{width: '21rem'}}>
                    <div style={{padding: '0 1rem 1rem 1rem'}}>
                        <TextField label="Title" defaultValue={this.props.book.title} inputRef={(input) => this.titleInput = input} />
                        <TextField label="Author" defaultValue={this.props.book.author} inputRef={(input) => this.authorInput = input} />
                    </div>
                    <CardActions>
                        <CardActionButtons>
                        <CardAction onClick={this.handleEditClick.bind(this)}>Save</CardAction>
                        </CardActionButtons>
                    </CardActions>
                </Card>
            );
        }

        return(
            <GridCell span="3">
                {cardView}
            </GridCell>
        );
    }
    
}

export default BookCard;