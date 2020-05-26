import React from 'react';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek,Month,Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from "@syncfusion/ej2-data";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

class App extends React.Component<{},{}>{


    private localdata: EventSettingsModel={
      dataSource: [
        {
          ID:1,
          endTime: new Date(2020,4,20,17,),
          startTime: new Date(2020,4,20,9,),
          subject: 'Meeting With Rahul Dev Sir',
          RecurrenceRule: 'FREQ=DAILY;INTERVAL=2;COUNT=2',
          //IsReadonly: true,
          //IsBlock: true
    },
    
    {
      ID:2,
      endTime: new Date(2020,4,12,9,),
      startTime: new Date(2020,4,12,6,),
      subject: 'GYM Time',
    },

    {
      ID:3,
      endTime: new Date(2020,4,1,10,),
      startTime: new Date(2020,4,1,9,),
      subject: 'Travel to Delhi',
    },
    {
      ID:4,
      endTime: new Date(2020,4,9,14,),
      startTime: new Date(2020,4,9,11,),
      subject: 'Movie Time',
    },
    {
      ID:5,
      endTime: new Date(2020,4,26,14,),
      startTime: new Date(2020,4,26,10,),
      subject: 'Meeting With Devesh Pathak Sir',
    },
    {
      ID:6,
      endTime: new Date(2020,4,3,12,),
      startTime: new Date(2020,4,3,9,),
      subject: 'Sports Time',
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=14;COUNT=',
      //IsReadonly: true,
      //IsBlock: true
},
    ],
    

      fields: {
        subject: {name:'subject',default:"Write The Task Name Please"},
        startTime:{name: 'startTime'},
        endTime: {name: 'endTime'}
      }
    };

      
        private remoteData = new DataManager({

          url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LocalData',


          adaptor: new WebApiAdaptor,
          crossDomain: true
        });
        

        private editorWindowTemplate(props:any): JSX.Element {
          return(<table className="custom-event-editor" style={{width:'100%'}}>
          <tbody>
            <tr>
              <td className="e-textlabel"> Summary </td>
              <td><input id="Summary" name="Subject" type= "text"  style={{width:'100%'}} /></td>
            </tr>

            <tr>
              <td className="e-textlabel"> Status </td>
              <td>
              <DropDownListComponent id = "EventType" dataSource={['New','Requested','confirmed']}
               placeholder='Choose Status' data-name= 'EventType' style={{width:'100%'}}  value={props.EventType || null}>
              </DropDownListComponent>
              </td>
            </tr>

            <tr>
            <td className="e-textlabel"> Form </td>
            <td>
            <DateTimePickerComponent id= "StartTime" data-name="StartTime"
            value = { new Date(props.startTime || props.StartTime)} format= 'dd/MM/YY hh:mm a'>
            </DateTimePickerComponent>
            </td>
            </tr>

            
            <tr>
            <td className="e-textlabel"> Form </td>
            <td>
              <DateTimePickerComponent id= "EndTime" data-name="EndTime"
              value = { new Date(props.endTime || props.EndTime)} format= 'dd/MM/YY hh:mm a'>
              </DateTimePickerComponent>
            </td>
            </tr>

            <tr>
              <td className="e-textlsbel"> Reason </td>
              <td>
                <textarea id="Discription" name="Discription"
                rows={4} cols={50} style ={{ width: '100%', height: '60px', resize: 'vertical'}}> </textarea>
              </td>
            </tr>

          </tbody>
          </table>)
        }


public render(){
  return (<ScheduleComponent width="100%" height="700px" currentView='Month' selectedDate={new Date(2020,4,11)} 

          eventSettings={this.localdata}
         editorTemplate = { this.editorWindowTemplate.bind(this)}>
          <Inject services= { [ Day, Week, WorkWeek, Month, Agenda ] } />

        </ScheduleComponent>);
  }   
}

export default App;



