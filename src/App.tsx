import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './features/ui/compoments/containers/layout';
import CreateProposal from './features/dao/compoments/containers/create-proposal';
import CreateVote from './features/dao/compoments/containers/create-vote';
import ProposalList from './features/dao/compoments/containers/proposal-list';
import { Route, Routes } from 'react-router-dom';
import DepositContainer from './features/wallet/compoments/containers/deposit';
import TransferContainer from './features/wallet/compoments/containers/transfer';
import BorrowContainer from './features/wallet/compoments/containers/borrow';
import SwapContainer from './features/wallet/compoments/containers/swap';
import WithdrawContainer from './features/wallet/compoments/containers/withdraw';
import DashboardContainer from './features/wallet/compoments/containers/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/dashboard" element={<DashboardContainer />} />
          <Route path="/deposit" element={<DepositContainer />} />
          <Route path="/withdraw" element={<WithdrawContainer />} />
          <Route path="/transfer" element={<TransferContainer />} />
          <Route path="/borrow" element={<BorrowContainer />} />
          <Route path="/swap" element={<SwapContainer />} />
          <Route path="/proposal" element={<ProposalList />} />
          <Route path="/propose" element={<CreateProposal />} />
          <Route path="/vote" element={<CreateVote />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
