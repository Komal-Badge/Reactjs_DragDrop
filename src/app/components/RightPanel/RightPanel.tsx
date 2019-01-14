import * as React from 'react';
import './rightPanel.css';
interface Props {
    updateList: Function,
    onDeleteUpdateList: Function
}
export class RightPanel extends React.Component<Props, {}> {
    drop = (event: any) => {
        event.persist()
        let text_data = event.dataTransfer.getData("text");
        let content = event.dataTransfer.getData("Content");
        if (text_data) {
            if (event.target.innerHTML.toString().trim() == "") {
                document.getElementById(text_data).removeAttribute("onDragStart");
                event.target.innerHTML = content;
                let delete_icon = document.createElement("span");
                delete_icon.setAttribute("id", text_data);
                delete_icon.setAttribute("class", " fa fa-close icon-alignment");
                delete_icon.addEventListener("click", this.deleteConfirmation);
                event.target.appendChild(delete_icon);
                this.props.updateList(text_data);
            } else {
                alert("Please Drop user on empty cell!!");
            }
        }
        event.target.style.border = "";
        this.resetHover();
    }
    deleteConfirmation = (event: any) => {
        if (confirm("Are you sure you want to delete user?")) {
            document.getElementById(event.target.parentElement.id).innerHTML = "";
            this.props.onDeleteUpdateList(event.target.id);
        } else {
            return false;
        }
    }
    dragLeave = (event: any) => {
        event.target.style.border = "";
        this.resetHover();
    }
    allowDrop = (event: any) => {
        event.preventDefault();
        if (event.target.innerHTML.toString().trim() == "") {
            event.target.style.border = "3px solid #0b80ff";
        }
    }
    dragEnter = () => {
        var list = document.getElementsByClassName("user-cell");
        for (var i = 0; i < list.length; i++) {
            if (list[i].innerHTML.toString().trim() == "") {
                let el = document.getElementById(list[i].id);
                el.style.border = "3px dotted #04d259";
            }
        }
    }
    resetHover = () => {
        var list = document.getElementsByClassName("user-cell");
        for (var i = 0; i < list.length; i++) {
            let el = document.getElementById(list[i].id);
            el.style.border = "";
        }
    }
    render() {
        let rows = ["1", "2", "3", "4", "5"];
        let tableRows = (rows || []).map((item, index) => {
            return (
                <tr key={index} draggable={false} onDrop={this.drop} onDragLeave={this.dragLeave} onDragEnter={this.dragEnter} onDragOver={this.allowDrop}>
                    <td className="user-cell" id={"0_" + item}></td>
                    <td className="user-cell" id={"1_" + item}></td>
                    <td className="user-cell" id={"2_" + item}></td>
                    <td className="user-cell" id={"3_" + item}></td>
                </tr>
            );
        });
        return (
            <div className="right-panel">
                <table>
                    <tbody className="user-table" >
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }
}
