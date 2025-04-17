import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Container from '../components/Common/Container';
import Section from '../components/Common/Section';
import TwoColumnLayout from '../components/Layout/TwoColumnLayout';
import Card from '../components/Common/Card';
import { 
	EmrakulIcon, 
	DarksteelIcon, 
	FinisherIcon, 
	CreatureIcon,
	CompareIcon
	} from '../components/Icons';

// Import deck data
import deckData from '../simplified_final_deck.json';

const PageTitle = styled.h1`
  margin-bottom: ${theme.spacing(4)};
  padding-bottom: ${theme.spacing(2)};
  border-bottom: 2px solid ${theme.colors.primary.main};
`;

const ComparisonCard = styled(Card)`
  margin-bottom: ${theme.spacing(4)};
`;

const FinisherHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(2)};
`;

const FinisherImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: ${theme.borders.radius};
  box-shadow: ${theme.shadows.medium};
`;

const FinisherInfo = styled.div`
  flex: 1;
`;

const FinisherName = styled.h3`
  margin: 0 0 ${theme.spacing(1)} 0;
  color: ${props => props.variant === 'emrakul' ? '#e89aff' : props.variant === 'darksteel' ? '#c7c7c7' : theme.colors.primary.light};
`;

const FinisherType = styled.div`
  font-style: italic;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing(1)};
`;

const StatBlock = styled.div`
  margin-bottom: ${theme.spacing(3)};
  
  h4 {
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.colors.accent.teal};
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: ${theme.spacing(1)};
      text-align: left;
      border-bottom: 1px solid ${theme.colors.primary.dark}30;
    }
    
    th {
      font-weight: 600;
      color: ${theme.colors.text.secondary};
    }
    
    tr:last-child td {
      border-bottom: none;
    }
  }
`;

// Find cards
const findCardByName = (name) => deckData.find(card => card.name === name);
const emrakulCard = findCardByName("Emrakul, the Aeons Torn");
const darksteelCard = findCardByName("Darksteel Colossus");

const VariantComparison = ({ activeVariant }) => {
  return (
    <Container>
      <PageTitle>Variant Comparison: Emrakul vs. Darksteel Colossus</PageTitle>
      
      <Section
        title="Deck Variants Overview"
        subtitle="Understanding the differences between the two build options"
      >
        <p>
          This Prime Speaker Zegana Commander deck has two variants that share identical 
          cards except for a single slot: the ultimate finisher. This page provides a detailed 
          comparison of both variants to help you choose the right one for your meta and playstyle.
        </p>
        
        <p>
          The two versions are:
        </p>
        <ul>
          <li><strong>Emrakul Build</strong> — Features Emrakul, the Aeons Torn as the final haymaker</li>
          <li><strong>Darksteel Build</strong> — Swaps in Darksteel Colossus instead</li>
        </ul>
        
        <p>
          Both cards are powerful, but each leads to different gameplay patterns and matchup strengths.
        </p>
      </Section>
      
      <Section
        title="The Finishers"
        titleIcon={<FinisherIcon />}
      >
        <ComparisonCard variant="emrakul" highlight={activeVariant === 'emrakul'}>
          <FinisherHeader>
            {emrakulCard && (
              <FinisherImage 
                src={emrakulCard.normal_image_uri} 
                alt="Emrakul, the Aeons Torn"
              />
            )}
            <FinisherInfo>
              <FinisherName variant="emrakul">Emrakul, the Aeons Torn</FinisherName>
              <FinisherType>{emrakulCard?.type_line}</FinisherType>
            </FinisherInfo>
          </FinisherHeader>
          
          <StatBlock>
            <h4>Key Stats</h4>
            <table>
              <tbody>
                <tr>
                  <th>Mana Cost</th>
                  <td>{emrakulCard?.mana_cost} (15 generic mana)</td>
                </tr>
                <tr>
                  <th>Power/Toughness</th>
                  <td>{emrakulCard?.power}/{emrakulCard?.toughness}</td>
                </tr>
                <tr>
                  <th>Abilities</th>
                  <td>Uncounterable, Flying, Protection from colored spells, Annihilator 6</td>
                </tr>
                <tr>
                  <th>Special Effect</th>
                  <td>Extra turn when cast</td>
                </tr>
              </tbody>
            </table>
          </StatBlock>
          
          <p>The Emrakul version offers:</p>
          <ul>
            <li>Highest possible ceiling — extra turn + Annihilator 6 is often game-ending</li>
            <li>Cannot be countered, which is huge against control decks</li>
            <li>Protection from colored spells means most removal doesn't work</li>
            <li>Shuffles graveyard into library when put into graveyard from anywhere</li>
          </ul>
          
          <p><strong>Best For:</strong> Playgroups with lots of counterspells, removal, or long grindy games where the extra turn can lock out opponents.</p>
        </ComparisonCard>
        
        <ComparisonCard variant="darksteel" highlight={activeVariant === 'darksteel'}>
          <FinisherHeader>
            {darksteelCard && (
              <FinisherImage 
                src={darksteelCard.normal_image_uri} 
                alt="Darksteel Colossus"
              />
            )}
            <FinisherInfo>
              <FinisherName variant="darksteel">Darksteel Colossus</FinisherName>
              <FinisherType>{darksteelCard?.type_line}</FinisherType>
            </FinisherInfo>
          </FinisherHeader>
          
          <StatBlock>
            <h4>Key Stats</h4>
            <table>
              <tbody>
                <tr>
                  <th>Mana Cost</th>
                  <td>{darksteelCard?.mana_cost} (11 generic mana)</td>
                </tr>
                <tr>
                  <th>Power/Toughness</th>
                  <td>{darksteelCard?.power}/{darksteelCard?.toughness}</td>
                </tr>
                <tr>
                  <th>Abilities</th>
                  <td>Trample, Indestructible</td>
                </tr>
                <tr>
                  <th>Special Effect</th>
                  <td>If it would go to graveyard, shuffle it into library instead</td>
                </tr>
              </tbody>
            </table>
          </StatBlock>
          
          <p>The Darksteel Colossus version offers:</p>
          <ul>
            <li>Lower mana cost (11 vs 15) means it comes down 1-2 turns earlier</li>
            <li>Indestructible makes it immune to most board wipes</li>
            <li>Trample ensures it can push damage through chump blockers</li>
            <li>Reshuffles into library if it would go to graveyard, preventing mill strategies</li>
          </ul>
          
          <p><strong>Best For:</strong> Metas with lots of board wipes, creature-heavy metas where you need a roadblock, or when you want to be more competitive in tournaments.</p>
        </ComparisonCard>
      </Section>
      
      <TwoColumnLayout
        title="Strategic Differences"
        subtitle="How each variant impacts your gameplay"
        emrakulTitle="Emrakul Build"
        darksteelTitle="Colossus Build"
        rows={[
          {
            title: "Ideal Curve & Speed",
            emrakul: (
              <>
                <p><strong>Mana threshold:</strong> 15 mana (13 with Goreclaw reduction)</p>
                <p><strong>Expected casting turn:</strong> Turn 9-10 naturally, or earlier with significant ramp</p>
                <p>The Emrakul build has a higher ceiling but requires you to build more mana. You'll often:</p>
                <ul>
                  <li>Prioritize ramp more heavily</li>
                  <li>Cast Zegana earlier to find more ramp</li>
                  <li>Look for cost reduction effects</li>
                  <li>Try to cheat Emrakul in with Omniscience when possible</li>
                </ul>
                <p>This build is slightly slower but has a more explosive finish with the extra turn.</p>
              </>
            ),
            darksteel: (
              <>
                <p><strong>Mana threshold:</strong> 11 mana (9 with Goreclaw reduction)</p>
                <p><strong>Expected casting turn:</strong> Turn 7-8, possibly turn 6 with optimal ramp</p>
                <p>The Darksteel build comes online earlier and can be more consistent:</p>
                <ul>
                  <li>Can often cast Darksteel before Zegana</li>
                  <li>When Darksteel is on board, Zegana draws 12 cards</li>
                  <li>Earlier threat means more damage potential over time</li>
                  <li>4-mana difference is significant - often a full turn earlier</li>
                </ul>
                <p>This build pressures opponents earlier and can establish dominance faster.</p>
              </>
            )
          },
          {
            title: "Matchup Strengths",
            emrakul: (
              <>
                <p><strong>Strong against:</strong></p>
                <ul>
                  <li>Control decks with counterspells</li>
                  <li>Decks with lots of targeted removal</li>
                  <li>Token swarm strategies (Annihilator 6 destroys their board)</li>
                  <li>Planeswalker-based decks (extra turn to attack planeswalkers)</li>
                </ul>
                <p><strong>Weak against:</strong></p>
                <ul>
                  <li>Very fast aggro that kills before 15 mana is reached</li>
                  <li>Stax/resource denial that slows your development</li>
                  <li>Decks that can win before turn 8-9</li>
                </ul>
              </>
            ),
            darksteel: (
              <>
                <p><strong>Strong against:</strong></p>
                <ul>
                  <li>Board wipe tribal strategies</li>
                  <li>Creature-based midrange decks</li>
                  <li>Damage-based removal decks</li>
                  <li>Faster formats where reaching 15 mana is difficult</li>
                </ul>
                <p><strong>Weak against:</strong></p>
                <ul>
                  <li>Exile effects (Path to Exile, Swords to Plowshares)</li>
                  <li>Bounce/counter strategies</li>
                  <li>Combo decks (lacks Emrakul's ability to disrupt with extra turn)</li>
                </ul>
              </>
            )
          },
          {
            title: "Zegana Synergy",
            emrakul: (
              <>
                <p>When Emrakul is on the battlefield, casting Zegana draws <strong>16 cards</strong> - likely your whole deck. This creates a win-on-the-spot scenario.</p>
                <p>However, you will typically cast Zegana first to find Emrakul (or ways to cheat it in) rather than draw after Emrakul is out, since by then you're likely winning anyway.</p>
                <p>The extra turn from Emrakul lets you:</p>
                <ul>
                  <li>Cast Zegana safely on the extra turn</li>
                  <li>Deploy multiple threats with no fear of interaction</li>
                  <li>Set up lethal damage for all opponents</li>
                </ul>
              </>
            ),
            darksteel: (
              <>
                <p>Darksteel Colossus comes down earlier, allowing Zegana to draw <strong>12 cards</strong> soon after - which is still massive.</p>
                <p>The typical sequence is:</p>
                <ol>
                  <li>Ramp aggressively</li>
                  <li>Cast Darksteel Colossus around turn 7-8</li>
                  <li>Follow with Zegana to draw 12 cards</li>
                  <li>Use those cards to protect Colossus and set up lethal</li>
                </ol>
                <p>This approach is more consistent and less "all-in" than the Emrakul version, as you don't need to wait for 15 mana before your plan comes together.</p>
              </>
            )
          }
        ]}
      />
      
      <Section
        title="When To Play Each Variant"
        titleIcon={<CompareIcon />}
        background="rgba(0, 0, 0, 0.2)"
        padding={3}
      >
        <p>Based on your local meta and expected opponents, here's when to sleeve up each version:</p>
        
        <Card title="Choose Emrakul Build When..." icon={<EmrakulIcon />} variant="emrakul">
          <ul>
            <li>Your meta is slow and games regularly go beyond turn 10</li>
            <li>You face a lot of blue control decks with counterspells</li>
            <li>Opponents play decks with extensive targeted removal</li>
            <li>You want to make a big splashy play that wins immediately</li>
            <li>Token swarm decks are prevalent (Annihilator 6 devastates them)</li>
            <li>You're playing in a casual, unrestricted "kitchen table" environment</li>
          </ul>
        </Card>
        
        <Card title="Choose Darksteel Build When..." icon={<DarksteelIcon />} variant="darksteel" style={{ marginTop: theme.spacing(3) }}>
          <ul>
            <li>Your meta is slightly faster and games tend to end around turn 8-9</li>
            <li>Board wipes are common (Indestructible is key)</li>
            <li>You're facing competitive tournaments where Emrakul might be banned</li>
            <li>You want a more consistent gameplan with earlier threats</li>
            <li>You prefer to apply sustained pressure rather than one big turn</li>
            <li>Your opponents run very little exile-based removal</li>
          </ul>
        </Card>
      </Section>
    </Container>
  );
};

export default VariantComparison;