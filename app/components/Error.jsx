import React from 'react';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';

const Error = ({children}) => {
  return <div style={{margin: '48px 0'}}>
    <Text type='display1' align='center' style={{color: '#F44336', marginBottom: '12px'}}>{children}</Text>
    <Button raised primary onTouchTap={() => location.reload()} style={{display: 'block', margin: '0 auto'}}>Reload page</Button>
  </div>
};

export default Error;
