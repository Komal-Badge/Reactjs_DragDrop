import * as React from 'react';
import './leftPanel.css';
interface Props {
    userListData: any;
}
export class LeftPanel extends React.Component<Props, {}> {
    dragStart = (event: any) => {
        event.dataTransfer.setData("Text", event.target.id);
        event.dataTransfer.setData("Content", event.target.innerText);
    }
    dragStartEnd = (event: any) => {
        event.target.style.border = "";
    }
    render() {
        const userListItems = (this.props.userListData || []).map((item:any, index:any) => {
            return (
                <div className="userList" id={item.id} draggable={true} onDragEnd={(e) => this.dragStartEnd(e)} onDragStart={(e) => this.dragStart(e)} key={index} >{item.first_name}</div>
            );
        });
        return (
            <div className="left-panel">
                <div className="left-panel-outer">
                    {userListItems}
                </div>
            </div>
        )
    }
}
