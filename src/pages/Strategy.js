import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../src/theme';
import Container from '../components/Common/Container';
import Section from '../components/Common/Section';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import TwoColumnLayout from '../components/Layout/TwoColumnLayout';
import StrategySummary from '../components/Strategy/StrategySummary';
import { 
  RampIcon, 
  DrawIcon, 
  InteractionIcon, 
  FinisherIcon,
  EmrakulIcon,
  DarksteelIcon,
  CounterIcon,
  CreatureIcon
} from '../Icons';
import CardTooltip from '../components/Cards/CardTooltip';

// Import deck data
import deckData from '../../src/simplified_final_deck.json';

const PageTitle = styled.h1`
  margin-bottom: ${theme.spacing(4)};
  padding-bottom: ${theme.spacing(2)};
  border-bottom: 2px solid ${theme.colors.primary.main};
`;

const QuoteBlock = styled.blockquote`
  border-left: 4px solid ${theme.colors.primary.main};
  padding: ${theme.spacing(2)} ${theme.spacing(3)};
  margin: ${theme.spacing(3)} 0;
  font-style: italic;
  background-color: rgba(0, 168, 168, 0.1);
  border-radius: 0 ${theme.borders.radius} ${theme.borders.radius} 0;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin: ${theme.spacing(3)} 0;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${theme.borders.radius};
  overflow: hidden;
  position: relative; /* Add this */
  z-index: 1; /* Add this */
  
  th, td {
    padding: ${theme.spacing(1.5)};
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative; /* Add this */
    z-index: 1; /* Add this */
  }
  
  th {
    background-color: ${theme.colors.primary.dark};
    color: ${theme.colors.text.primary};
    font-weight: 600;
  }
  
  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  tr:hover {
    background-color: rgba(0, 168, 168, 0.1);
  }
`;

const TabContainer = styled.div`
  margin: ${theme.spacing(3)} 0;
`;

const TabButtons = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: ${theme.spacing(2)};
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary.dark};
    border-radius: 2px;
  }
`;

const TabButton = styled.button`
  padding: ${theme.spacing(1.5)} ${theme.spacing(3)};
  background-color: ${props => props.active ? theme.colors.primary.dark : 'rgba(0, 0, 0, 0.3)'};
  color: ${theme.colors.text.primary};
  border: none;
  border-bottom: 2px solid ${props => props.active ? theme.colors.accent.teal : 'transparent'};
  cursor: pointer;
  font-weight: 600;
  transition: all ${theme.animations.medium};
  white-space: nowrap;
  
  &:hover {
    background-color: ${theme.colors.primary.main}30;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.accent.teal}50;
  }
  
  svg {
    margin-right: ${theme.spacing(1)};
    vertical-align: middle;
  }
`;

const TabContent = styled.div`
  padding: ${theme.spacing(2)};
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${theme.borders.radius};
`;

const CardList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: ${theme.spacing(2)} 0;
`;

const CardItem = styled.li`
  margin-bottom: ${theme.spacing(1)};
  padding: ${theme.spacing(1)};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const TableCardTooltip = styled(CardTooltip)`
  & > div > div {
    z-index: 1500 !important;
  }
`;

// Helper function to find cards by name
const findCardByName = (name) => deckData.find(card => card.name === name);

// Get key cards
const zeganaCard = findCardByName("Prime Speaker Zegana");
const emrakulCard = findCardByName("Emrakul, the Aeons Torn");
const darksteelCard = findCardByName("Darksteel Colossus");

const Strategy = ({ activeVariant }) => {
  const [activeTab, setActiveTab] = useState('wincons');
  
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <PageTitle>Prime Speaker Zegana Strategy Guide</PageTitle>
      
      <StrategySummary activeVariant={activeVariant} />
      
      <Section
        title="Deck Overview"
        subtitle="Understanding the core identity and gameplan"
      >
        <p>
          <strong>Prime Speaker Zegana</strong> is a card-draw engine as a Commander, turning 
          high-power creatures on the battlefield into massive hand refills. This deck uses unrestricted 
          budget and powerful cards to overwhelm opponents in the mid-to-late game.
        </p>
        
        <p>
          In a typical game lasting 10–12 turns, this deck aims to <strong>accelerate its mana</strong>, 
          deploy threats that <strong>draw tons of cards</strong>, and eventually crush the table with 
          <strong>colossal creatures or extra turns</strong>.
        </p>
        
        <QuoteBlock>
          "The deck's identity is big-mana, big-creature goodstuff – it uses unrestricted budget and even 
          normally banned bombs like Emrakul, the Aeons Torn to overwhelm opponents in longer games."
        </QuoteBlock>
        
        <h3>Deck Composition</h3>
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <th>Role</th>
                <th>Count</th>
                <th>Notable Cards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mana Ramp/Acceleration</td>
                <td>~10</td>
                <td>
                  <TableCardTooltip card={findCardByName("Sol Ring")} nameOnly>Sol Ring</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Llanowar Elves")} nameOnly>Llanowar Elves</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Druid of the Cowl")} nameOnly>Druid of the Cowl</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Circuitous Route")} nameOnly>Circuitous Route</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Goreclaw, Terror of Qal Sisma")} nameOnly>Goreclaw</TableCardTooltip>
                </td>
              </tr>
              <tr>
                <td>Card Draw/Advantage</td>
                <td>~12</td>
                <td>
                  <TableCardTooltip card={zeganaCard} nameOnly>Prime Speaker Zegana</TableCardTooltip> (Commander), 
                  <TableCardTooltip card={findCardByName("Arcanis the Omnipotent")} nameOnly>Arcanis the Omnipotent</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Garruk's Uprising")} nameOnly>Garruk's Uprising</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Tatyova, Benthic Druid")} nameOnly>Tatyova</TableCardTooltip>
                </td>
              </tr>
              <tr>
                <td>Counterspells</td>
                <td>3-4</td>
                <td>
                  <TableCardTooltip card={findCardByName("Mana Leak")} nameOnly>Mana Leak</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Negate")} nameOnly>Negate</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Essence Scatter")} nameOnly>Essence Scatter</TableCardTooltip>
                </td>
              </tr>
              <tr>
                <td>Creature/Perm. Removal</td>
                <td>~8</td>
                <td>
                  <TableCardTooltip card={findCardByName("Ambuscade")} nameOnly>Ambuscade</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Bushwhack")} nameOnly>Bushwhack</TableCardTooltip> (fight effects), 
                  <TableCardTooltip card={findCardByName("Bounce Off")} nameOnly>Bounce Off</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Cyclone Summoner")} nameOnly>Cyclone Summoner</TableCardTooltip>
                </td>
              </tr>
              <tr>
                <td>Big Finishers / Bombs</td>
                <td>~6</td>
                <td>
                  {activeVariant === 'emrakul' ? 
                    <TableCardTooltip card={emrakulCard} nameOnly>Emrakul, the Aeons Torn</TableCardTooltip> : 
                    <TableCardTooltip card={darksteelCard} nameOnly>Darksteel Colossus</TableCardTooltip>}, 
                  <TableCardTooltip card={findCardByName("Expropriate")} nameOnly>Expropriate</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Omniscience")} nameOnly>Omniscience</TableCardTooltip>, 
                  <TableCardTooltip card={findCardByName("Overrun")} nameOnly>Overrun</TableCardTooltip>
                </td>
              </tr>
              <tr>
                <td>Lands</td>
                <td>35</td>
                <td>16 Islands, 15 Forests, 4 utility lands</td>
              </tr>
            </tbody>
          </StyledTable>
        </TableContainer>
      </Section>
      
      <TwoColumnLayout
        title="Strategic Differences Between Variants"
        subtitle="How the Emrakul and Darksteel Colossus builds diverge in gameplay"
        rows={[
          {
            title: "Gameplan Comparison",
            emrakul: (
              <>
                <p>The Emrakul build has a higher ceiling but requires more mana (15). The key advantages:</p>
                <ul>
                  <li>The cast trigger gives you an extra turn even if countered</li>
                  <li>Annihilator 6 forces massive sacrifices before blockers</li>
                  <li>Protection from colored spells means most removal doesn't work</li>
                  <li>Ends games quickly once resolved</li>
                </ul>
                <p>Aim to ramp hard and protect your board until you can drop Emrakul, then use the extra turn to close out the game.</p>
              </>
            ),
            darksteel: (
              <>
                <p>The Darksteel Colossus build is more consistent and can be deployed earlier (11 mana). Key advantages:</p>
                <ul>
                  <li>Indestructible means it survives board wipes and most removal</li>
                  <li>Trample ensures damage goes through even with chump blockers</li>
                  <li>Reshuffles if it would go to graveyard, preventing mill strategies</li>
                  <li>Can be cast 1-2 turns earlier than Emrakul</li>
                </ul>
                <p>This build can often cast Darksteel before Zegana, then use Zegana to draw 12 cards from its power.</p>
              </>
            )
          },
          {
            title: "Mulligan Priorities",
            emrakul: (
              <>
                <p><strong>Keep hands with:</strong></p>
                <ul>
                  <li>Early ramp (Sol Ring, Llanowar Elves) is crucial</li>
                  <li>Land + Sol Ring + ramp is an auto-keep</li>
                  <li>Circuitous Route to accelerate to high mana</li>
                  <li>Protection (counterspells) for key turns</li>
                </ul>
                <p>The Emrakul build depends more heavily on early acceleration to reach 15 mana.</p>
              </>
            ),
            darksteel: (
              <>
                <p><strong>Keep hands with:</strong></p>
                <ul>
                  <li>Balanced mix of lands and spells</li>
                  <li>Early ramp is desirable but less mandatory</li>
                  <li>Goreclaw is especially valuable as it reduces Colossus to 9 mana</li>
                  <li>Card draw to ensure continuous pressure</li>
                </ul>
                <p>This build can function with a more typical ramp curve and isn't as desperate for explosive starts.</p>
              </>
            )
          },
          {
            title: "Matchup Strengths",
            emrakul: (
              <>
                <p><strong>Strong against:</strong></p>
                <ul>
                  <li>Control decks with counterspells (can't counter Emrakul)</li>
                  <li>Token/swarm strategies (Annihilator 6 devastates boards)</li>
                  <li>Planeswalker-based decks (extra turn provides time to attack walkers)</li>
                </ul>
                <p><strong>Weak against:</strong> Very fast aggro that kills before you can reach 15 mana</p>
              </>
            ),
            darksteel: (
              <>
                <p><strong>Strong against:</strong></p>
                <ul>
                  <li>Removal-heavy decks (indestructible ignores most removal)</li>
                  <li>Board wipe tribal strategies (survives Wrath effects)</li>
                  <li>Midrange value decks (presents a faster clock)</li>
                </ul>
                <p><strong>Weak against:</strong> Exile effects, heavy countermagic, and bounce spells</p>
              </>
            )
          }
        ]}
      />
      
      <TabContainer>
        <TabButtons>
          <TabButton 
            active={activeTab === 'wincons'} 
            onClick={() => setActiveTab('wincons')}
          >
            <FinisherIcon color={activeTab === 'wincons' ? theme.colors.accent.teal : 'currentColor'} />
            Win Conditions
          </TabButton>
          <TabButton 
            active={activeTab === 'ramp'} 
            onClick={() => setActiveTab('ramp')}
          >
            <RampIcon color={activeTab === 'ramp' ? theme.colors.accent.teal : 'currentColor'} />
            Ramp Analysis
          </TabButton>
          <TabButton 
            active={activeTab === 'draw'} 
            onClick={() => setActiveTab('draw')}
          >
            <DrawIcon color={activeTab === 'draw' ? theme.colors.accent.teal : 'currentColor'} />
            Card Draw Engines
          </TabButton>
          <TabButton 
            active={activeTab === 'interaction'} 
            onClick={() => setActiveTab('interaction')}
          >
            <InteractionIcon color={activeTab === 'interaction' ? theme.colors.accent.teal : 'currentColor'} />
            Interaction Package
          </TabButton>
          <TabButton 
            active={activeTab === 'gameplan'} 
            onClick={() => setActiveTab('gameplan')}
          >
            <CounterIcon color={activeTab === 'gameplan' ? theme.colors.accent.teal : 'currentColor'} />
            Game Plan
          </TabButton>
        </TabButtons>
        
        <TabContent>
          {activeTab === 'wincons' && (
            <>
              <h3>Win Conditions</h3>
              <p>This Zegana deck can win through multiple avenues, primarily through overwhelming combat damage but also via extra turns and board dominance.</p>
              
              <h4>Combat Damage & Big Creatures</h4>
              <p>
                The most straightforward win condition is smashing face with enormous creatures. Often just one attack 
                from a huge creature is enough to knock a player out, especially if made unblockable or with trample.
              </p>
              
              <h4>Extra Turns & Lock-Outs</h4>
              <p>
                <TableCardTooltip card={emrakulCard} nameOnly>Emrakul, the Aeons Torn</TableCardTooltip> and 
                <TableCardTooltip card={findCardByName("Expropriate")} nameOnly>Expropriate</TableCardTooltip> give 
                powerful tempo swings that translate into wins. Emrakul provides an extra turn on cast and 
                cannot be countered, while Expropriate can give you extra turns and steal permanents.
              </p>
              
              <h4>Overwhelming Card Advantage/Value</h4>
              <p>
                Sometimes you win by putting the game into a state where opponents are out-resourced and cannot 
                answer your threats. For example, a mid-game Omniscience or resolving Primeval Bounty early can 
                flood the board with value that eventually overruns the opposition.
              </p>
              
              <div style={{ marginTop: theme.spacing(3), display: 'flex', justifyContent: 'center' }}>
                <Card 
                  variant={activeVariant === 'emrakul' ? 'emrakul' : 'darksteel'} 
                  highlight
                  title={activeVariant === 'emrakul' ? "Emrakul Finish" : "Darksteel Finish"}
                  icon={activeVariant === 'emrakul' ? <EmrakulIcon /> : <DarksteelIcon />}
                >
                  {activeVariant === 'emrakul' ? (
                    <>
                      <p>The classic Emrakul finish sequence:</p>
                      <ol>
                        <li>Cast Emrakul (uncounterable) — trigger extra turn</li>
                        <li>On your extra turn, attack with Emrakul triggering Annihilator 6</li>
                        <li>Opponents sacrifice 6 permanents before they can even block</li>
                        <li>15 damage connects, plus you have a full turn to set up additional threats</li>
                        <li>Follow up with Overrun or Expropriate to end the game</li>
                      </ol>
                    </>
                  ) : (
                    <>
                      <p>The classic Darksteel Colossus finish sequence:</p>
                      <ol>
                        <li>Cast Darksteel Colossus (11/11 indestructible trampler)</li>
                        <li>Protect it from exile/bounce effects with counterspells</li>
                        <li>Make it unblockable with Rogue's Passage or buff with Overrun</li>
                        <li>Attack for lethal commander damage (three hits = 33 damage)</li>
                        <li>If removed, it shuffles back into your library instead of graveyard</li>
                      </ol>
                    </>
                  )}
                </Card>
              </div>
            </>
          )}
          
          {activeTab === 'ramp' && (
            <>
              <h3>Ramp and Mana Base Analysis</h3>
              <p>
                Efficient ramp is vital to this deck's strategy of executing big plays before opponents can respond. 
                The deck runs roughly 10 dedicated ramp cards which ensure by turn 3–4 you have advanced your mana 
                beyond the standard one land per turn.
              </p>
              
              <h4>Types of Ramp Included:</h4>
              
              <h5>One-drop Mana Dorks</h5>
              <p>
                <TableCardTooltip card={findCardByName("Llanowar Elves")} nameOnly>Llanowar Elves</TableCardTooltip> is a classic opener – 
                Turn 1 Llanowar accelerates you to 3 mana on Turn 2. Similarly, 
                <TableCardTooltip card={findCardByName("Sol Ring")} nameOnly>Sol Ring</TableCardTooltip> gives you 4 mana on Turn 2.
              </p>
              
              <h5>Two-drop Ramp Creatures</h5>
              <p>
                <TableCardTooltip card={findCardByName("Druid of the Cowl")} nameOnly>Druid of the Cowl</TableCardTooltip> provides 
                additional early acceleration to maintain ramp density.
              </p>
              
              <h5>Ramp Sorceries</h5>
              <p>
                <TableCardTooltip card={findCardByName("Circuitous Route")} nameOnly>Circuitous Route</TableCardTooltip> is a 4-mana 
                sorcery that fetches two lands, putting you two mana ahead in development.
                <TableCardTooltip card={findCardByName("Ordeal of Nylea")} nameOnly>Ordeal of Nylea</TableCardTooltip> is an 
                interesting ramp piece that fetches two lands after the enchanted creature attacks twice.
              </p>
              
              <h5>Cost Reduction</h5>
              <p>
                <TableCardTooltip card={findCardByName("Goreclaw, Terror of Qal Sisma")} nameOnly>Goreclaw, Terror of Qal Sisma</TableCardTooltip> makes 
                creature spells with power 4 or greater cost {2} less. This effectively speeds up your ability to deploy big threats by a full turn.
              </p>
              
              <h4>Ramp Speed Analysis</h4>
              <p>
                With an ideal draw, the deck can hit <strong>6 mana by turn 3 or 4</strong>. This enables casting Zegana by turn 4, 
                which is a significant advantage. By turn 5, you want to be hitting the 7–8 mana mark to drop bombs or a second wave of threats.
              </p>
              
              <p>
                For the critical finishers:
              </p>
              <ul>
                <li><strong>Prime Speaker Zegana (6 mana)</strong> – Expect to cast by turn 4-5 with ramp</li>
                <li>
                  <strong>{activeVariant === 'emrakul' ? "Emrakul (15 mana)" : "Darksteel Colossus (11 mana)"}</strong> – 
                  {activeVariant === 'emrakul' 
                    ? "Usually cast around turn 9-10 without Omniscience, or earlier with cost reduction" 
                    : "Can be cast as early as turn 6-7 with good ramp, especially with Goreclaw's reduction"}
                </li>
                <li><strong>Other Key Spells:</strong> Expropriate (9 mana), Cyclone Summoner (7 mana), and Rite of Replication kicked (9 mana) are typically mid-to-late game plays</li>
              </ul>
            </>
          )}
          
          {activeTab === 'draw' && (
            <>
              <h3>Card Draw Engines</h3>
              <p>
                Card draw is the lifeblood of this deck – it ensures you always have more threats to deploy. 
                Prime Speaker Zegana is the centerpiece, often drawing anywhere from 4 to 12+ cards in one shot.
              </p>
              
              <h4>Draw Engine Categories:</h4>
              
              <h5>ETB/Activated Draw Creatures</h5>
              <p>
                <TableCardTooltip card={findCardByName("Arcanis the Omnipotent")} nameOnly>Arcanis the Omnipotent</TableCardTooltip> can 
                tap to draw 3 cards and even bounce himself to dodge removal.
                <TableCardTooltip card={findCardByName("Gadwick, the Wizened")} nameOnly>Gadwick, the Wizened</TableCardTooltip> draws 
                cards equal to X when he enters and taps down opponents' permanents.
              </p>
              
              <h5>One-shot Draw/Cantrips</h5>
              <p>
                Cards like <TableCardTooltip card={findCardByName("Chart a Course")} nameOnly>Chart a Course</TableCardTooltip>, 
                <TableCardTooltip card={findCardByName("Arcane Epiphany")} nameOnly>Arcane Epiphany</TableCardTooltip>, 
                <TableCardTooltip card={findCardByName("Think Twice")} nameOnly>Think Twice</TableCardTooltip>, 
                <TableCardTooltip card={findCardByName("Opt")} nameOnly>Opt</TableCardTooltip>, and 
                <TableCardTooltip card={findCardByName("Preordain")} nameOnly>Preordain</TableCardTooltip> keep your hand full 
                and help dig for answers or threats.
              </p>
              
              <h5>Enchantment-based Draw</h5>
              <p>
                <TableCardTooltip card={findCardByName("Garruk's Uprising")} nameOnly>Garruk's Uprising</TableCardTooltip> is extremely 
                powerful, drawing a card when it enters (if you control a 4+ power creature) and whenever a 4+ power creature enters.
                <TableCardTooltip card={findCardByName("Tatyova, Benthic Druid")} nameOnly>Tatyova, Benthic Druid</TableCardTooltip> gives 
                you life and card draw for every land that enters.
              </p>
              
              <h4>Key Draw Synergies:</h4>
              <p>
                <TableCardTooltip card={findCardByName("Archmage of Runes")} nameOnly>Archmage of Runes</TableCardTooltip> makes instants 
                and sorceries cost {1} less and draws a card whenever you cast one. This turns your cantrips into double card draw 
                and makes your interaction spells replace themselves.
              </p>
              
              <p>
                <TableCardTooltip card={findCardByName("Finale of Revelation")} nameOnly>Finale of Revelation</TableCardTooltip> with X≥10 
                is a massive finisher: draw 10, shuffle your graveyard in, untap 5 lands, and get no maximum hand size.
              </p>
              
              <div style={{ marginTop: theme.spacing(3) }}>
                <Card title="Optimal Zegana Timing" icon={<DrawIcon />}>
                  <p>
                    The most critical decision is when to cast Prime Speaker Zegana for maximum value. As a general rule:
                  </p>
                  <ul>
                    <li>Cast Zegana when she'll draw 4+ cards (usually with a 3+ power creature out)</li>
                    <li>If you have a huge creature like {activeVariant === 'emrakul' ? "Emrakul" : "Darksteel Colossus"}, casting Zegana after it can draw 12-16 cards</li>
                    <li>Don't wait too long for the "perfect" Zegana—drawing 5 cards now is usually better than waiting to draw 8 later</li>
                    <li>If recasting Zegana (due to commander tax), be more selective and wait for a high-power board</li>
                  </ul>
                </Card>
              </div>
            </>
          )}
          
          {activeTab === 'interaction' && (
            <>
              <h3>Interaction and Control Elements</h3>
              <p>
                Although this deck is proactive, it packs counterspells and bounce spells to protect your gameplan 
                and disrupt opponents. Knowing when to be reactive versus proactive is key.
              </p>
              
              <h4>Countersuite:</h4>
              <CardList>
                <CardItem>
                  <TableCardTooltip card={findCardByName("Mana Leak")} nameOnly>Mana Leak</TableCardTooltip> - Versatile early counter 
                  that becomes weaker late game. Use it to stop early board wipes or fast combos.
                </CardItem>
                <CardItem>
                  <TableCardTooltip card={findCardByName("Negate")} nameOnly>Negate</TableCardTooltip> - Your primary answer to non-creature 
                  threats like opposing counterspells, board wipes, or combo pieces.
                </CardItem>
                <CardItem>
                  <TableCardTooltip card={findCardByName("Essence Scatter")} nameOnly>Essence Scatter</TableCardTooltip> - Use this to stop 
                  creatures that you would struggle to deal with once resolved.
                </CardItem>
              </CardList>
              
              <h4>Bounce Package:</h4>
              <CardList>
                <CardItem>
                  <TableCardTooltip card={findCardByName("Unsummon")} nameOnly>Unsummon</TableCardTooltip> / 
                  <TableCardTooltip card={findCardByName("Bounce Off")} nameOnly>Bounce Off</TableCardTooltip> - Cheap instant-speed 
                  creature bounce to remove blockers or reset problematic creatures.
                </CardItem>
                <CardItem>
                  <TableCardTooltip card={findCardByName("Geistwave")} nameOnly>Geistwave</TableCardTooltip> - Bounce that draws a card 
                  if targeting your own permanent. Great for saving your creatures from removal.
                </CardItem>
                <CardItem>
                  <TableCardTooltip card={findCardByName("Into the Roil")} nameOnly>Into the Roil</TableCardTooltip> - Flexible bounce that 
                  can hit any nonland permanent and draws a card when kicked.
                </CardItem>
              </CardList>
              
              <h4>Board Reset:</h4>
              <CardList>
                <CardItem>
                  <TableCardTooltip card={findCardByName("Cyclone Summoner")} nameOnly>Cyclone Summoner</TableCardTooltip> - When cast from hand, 
                  bounces all non-Giant, non-Wizard, non-land permanents. This acts as a one-sided board wipe, especially against token decks.
                </CardItem>
              </CardList>
              
              <h4>Protection Spells:</h4>
              <CardList>
                <CardItem>
                  <TableCardTooltip card={findCardByName("Dive Down")} nameOnly>Dive Down</TableCardTooltip> - Gives +0/+3 and hexproof until end of turn. 
                  Use to protect key creatures from removal or win combat.
                </CardItem>
                <CardItem>
                  <TableCardTooltip card={findCardByName("Snakeskin Veil")} nameOnly>Snakeskin Veil</TableCardTooltip> - Gives a +1/+1 counter and hexproof. 
                  The counter stays permanently, making this protection spell add value.
                </CardItem>
              </CardList>
              
              <h4>When to Use Interaction:</h4>
              <p>Save counters for:</p>
              <ol>
                <li><strong>Board Wipes/Mass Removal</strong> - Your board will typically be stronger, so protect it</li>
                <li><strong>Devastating Haymakers</strong> - Stop game-changing spells like Insurrection</li>
                <li><strong>Combos</strong> - Counter key combo pieces before they can generate value</li>
                <li><strong>Counter-Wars</strong> - Protect your own bombs when they're cast</li>
              </ol>
            </>
          )}
          
          {activeTab === 'gameplan' && (
            <>
              <h3>Game Plan By Phase</h3>
              <p>
                The game plan with Prime Speaker Zegana evolves through the stages of the game. Here's what to focus on at each phase:
              </p>
              
              <h4>Early Game (Turns 1–3)</h4>
              <p>
                <strong>Primary Goals:</strong> Ramp, set up card draw engines, and stay out of danger. In the first few turns, 
                accelerate your mana development and ensure you have your colors.
              </p>
              <ul>
                <li>
                  <strong>Turn 1:</strong> Play a mana dork or Sol Ring if you have it. If not, a Temple of Mystery or 
                  other dual land is fine. Cantrips like Opt can help find your second land if needed.
                </li>
                <li>
                  <strong>Turn 2:</strong> Play more ramp (Druid of the Cowl) or hold up interaction if necessary. 
                  Brineborn Cutthroat at end of opponent's turn is a nice play that doesn't cost you tempo.
                </li>
                <li>
                  <strong>Turn 3:</strong> Aim to have at least 4 mana available. Cast a card-draw engine if you have one, 
                  or continue ramping with Circuitous Route to set up a turn 4 Zegana.
                </li>
              </ul>
              
              <h4>Mid Game (Turns 4–7)</h4>
              <p>
                <strong>Primary Goals:</strong> Cast Prime Speaker Zegana, draw lots of cards, and establish board presence 
                with threats while maintaining interaction.
              </p>
              <ul>
                <li>
                  <strong>Turn 4–5:</strong> Cast Prime Speaker Zegana if you have a good creature to copy, or set up for 
                  her by casting a big creature first. Balance adding to your board with holding up protection.
                </li>
                <li>
                  <strong>Develop multiple threats:</strong> Start dropping your heavy hitters. Darksteel Colossus, Predator Ooze, 
                  or Hydras can come down now. Many benefit from earlier support pieces like Garruk's Uprising.
                </li>
                <li>
                  <strong>Protect your lead:</strong> As you commit big creatures, leave mana for protection if possible, 
                  especially if you suspect board wipes. Use your superior draw to ensure you have more threats than 
                  opponents can handle.
                </li>
              </ul>
              
              <h4>Late Game (Turns 8+)</h4>
              <p>
                <strong>Primary Goals:</strong> Close out the game with finishers and prevent any last-minute swings by opponents.
              </p>
              <ul>
                <li>
                  <strong>Execute Finishing Moves:</strong> Now is when you cast your game-winning spells. 
                  {activeVariant === 'emrakul' 
                    ? "If Emrakul hasn't shown up yet, look to cast her now—she's the ultimate late-game play, giving you an extra turn." 
                    : "Darksteel Colossus combined with Rogue's Passage or Overrun can end the game in a single attack."}
                  Similarly, Expropriate often seals the deal.
                </li>
                <li>
                  <strong>Maintain Control:</strong> Save a counter or two for any last-ditch board wipe or infinite combo attempt. 
                  Don't get careless just because you're ahead.
                </li>
                <li>
                  <strong>Use Rogue's Passage:</strong> As you move to combat for the finishing blow, remember Rogue's Passage can 
                  make your biggest attacker unblockable, ensuring lethal damage.
                </li>
              </ul>
            </>
          )}
        </TabContent>
      </TabContainer>
      
      <Section
        title="Matchup Strategies"
        subtitle="Tailoring your approach to different opponents"
      >
        <Card title="Vs. Blue/Red Control or Combo" icon={<InteractionIcon />}>
          <p>
            Against a blue-red control/combo deck (think spellslinger with counters, or a deck aiming to assemble a combo like 
            Infinite Turns with a planeswalker), your approach should be cautiously aggressive.
          </p>
          
          <h4>Strategic Approach:</h4>
          <ul>
            <li>Get a threat on board early to pressure their life total</li>
            <li>Force them to use resources defensively rather than developing their combo</li>
            <li>Save counters for their key combo pieces or card draw engines</li>
            <li>Be proactive but bait their counterspells with less critical spells first</li>
            <li>Remember that {activeVariant === 'emrakul' ? "Emrakul cannot be countered" : "you may need to protect Darksteel Colossus on the stack"}</li>
          </ul>
          
          <p>
            Expect them to try assembling a win around turn 8-10. Apply serious pressure by turn 6-7 to make them uncomfortable.
          </p>
        </Card>
        
        <Card title="Vs. Token/Doubling Season Strategies" icon={<CreatureIcon />}>
          <p>
            Against token decks (lots of small creatures, token doublers, possibly big token payoffs like Craterhoof Behemoth), 
            focus on surviving the early swarm and timing a board wipe or trampling attack.
          </p>
          
          <h4>Strategic Approach:</h4>
          <ul>
            <li>Counter their enablers - Doubling Season, Anointed Procession, or Parallel Lives</li>
            <li>Use deathtouch blockers (Winged Coatl, Venom Connoisseur) to deter attacks</li>
            <li>Save Cyclone Summoner for when tokens are wide - it will bounce all tokens since they're not Giants/Wizards</li>
            <li>Establish trample and deathtouch combo to punch through their blockers</li>
            <li>Hold Essence Scatter for their finishers like Craterhoof Behemoth</li>
          </ul>
          
          <p>
            A tokens deck will usually try to get critical mass by turn 6-7. Be prepared with a response by then, either 
            Cyclone Summoner or big blockers.
          </p>
        </Card>
      </Section>
      
      <Section
        title="Power Plays and Key Synergies"
        titleIcon={<FinisherIcon />}
        background="rgba(0, 0, 0, 0.2)"
        padding={3}
      >
        <p>
          Here are some especially powerful plays and synergies in this deck that can swing games or demonstrate 
          the deck's explosive potential:
        </p>
        
        <h4>Zegana with a Huge Creature</h4>
        <p>
          The classic move is to play Prime Speaker Zegana when you control a huge creature. With 
          {activeVariant === 'emrakul' 
            ? " Emrakul (15/15) on the field, Zegana enters as a 16/16 and draws 16 cards" 
            : " Darksteel Colossus (11/11), Zegana enters as a 12/12 and draws 12 cards"}.
          That influx of a dozen cards can essentially give you every tool needed to win.
        </p>
        
        <h4>Kicked Rite of Replication</h4>
        <p>
          Rite of Replication kicked on the right target produces devastating results:
        </p>
        <ul>
          <li>On {activeVariant === 'emrakul' ? "Emrakul (if bounced to hand first)" : "Darksteel Colossus"} creates overwhelming board presence</li>
          <li>On Pelakka Wurm gives you 35 life (5 × 7) and five 7/7 bodies</li>
          <li>On Eternal Witness returns five cards from graveyard</li>
        </ul>
        
        <h4>Archmage of Runes + Cheap Spells</h4>
        <p>
          With Archmage of Runes out, every small spell turns into card advantage. Casting Opt draws 2 cards total, 
          and counter spells replace themselves. This lets you maintain interaction while building card advantage.
        </p>
        
        <h4>Deathtouch + Trample Combo</h4>
        <p>
          When you give creatures deathtouch (via Venom Connoisseur) and trample (via Garruk's Uprising or Overrun), 
          they only need to assign 1 damage to each blocker to kill it, with all remaining damage trampling over. 
          This makes even small creatures able to push through significant damage.
        </p>
        
        <h4>Finale of Revelation for X≥10</h4>
        <p>
          Casting Finale of Revelation with X=10 or more is a power play that can reset games. You draw 10+, 
          untap lands, gain no maximum hand size, and shuffle your graveyard back in. This can completely reverse 
          a losing position and set up a win in the same turn.
        </p>
      </Section>
    </Container>
  );
};

export default Strategy;