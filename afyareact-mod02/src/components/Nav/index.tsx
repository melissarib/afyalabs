import React from 'react';

import LogoAfya from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import { NavContent } from './styles';

const Nav: React.FC = () => {

    // function handleToast(){
    //     toast.success('Tudo certo!')
    // }

  return (
      <NavContent>
          <Link to="/">
             <img src={LogoAfya} alt="Logo Afya" />
          </Link>
          
          <div className="nav-contents">
              
              <Link to="/">Home</Link>
              <Link to="/contact">Contato</Link>
              {/* <button onClick={handleToast}>Clique aqui</button> */}

          </div>
      </NavContent>
     );
}

export default Nav;