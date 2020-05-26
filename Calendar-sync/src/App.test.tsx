import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*Comment:-  importing React Scheduler from syncfusion ej2 react schedule Package:- 
  Comment:-  Day, Week, WorkWeek, Month, Agenda:- (injection of neccessary module) these are the basic neccessary 'view' module.
  Comment:-  EventSettingsModel : import it to add events on empty schedular. */


  //Comment:-  if u want to Bind Remote data source to react scheduler then import it.

  //Comment:-  bind local jason data & define private variable name = 'localdata' of type 'EventSettingsModel'.

  //Comment:- assing the array of event obejct to 'datasource' property.

  //defining datamanger with its property.

  /*Comment:-  url will use already available remote url service which will retrive the event data through
post action and then bind the rsultant data  to react scheduler*/

//Adaptor:- Url is assinged with this WebApi Service

/* Comment:- define sheducle component inside the render method. 
selectedDate={new Date(2020,4,11) this will show the selected date and month on calender.*/

// Comment:- assing the data source object to the eventsetting property of Scheduler.

{/* Comment:- INJECTION OF SAME VIEW MODULE IN REACT COMPONENT WHICH WAS IMPORTED IN LINE NUMBER 6. */}


