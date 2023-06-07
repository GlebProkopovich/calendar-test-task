import React from 'react';
import styled from 'styled-components';

const StyledPlan = styled.div`
  display: flex;
  padding: 1% 0;
`;

const Plan = ({ children }) => {
  return <StyledPlan>{children}</StyledPlan>;
};

export default Plan;
