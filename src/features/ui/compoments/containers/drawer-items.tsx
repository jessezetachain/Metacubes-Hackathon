import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoneyIcon from '@mui/icons-material/Money';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon color="primary"/>
      </ListItemIcon>
      <Link to="/dashboard">
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MonetizationOnIcon color="primary"/>
      </ListItemIcon>
      <Link to="/deposit">
        <ListItemText primary="Deposit" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MoneyIcon color="primary"/>
      </ListItemIcon>
      <Link to="/withdraw">
        <ListItemText primary="Withdraw" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TransferWithinAStationIcon color="primary"/>
      </ListItemIcon>
      <Link to="/transfer">
        <ListItemText primary="Transfer" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CreditScoreIcon color="primary"/>
      </ListItemIcon>
      <Link to="/borrow">
        <ListItemText primary="Borrow" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CurrencyExchangeIcon color="primary"/>
      </ListItemIcon>
      <Link to="/swap">
        <ListItemText primary="Swap" />
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Membership</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <LibraryBooksIcon color="primary"/>
      </ListItemIcon>
      <Link to="/proposals">
        <ListItemText primary="Proposals" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiPeopleIcon color="primary"/>
      </ListItemIcon>
      <Link to="/propose">
        <ListItemText primary="Propose" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HowToVoteIcon color="primary"/>
      </ListItemIcon>
      <Link to="/vote">
        <ListItemText primary="Vote" />
      </Link>
    </ListItem>
  </div>
);
