import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIcon fontsize='large' className="header__icon" /> 
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className='header__icon' fontSize="large" />
        </IconButton>
      )}
      

      <Link to='/'>
        <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU" alt="tinder logo" />
      </Link>

      <Link to='/chat'>
        <IconButton>
          <ForumIcon className='header__icon' fontSize="large" />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header;
