import React from "react";
import {colors} from '../styles/Colors.js'
import styled from 'styled-components'
import { Puzzle } from 'lucide-react';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.background};
`

const PageTitle = styled.h1`
  color: ${colors.accentDark};
  font-size: 36px;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`
const ButtonPrimary = styled.button`
  color: ${colors.accentDark};
  border: 2px solid ${colors.accentDark};
  border-radius: 99px;
  padding: 0.5rem 2rem;
  background-color: white;

  font-size: 14px;
  font-weight: 600;
`
const ButtonSecondary = styled.button`
  background-color: ${colors.accentDark};
  border: 2px solid ${colors.accentDark};
  border-radius: 99px;
  padding: 0.5rem 2rem;
  color: white;

  font-size: 14px;
  font-weight: 600;
`
export default function Home() {
  return (
    <PageWrapper>
      <Puzzle size={75} color={colors.accentDark}/>
      <PageTitle>Welcome to Puzzle with Friends</PageTitle>
      <ButtonContainer>
        <ButtonPrimary>Get Started</ButtonPrimary>
        <ButtonSecondary>Login</ButtonSecondary>
      </ButtonContainer>
    </PageWrapper>
  

  )
}