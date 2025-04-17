import React from 'react';
import styled from 'styled-components';
import theme from '../../../src/theme';
import Section from '../Common/Section';
import Card from '../Common/Card';
import { EmrakulIcon, DarksteelIcon } from '../../Icons';

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(3)};
  margin: ${theme.spacing(3)} 0;
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ComparisonHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(3)};
  margin-bottom: ${theme.spacing(1)};
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const HeaderColumn = styled.div`
  text-align: center;
  font-weight: 600;
  padding: ${theme.spacing(1)};
  border-radius: ${theme.borders.radius};
  display: flex;
  align-items: center;
  justify-content: center;
  
  & svg {
    margin-right: ${theme.spacing(1)};
  }
  
  ${props => props.variant === 'emrakul' && `
    background: linear-gradient(135deg, rgba(79, 17, 82, 0.3) 0%, rgba(42, 8, 69, 0.3) 100%);
    color: #e89aff;
  `}
  
  ${props => props.variant === 'darksteel' && `
    background: linear-gradient(135deg, rgba(58, 63, 68, 0.3) 0%, rgba(35, 39, 43, 0.3) 100%);
    color: #a8b5c2;
  `}
`;

const RowTitle = styled.div`
  grid-column: 1 / -1;
  margin-top: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(1)};
  padding-bottom: ${theme.spacing(1)};
  border-bottom: 1px solid rgba(0, 168, 168, 0.3);
  color: ${theme.colors.primary.light};
  font-weight: 600;
  font-size: 1.1rem;
`;

const MobileLabel = styled.div`
  display: none;
  font-weight: 600;
  margin-bottom: ${theme.spacing(1)};
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    
    & svg {
      margin-right: ${theme.spacing(1)};
    }
  }
  
  ${props => props.variant === 'emrakul' && `
    color: #e89aff;
  `}
  
  ${props => props.variant === 'darksteel' && `
    color: #a8b5c2;
  `}
`;

/**
 * TwoColumnLayout for comparing Emrakul and Darksteel variants
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {Array} props.rows - Array of row objects with { title, emrakul, darksteel }
 * @param {boolean} props.withCards - Whether to render content in Card components
 */
const TwoColumnLayout = ({ 
  title, 
  subtitle, 
  rows = [],
  withCards = true,
  emrakulTitle = "Emrakul Build",
  darksteelTitle = "Darksteel Colossus Build",
  ...props
}) => {
  return (
    <Section 
      title={title}
      subtitle={subtitle}
      {...props}
    >
      <ComparisonHeader>
        <HeaderColumn variant="emrakul">
          <EmrakulIcon />
          {emrakulTitle}
        </HeaderColumn>
        <HeaderColumn variant="darksteel">
          <DarksteelIcon />
          {darksteelTitle}
        </HeaderColumn>
      </ComparisonHeader>
      
      <LayoutContainer>
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            {row.title && (
              <RowTitle>{row.title}</RowTitle>
            )}
            
            {withCards ? (
              <>
                <Card variant="emrakul">
                  <MobileLabel variant="emrakul">
                    <EmrakulIcon />
                    {emrakulTitle}
                  </MobileLabel>
                  {row.emrakul}
                </Card>
                <Card variant="darksteel">
                  <MobileLabel variant="darksteel">
                    <DarksteelIcon />
                    {darksteelTitle}
                  </MobileLabel>
                  {row.darksteel}
                </Card>
              </>
            ) : (
              <>
                <div>
                  <MobileLabel variant="emrakul">
                    <EmrakulIcon />
                    {emrakulTitle}
                  </MobileLabel>
                  {row.emrakul}
                </div>
                <div>
                  <MobileLabel variant="darksteel">
                    <DarksteelIcon />
                    {darksteelTitle}
                  </MobileLabel>
                  {row.darksteel}
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </LayoutContainer>
    </Section>
  );
};

export default TwoColumnLayout;