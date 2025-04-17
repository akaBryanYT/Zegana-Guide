import React from 'react';
import styled from 'styled-components';
import theme from '../../../src/theme';
import Card from '../Common/Card';
import Badge from '../Common/Badge';
import { 
  RampIcon, 
  DrawIcon, 
  InteractionIcon, 
  FinisherIcon,
  CreatureIcon,
  StrategyIcon,
  CompareIcon
} from '../../../src/Icons';

const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing(3)};
  margin: ${theme.spacing(4)} 0;
`;

const List = styled.ul`
  padding-left: ${theme.spacing(3)};
  margin-top: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};
  
  li {
    margin-bottom: ${theme.spacing(1)};
    position: relative;
  }
  
  li::before {
    content: "•";
    color: ${theme.colors.primary.main};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const KeyStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};
`;

const Stat = styled.div`
  background-color: rgba(0, 168, 168, 0.15);
  border: 1px solid ${theme.colors.primary.main};
  border-radius: ${theme.borders.radius};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-weight: 600;
  flex: 1;
  min-width: 120px;
  text-align: center;
  
  .label {
    display: block;
    font-size: 0.8rem;
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing(0.5)};
  }
  
  .value {
    font-size: 1.2rem;
    color: ${theme.colors.accent.teal};
  }
`;

const Timeline = styled.div`
  margin-top: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${theme.borders.radius};
`;

const TimelineHeader = styled.h4`
  margin-top: 0;
  margin-bottom: ${theme.spacing(2)};
  color: ${theme.colors.accent.teal};
`;

const TimelinePhase = styled.div`
  margin-bottom: ${theme.spacing(2)};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PhaseTitle = styled.div`
  font-weight: 600;
  margin-bottom: ${theme.spacing(0.5)};
  color: ${theme.colors.primary.light};
  display: flex;
  align-items: center;
  
  &::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: rgba(0, 168, 168, 0.3);
    margin-left: ${theme.spacing(1)};
  }
`;

const PhaseContent = styled.div`
  padding-left: ${theme.spacing(2)};
  border-left: 2px solid rgba(0, 168, 168, 0.3);
  margin-left: ${theme.spacing(0.5)};
  padding-bottom: ${theme.spacing(1)};
  font-size: 0.9rem;
`;

/**
 * Strategy Summary component for displaying key deck information
 */
const StrategySummary = ({ activeVariant, totalCards = 99, landCount = 35 }) => {
  // Calculate card distribution (these values should come from actual deck analysis)
  const nonLandCount = totalCards - landCount;
  
  return (
    <SummaryContainer>
      <Card title="Deck Identity" icon={<CreatureIcon />}>
        <p>Prime Speaker Zegana leads this blue-green (Simic) Commander deck, built around ramping into huge creatures and leveraging +1/+1 counter synergies.</p>
        
        <KeyStats>
          <Stat>
            <span className="label">Power Level</span>
            <span className="value">7-8/10</span>
          </Stat>
          <Stat>
            <span className="label">Land Count</span>
            <span className="value">{landCount}</span>
          </Stat>
          <Stat>
            <span className="label">Avg. CMC</span>
            <span className="value">3.8</span>
          </Stat>
        </KeyStats>
        
        <p>The deck's identity is <strong>big-mana, big-creature goodstuff</strong> – using unrestricted budget and powerful finishers to overwhelm opponents.</p>
        
        <div>
          <Badge variant="ramp">Ramp</Badge>
          <Badge variant="draw">Card Draw</Badge>
          <Badge variant="creature">Big Creatures</Badge>
          <Badge variant="counter">Counters</Badge>
          <Badge variant="interaction">Interaction</Badge>
        </div>
      </Card>
      
      <Card title="Core Strategy" icon={<StrategyIcon />}>
        <p>This deck ramps aggressively into large creatures and game-changing spells, then uses Prime Speaker Zegana's enter-the-battlefield ability to <strong>draw a huge number of cards</strong>.</p>
        
        <List>
          <li>Accelerate mana development through ramp spells and dorks</li>
          <li>Play high-power creatures to maximize Zegana's card draw</li>
          <li>Use drawn cards to deploy multiple threats and protect them</li>
          <li>Establish a dominant board state through sheer card and mana advantage</li>
          <li>Close out games with massive finishers or overrun effects</li>
        </List>
        
        <Timeline>
          <TimelineHeader>Typical Game Timeline</TimelineHeader>
          
          <TimelinePhase>
            <PhaseTitle>Early Game (Turns 1-3)</PhaseTitle>
            <PhaseContent>
              Focus on ramp and mana development. Aim to play ramp spells and mana dorks to accelerate toward your 6-mana commander.
            </PhaseContent>
          </TimelinePhase>
          
          <TimelinePhase>
            <PhaseTitle>Mid Game (Turns 4-7)</PhaseTitle>
            <PhaseContent>
              Cast Prime Speaker Zegana to draw cards. Deploy threats and set up card advantage engines. Protect your board with counterspells.
            </PhaseContent>
          </TimelinePhase>
          
          <TimelinePhase>
            <PhaseTitle>Late Game (Turns 8+)</PhaseTitle>
            <PhaseContent>
              Execute finishing moves with {activeVariant === 'emrakul' ? 'Emrakul, the Aeons Torn' : 'Darksteel Colossus'}, extra turns, and massive creatures to overwhelm opponents.
            </PhaseContent>
          </TimelinePhase>
        </Timeline>
      </Card>
      
      <Card title="Key Components" icon={<DrawIcon />}>
        <h4><RampIcon /> Mana Acceleration</h4>
        <p>~10 dedicated ramp cards including Sol Ring, Llanowar Elves, and Circuitous Route help you reach 6+ mana quickly.</p>
        
        <h4><DrawIcon /> Card Draw Engine</h4>
        <p>Zegana leads a suite of card draw effects including Arcanis, Gadwick, Garruk's Uprising, and Tatyova.</p>
        
        <h4><InteractionIcon /> Interaction</h4>
        <p>A focused suite of counterspells (Mana Leak, Negate, Essence Scatter) and bounce spells protect your gameplan.</p>
        
        <h4><FinisherIcon /> Win Conditions</h4>
        <p>Big creatures, extra turn effects (Expropriate, Emrakul), and overwhelming board presence through Overrun effects.</p>
        
        <p>The deck shines in games that go 10+ turns, with its ability to generate value and recover from setbacks.</p>
      </Card>
    </SummaryContainer>
  );
};

export default StrategySummary;