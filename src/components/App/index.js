import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';

/**
 * App/index.js
 *
 * state란 UI의 상태를 기록하는 데이터입니다. 일반적으로 버튼의 활성화 상태, input의 입력 값, 체크박스 체크 여부 등의 상태를 관리힙니다.
 *
 * props는 상위 컴포넌트가 하위 컴포넌트에 데이터를 전달하는 방법입니다. 하위 컴포넌트는 this.props를 참조하여 데이터에 접근할 수 있습니다.
 * 이 때, props 데이터는 읽기 전용이기 때문에 절대 변경해서는 안됩니다. 왜냐하면 컴포넌트는 pure function처럼 작동해야 하기 때문입니다.
 * UI를 변경할 필요가 있다면 state를 활용합니다.
 */
class App extends React.Component {
    // state 선언하기
    state = {
        notes: [],
        activeId: null,
    }

    // 이벤트 핸들러 메소드
    handleListItemClick = (id) => {
        this.setState({ activeId: id });
    }

    render() {
        const { notes, activeId } = this.state;
        // 현재 활성화된 객체를 찾아서 activeNote 변수에 할당
        const activeNote = notes.filter((item) => item.id === activeId)[0];
        return (
            <div className="app">
                <Header/>
                <div className="container">
                    { /* notes와 activeId props로 전달 */ }
                    <List
                        notes={notes}
                        activeId={activeId}
                        onListItemClick={this.handleListItemClick}  // 메소드 전달
                    />
                    { /* activeNote가 존재할 때 <Note />를 렌더링 */ }
                    { /* note 속성에 activeNote 전달 */ }
                    {
                        notes.length !== 0 && <Note note={activeNote} />
                    }
                </div>
            </div>
        );
    }
}

export default App;
