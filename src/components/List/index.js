import React from 'react';
import './index.css';
import ListItem from '../ListItem';

// List/index.js
class List extends React.Component {
    render() {
        const {
            notes,
            activeId,
            onListItemClick // 전달받은 이벤트 핸들러
        } = this.props;
        return (
            <div className="list">
                {notes.map((item) => {
                    const { id, title, contents } = item;
                    return (
                        <ListItem
                            key={id}
                            id={id}
                            active={id === activeId}
                            title={title}
                            contents={contents}
                            onClick={() => onListItemClick(id)} // 메소드 전달
                        />
                    );
                })}
            </div>
        );
    }
}

export default List;