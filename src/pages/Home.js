import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth';

function Home() {
  const { user } = useContext(AuthContext);
  return (
    user  ? (
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Bem Vindo(a) {user.username}!</h1>
          <img style ={{ width: '10%', marginTop: '15px' }} src="http://cdn.shopify.com/s/files/1/1061/1924/products/Waving_Hand_Sign_Emoji_Icon_ios10_grande.png?v=1571606113" />
        </Grid.Row>
      
      </Grid>
    ) : (
      <Redirect push to='/'/>
    )
  );
}

export default Home;
