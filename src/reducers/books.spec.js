import books from './books';

describe('books redusers', () => {
    
    it('handle init', () => {
        expect(
            books(undefined, {})
        ).toEqual([]);
    });

    it('handle ADD_BOOK', () => {
        expect(
            books([], {
                type: 'ADD_BOOK',
                payload: {
                    id: 0,
                    title: 'Test Title',
                    author: 'Test Author'
                }
            })
        ).toEqual([
            {
                id: 0,
                title: 'Test Title',
                author: 'Test Author'
            }
        ]);

        expect(
            books([{
                id: 0,
                title: 'Test Title',
                author: 'Test Author'
            }], {
                type: 'ADD_BOOK',
                payload: {
                    id: 1,
                    title: 'Test Title',
                    author: 'Test Author'
                }
            })
        ).toEqual([
            {
                id: 1,
                title: 'Test Title',
                author: 'Test Author'
            },
            {
                id: 0,
                title: 'Test Title',
                author: 'Test Author'
            }
        ]);

        expect(
            books([{
                id: 1,
                title: 'Test Title',
                author: 'Test Author'
            },
            {
                id: 0,
                title: 'Test Title',
                author: 'Test Author'
            }], {
                type: 'ADD_BOOK',
                payload: {
                    id: 2,
                    title: 'Test Title',
                    author: 'Test Author'
                }
            })
        ).toEqual([
            {
                id: 2,
                title: 'Test Title',
                author: 'Test Author'
            },
            {
                id: 1,
                title: 'Test Title',
                author: 'Test Author'
            },
            {
                id: 0,
                title: 'Test Title',
                author: 'Test Author'
            }
        ]);
    });

    it('handle EDIT_BOOK', () => {
        expect(
            books(
                [{
                    id: 0,
                    title: 'Test Title',
                    author: 'Test Author'
                }], 
                {
                    type: 'EDIT_BOOK',
                    payload: {
                        id: 0,
                        title: 'Test Title Edit',
                        author: 'Test Author'
                    }
                })
        ).toEqual(
            [{
            id: 0,
            title: 'Test Title Edit',
            author: 'Test Author'
        }]);

        expect(
            books([{
                id: 0,
                title: 'Test Title',
                author: 'Test Author'
            }], 
            {
            type: 'EDIT_BOOK',
            payload: {
                id: 0,
                title: 'Test Title',
                author: 'Test Author Edit'
                }
            })
        ).toEqual([{
            id: 0,
            title: 'Test Title',
            author: 'Test Author Edit'
        }]);
    });

    it('handle REMOVE_BOOK', () => {

        expect(
            books([
                {
                    id: 1,
                    title: 'Test Title',
                    author: 'Test Author'
                },
                {
                    id: 0,
                    title: 'Test Title',
                    author: 'Test Author'
                }
            ], {
                type: 'REMOVE_BOOK',
                payload: 1
            }
        )
        ).toEqual([
            {
                id: 0,
                title: 'Test Title',
                author: 'Test Author'
            }
        ]);

    });

});