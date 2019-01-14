import * as React from 'react';
import { HeaderFooter } from '../HeaderFooter/HeaderFooter';
import { LeftPanel } from '../LeftPanel/LeftPanel';
import { RightPanel } from '../RightPanel/RightPanel';
import userList = require('./user.json')

export class Container extends React.Component<{}> {
   droppesUser = [];
   constructor(props: any) {
      super(props);
      this.state = {
         "userList": userList
      }
   }
   upadteUserList = (text_data: string) => {
      let userItems = this.state["userList"];
      let index = userItems.findIndex((item: any) => (item.id.toString().trim() == text_data.toString().trim()));
      let itemList = userItems.find((item: any) => (item.id.toString().trim() == text_data.toString().trim()));
      this.droppesUser.push(itemList);
      if (userItems) {
         userItems.splice(index, 1);
         this.updateState(userItems);
      }
   }
   onDeleteUpdateUserList = (text_data: string) => {
      let userItemsList = this.state["userList"];
      this.droppesUser.forEach((element, index) => {
         if (element.id.toString().trim() == text_data.toString().trim()) {
            userItemsList.unshift(element); // On Delete,Add user to user list at starting 
            this.updateState(userItemsList);
            this.droppesUser.splice(index, 1);
            return;
         }
      });
   }
   updateState = (userItems: any) => {
      this.setState({ "userList": userItems });
   }
   render() {
      return (
         <div>
            <HeaderFooter heading="Home" />
            <div className="flex-container clearfix">
               <LeftPanel userListData={this.state["userList"]} />
               <RightPanel updateList={this.upadteUserList} onDeleteUpdateList={this.onDeleteUpdateUserList} />
            </div>
            <HeaderFooter heading="© 2019 All Rights Reserved." />
         </div>
      )
   }
}