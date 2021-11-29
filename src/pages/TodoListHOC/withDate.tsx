import React from 'react';

function withDate<P>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithDate = (props: P) => {
    const newDateObj = new Date();
    const currYear = newDateObj.getFullYear().toString();
    const currDate = newDateObj.getDate().toString();
    const currMonth = (newDateObj.getMonth() + 1).toString();
    return (
      <div>
        <WrappedComponent {...props} />({`${currMonth}/${currDate}/${currYear}`}
        )
      </div>
    );
  };

  return ComponentWithDate;
}

export default withDate;
